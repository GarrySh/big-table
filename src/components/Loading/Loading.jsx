import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default ({ isLoading, children }) => {
  const classes = useStyles();
  return isLoading ? (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  ) : (
    children
  );
};
