import React, { useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { orderBy as _orderBy, memoize as _memoize } from 'lodash-es';
import { makeStyles } from '@material-ui/core/styles';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Paper } from '@material-ui/core';
import UsersTableHeader from './components/UsersTableHeader';
import UsersTableRow from './components/UsersTableRow';

const columns = [
  { id: 'id', label: 'Id', flexBasis: 60, canBeSorted: true },
  { id: 'firstName', label: 'First name', flexBasis: 100, canBeSorted: true },
  { id: 'lastName', label: 'Last name', flexBasis: 100, canBeSorted: true },
  { id: 'departmentIds', label: 'Departments', flexBasis: 400, flexGrow: 1 },
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  tableWrapper: {
    height: '500px',
  },
}));

const createItemData = _memoize((rows, cols) => ({
  rows,
  cols,
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

  const Row = props => {
    const { style, index, data } = props;
    const { rows, cols } = data;
    return <UsersTableRow row={rows[index]} cols={cols} style={style} />;
  };

  const itemData = createItemData(sortedUsers, columns);

  return (
    <Paper className={classes.root}>
      <UsersTableHeader
        cols={columns}
        order={order}
        orderBy={orderBy}
        onClick={handleRequestSort}
      />
      <div className={classes.tableWrapper}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              className='List'
              height={height}
              itemCount={itemData.rows.length}
              itemSize={60}
              width={width}
              itemData={itemData}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div>
    </Paper>
  );
};

export default UsersTable;
