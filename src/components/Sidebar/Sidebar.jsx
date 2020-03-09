import React from 'react';
import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { HomeOutlined as HomeIcon, List as ListIcon } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { sidebarWidth } from 'constants/index.js';

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: sidebarWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: sidebarWidth,
  },
}));

const MenuItems = [
  {
    id: 0,
    text: 'Главная',
    icon: <HomeIcon />,
    href: '/',
  },
  {
    id: 1,
    text: 'Список пользователей',
    icon: <ListIcon />,
    href: '/users-list',
  },
];

export default ({ mobileOpen, onSidebarToggle }) => {
  const classes = useStyles();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {MenuItems.map(({ id, text, icon, href }) => (
          <ListItem key={id} component={NavLink} to={href}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label='mailbox folders'>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation='css'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={onSidebarToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};
