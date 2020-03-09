import React, { useState } from 'react';
import { orderBy as _orderBy } from 'lodash-es';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableContainer } from '@material-ui/core';
import UsersTableHeader from './components/UsersTableHeader';
import UsersTableRow from './components/UsersTableRow';

const columns = [
  { id: 'id', label: 'Id', minWidth: 20, canBeSorted: true },
  { id: 'firstName', label: 'First name', minWidth: 60, canBeSorted: true },
  { id: 'lastName', label: 'Last name', minWidth: 60, canBeSorted: true },
  { id: 'departmentIds', label: 'Departments', minWidth: 100 },
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  container: {
    maxHeight: '500px',
  },
}));

const UsersTable = ({ users }) => {
  const classes = useStyles();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');

  const handleRequestSort = id => event => {
    event.preventDefault();
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const sortedUsers = _orderBy(users, [orderBy], [order]);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <UsersTableHeader
            columns={columns}
            order={order}
            orderBy={orderBy}
            onClick={handleRequestSort}
          />
          <TableBody>
            {sortedUsers.map(row => (
              <UsersTableRow key={row.id} row={row} columns={columns} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UsersTable;
