import React, { useState, useMemo, useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import { orderBy as _orderBy } from 'lodash-es';
import { makeStyles } from '@material-ui/core/styles';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Paper } from '@material-ui/core';
import Button from 'components/Button';

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
  btn: {
    marginBottom: theme.spacing(1),
  },
}));

const createItemData = (rows, cols) => ({
  rows,
  cols,
});

const UsersTable = ({ users }) => {
  const classes = useStyles();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [counter, setCounter] = useState(0);

  const handleRequestSort = useCallback(
    id => event => {
      event.preventDefault();
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [setOrder, setOrderBy, order, orderBy],
  );

  const handleClickCounter = useCallback(() => setCounter(count => count + 1), [setCounter]);

  const Row = props => {
    const { style, index, data } = props;
    const { rows, cols } = data;
    return <UsersTableRow row={rows[index]} cols={cols} style={style} />;
  };

  const sortedUsers = useMemo(() => _orderBy(users, [orderBy], [order]), [users, orderBy, order]);
  const itemData = useMemo(() => createItemData(sortedUsers, columns), [sortedUsers]);

  return (
    <>
      <Button className={classes.btn} onClick={handleClickCounter}>{`Counter ${counter}`}</Button>
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
    </>
  );
};

export default UsersTable;
