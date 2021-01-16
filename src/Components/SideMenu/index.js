import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ViewListIcon from '@material-ui/icons/ViewList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListItemText from '@material-ui/core/ListItemText';

const SideMenu = props => {
  return (
    <List component="nav" aria-label="main mailbox folders">

      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <ViewListIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>

      <ListItem button component={Link} to="/add">
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Add New Post" />
      </ListItem>

    </List>
  );
}

export default SideMenu;
