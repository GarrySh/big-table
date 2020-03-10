import React, { memo } from 'react';
import DepartmentList from 'containers/DepartmentList';
import { makeStyles } from '@material-ui/core/styles';
import UsersTableCell from './UsersTableCell';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    height: '60px',
    borderBottom: '1px solid rgb(224, 224, 224)',
  },
  cell: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
});

const UsersTableRow = props => {
  const { row, cols, style } = props;
  const classes = useStyles();

  return (
    <div className={classes.row} style={style}>
      {cols.map(column => {
        const value =
          column.id === 'departmentIds' ? (
            <DepartmentList departmentIds={row[column.id]} />
          ) : (
            row[column.id]
          );
        return (
          <UsersTableCell key={column.id} column={column}>
            {value}
          </UsersTableCell>
        );
      })}
    </div>
  );
};

export default memo(UsersTableRow);
