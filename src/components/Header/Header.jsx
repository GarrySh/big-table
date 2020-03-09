import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { sidebarWidth } from 'constants/index.js';

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${sidebarWidth}px)`,
      marginLeft: sidebarWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default ({ title, onSidebarToggle }) => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={onSidebarToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
