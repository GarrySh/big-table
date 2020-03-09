import React, { memo } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import DepartmentList from 'containers/DepartmentList';

const UsersTableRow = ({ row, columns }) => (
  <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
    {columns.map(column => {
      const value =
        column.id === 'departmentIds' ? (
          <DepartmentList departmentIds={row[column.id]} />
        ) : (
          row[column.id]
        );
      return <TableCell key={column.id}>{value}</TableCell>;
    })}
  </TableRow>
);

export default memo(UsersTableRow);
