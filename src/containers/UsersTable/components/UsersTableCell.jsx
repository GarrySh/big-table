import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cell: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    padding: '10px',
  },
});

const UsersTableCell = ({ column, children }) => {
  const classes = useStyles();

  const cellStyles = {
    flexBasis: column.flexBasis || 0,
    flexGrow: column.flexGrow || 0,
  };
  return (
    <div key={column.id} style={cellStyles} className={classes.cell}>
      {children}
    </div>
  );
};

export default UsersTableCell;
