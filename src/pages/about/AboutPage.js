import React from 'react';
import Header from '../../components/layout/Header/Header';
import { withStyles, Paper, List, Divider, ListItem, ListItemText } from '@material-ui/core';

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

const AboutPage = (props) => {
  const { classes } = props;
  return(
    <div>
      <Header title={'About'} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <img src="/assets/images/darth-vader.png" alt="Darth Vader" width={'30%'} />
          <div className={classes.content}>
            <h1>Star Quiz!</h1>
            <h3>Rules:</h3>
            <List>
              <ListItem>
                <ListItemText primary={'Players have 2 minutes to reply the name of the character'} />
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemText primary={'10 poits for each correct answer without help'} />
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemText primary={'5 points if player require for help'} />
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemText primary={'Players attempts are illimited'} />
              </ListItem>
              <Divider />
            </List>

            <h3>Credits:</h3>
            <p>Developer by <a href="https://github.com/lucassenarj" target="_blank">Lucas Sena</a></p>
          </div>
        </Paper>
      </main>
    </div>
  );
}

export default withStyles(styles)(AboutPage);