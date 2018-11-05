import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../Drawer/Drawer';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

class Header extends Component {
  state = {
    drawer: false
  }

  handleDrawer = () => {
    this.setState((prevState) => ({
      drawer: !prevState.drawer
    }));
  }

  render() {
    const { classes } = this.props;
  
    return (
      <header className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton onClick={this.handleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {this.props.title}
            </Typography>
            {this.props.countdown && this.props.countdown}
          </Toolbar>
        </AppBar>
        <Drawer action={this.state.drawer} handle={this.handleDrawer} />
      </header>
    );
  }
}

export default withStyles(styles)(Header);