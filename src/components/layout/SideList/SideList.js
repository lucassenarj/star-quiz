import React from 'react';
import { Link } from 'react-router-dom';
import { 
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Avatar
} from '@material-ui/core';
import { Home, QuestionAnswer, Info, StarRate } from '@material-ui/icons';

export default (props) => {
  return (
    <div className={props.layout}>
      <List style={{padding: 20 }}>
        <Avatar src="/assets/images/darth-vader.png" alt="Darth Vader" style={{width:200, height: 200}} />
      </List>
      <Divider />
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </Link>

        <Link to="/quiz">
          <ListItem button>
            <ListItemIcon><QuestionAnswer /></ListItemIcon>
            <ListItemText primary={'Quiz'} />
          </ListItem>
        </Link>

        <Link to="/ranking">
          <ListItem button>
            <ListItemIcon><StarRate /></ListItemIcon>
            <ListItemText primary={'Ranking'} />
          </ListItem>
        </Link>

        <Link to="/about">
          <ListItem button>
            <ListItemIcon><Info /></ListItemIcon>
            <ListItemText primary={'About'} />
          </ListItem>
        </Link>
      </List>
    </div>
  ) 
}