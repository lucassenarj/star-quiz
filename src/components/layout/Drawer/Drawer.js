import React, { Component } from 'react';
import { withStyles, SwipeableDrawer, } from '@material-ui/core';
import SideList from '../SideList/SideList';

const styles = {
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto'
  },
};

class Drawer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <SwipeableDrawer
        open={this.props.action}
        onClose={this.props.handle}
        onOpen={this.props.handle}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={this.props.handle}
          onKeyDown={this.props.handle}
        >
          <SideList layout={classes.fullList} />
        </div>
      </SwipeableDrawer>
    )
  }
}

export default withStyles(styles)(Drawer);


