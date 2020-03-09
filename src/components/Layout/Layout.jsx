import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Helmet from 'components/Helmet';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default ({ children, title }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Helmet title={title} />
      <Header title={title} onSidebarToggle={handleSidebarToggle} />
      <Sidebar onSidebarToggle={handleSidebarToggle} mobileOpen={mobileOpen} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
