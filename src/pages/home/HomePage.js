import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import { withStyles, Paper, Button } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';

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
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  }
});

const HomePage = (props) => {
  const { classes } = props;
  return(
    <div>
      <Header title={'Home Page'} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <img src="assets/images/darth-vader.png" alt="Darth Vader" width={'30%'} />
          <h1>StarQuiz!</h1>
          <Link to="/quiz">
            <Button variant="contained" color="primary">
              Play
              <PlayArrow />
            </Button>
          </Link>
        </Paper>
      </main>
    </div>
  );
}

export default withStyles(styles)(HomePage);