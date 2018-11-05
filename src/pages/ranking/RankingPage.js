import React, { Component } from 'react';
import Header from '../../components/layout/Header/Header';
import { withStyles, Paper, List, Avatar, ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: '10%',
    marginRight: '10%',
    [theme.breakpoints.up(1280 + theme.spacing.unit * 3 * 2)]: {
      width: 1280,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    flex: 1,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    flex: 1,
    marginLeft: 15
  }
});

class RankingPage extends Component {
  render() {

    const { classes } = this.props;
    
    return(
      <div>
        <Header title={'Ranking'} />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <img src="/assets/images/darth-vader.png" alt="Darth Vader" width={'30%'} />
            <div className={classes.content}>
              <h1>Ranking!</h1>
              {this.props.state.rank.length !== 0 ? 
                <List>
                  {this.props.state.rank.map((score, index) => (
                    <ListItem key={index}>
                      <Avatar>
                        {score.score}
                      </Avatar>
                      Luke Skywalker
                      C-3PO
                      R2-D2
                      <ListItemText primary={score.name} secondary={score.email} />
                    </ListItem>
                  )).sort((a, b) => {
                    return a.score - b.score;
                  })}
                </List> : <span>No ranking availible</span>}
            </div>
          </Paper>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(withStyles(styles)(RankingPage));