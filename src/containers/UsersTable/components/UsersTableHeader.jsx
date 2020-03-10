import React, { memo } from 'react';
import { TableSortLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UsersTableCell from './UsersTableCell';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    borderBottom: '1px solid rgb(224, 224, 224)',
    height: '60px',
    backgroundColor: 'gainsboro',
    fontSize: '14px',
    fontWeight: 'bold',
  },
});

const UsersTableHeader = ({ cols, order, orderBy, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.row}>
      {cols.map(column => {
        return (
          <UsersTableCell column={column} key={column.id}>
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : 'asc'}
              onClick={column.canBeSorted ? onClick(column.id) : null}
              hideSortIcon={!column.canBeSorted}
            >
              {column.label}
            </TableSortLabel>
          </UsersTableCell>
        );
      })}
    </div>
  );
};

export default memo(UsersTableHeader);
