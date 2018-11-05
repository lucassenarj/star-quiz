import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateScore } from '../actions/score';
import { 
  withStyles,
  Card,
  CardActions,
  CardMedia,
  Button,
  Input,
  Modal
 } from '@material-ui/core';
import { MoreHoriz, Help } from '@material-ui/icons';
import Details from './Details';

const styles = {
  card: {
    width: '30%',
    float: 'left',
    margin: 20
  },
  media: {
    height: '200px',
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    justifyContent: 'space-between'
  }
};

class Character extends Component {
  state = {
    modalOpen: false,
    disabled: false,
    help: false,
    reply: false,
    error: false
  }

  handleReplyButton = () => {
    this.setState({
      reply: true
    });
  }

  handleReplyInput = (event) => {
    let reply = event.target.value;
    if(reply !== this.props.data.name) {
      return this.setState({
        error: true
      });
    }

    if(reply === this.props.data.name) {
      const score = this.state.help ? 5 : 10;
      this.props.updateScore(score);
      this.setState({
        disabled: true,
        error: false
      });
    }
  }

  handleModal = () => {
    this.setState((prevState) => ({
      modalOpen: !prevState.modalOpen,
      help: true
    }));
  }

  render() {
    const { classes } = this.props;
    const thumbnail = `/assets/images/characters/${this.props.data.name.toLowerCase().replace(' ', '-')}.jpg`;

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={thumbnail}
          />
          <CardActions className={classes.cardActions}>
            <Button onClick={this.handleReplyButton} size="small" color="primary">
              <Help />
            </Button>
            {this.state.reply && <Input
              onChange={this.handleReplyInput}
              error={this.state.error}
              disabled={this.state.disabled} />
            }
            <Button onClick={this.handleModal} size="small" color="primary">
              <MoreHoriz />
            </Button>
          </CardActions>
        </Card>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpen}
          onClose={this.handleModal}
        >
          <Details details={this.props.data} close={this.handleModal} thumbnail={thumbnail} />
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateScore: (score) => dispatch(updateScore(score))
});

export default withStyles(styles)(connect(undefined, mapDispatchToProps)(Character));