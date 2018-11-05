import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { resetScore } from '../actions/score';
import { updateRanking } from '../actions/rank';
import { Button, withStyles, Grid, TextField, Icon } from '@material-ui/core';
import { AccountCircle, Email } from '@material-ui/icons';

const styles = theme => ({
  content: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  fontFinished: {
    fontSize: 80,
    margin: 5
  },

  fontScore: {
    fontSize: 40,
    fontHeight: 'bold'
  },

  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
});

class Score extends Component {
  state = {
    gameFinished: true,
    player: {
      name: undefined,
      email: undefined,
      score: 0
    }
  }

  handleUserName = (event) => {
    let name = event.target.value;
    const score = this.props.score;
    this.setState((prevState) => ({
      player: {
        ...prevState.player,
        name,
        score
      }
    }));
  }

  handleUserEmail = (event) => {
    let email = event.target.value;
    this.setState((prevState) => ({
      player: {
        ...prevState.player,
        email
      }
    }));
  }

  handleUserSubmit = () => {
    if(!this.state.player.name) {
      return;
    }

    if(!this.state.player.email) {
      return;
    }

    this.props.updateRanking(this.state.player);
    this.setState({
      gameFinished: false
    });
    this.props.resetScore();
  }

  handleModal = () => {
    
  }

  render() {
    const { classes } = this.props;
    return (
      <Modal
        isOpen={this.state.gameFinished}
        onRequestClose={this.handleModal}
        contentLabel="Selected Option"
      >
        <div className={classes.content}>
          <h1 className={classes.fontFinished}>Quiz Finished!</h1>
          <img src="/assets/images/darth-vader-impressive.png" alt="Darth Vader"/>
          <p>Congratulations, your score final is: <span className={classes.fontScore}>{this.props.score}</span> points</p>
          <p>Please, type your name and email for our rank</p>
          <div>
            <Grid container spacing={8} direction="row" justify="center" alignItems="center">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField onChange={this.handleUserName} id="input-with-icon-grid" label="Name" />
              </Grid>
              
              <Grid item>
                <Email />
              </Grid>
              <Grid item>
                <TextField onChange={this.handleUserEmail} id="input-with-icon-grid" label="Email" />
              </Grid>
              <Button onClick={this.handleUserSubmit} variant="contained" color="primary" className={classes.button}>
                Send
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
            </Grid>
          </div>
          {!this.state.gameFinished && <Redirect to={`/`} />}
        </div>
      </Modal>
    )
  };
}

const mapStateToProps = (state, props) => {
  if(state.player) {
    return {
      player: state.player
    }
  }
  return {
    score: state.score
  }
};

const mapDispatchToProps = (dispatch, state) => ({
  resetScore: () => dispatch(resetScore()),
  updateRanking: (player) => dispatch(updateRanking(player))
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Score));