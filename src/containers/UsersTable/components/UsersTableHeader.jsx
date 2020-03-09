import React, { memo } from 'react';
import { TableCell, TableHead, TableSortLabel, TableRow } from '@material-ui/core';

const UsersTableHeader = ({ columns, order, orderBy, onClick }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map(column => (
          <TableCell
            key={column.id}
            style={{ minWidth: column.minWidth }}
            sortDirection={orderBy === column.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : 'asc'}
              onClick={column.canBeSorted ? onClick(column.id) : null}
              hideSortIcon={!column.canBeSorted}
            >
              {column.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default memo(UsersTableHeader);
