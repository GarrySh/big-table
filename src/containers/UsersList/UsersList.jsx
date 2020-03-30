import React, { useContext, Fragment } from 'react';
import Layout from 'components/Layout';
import P from 'components/P';
import UsersTable from 'containers/UsersTable';
import { store } from 'store';
import AddUser from 'containers/AddUser';

const UsersList = () => {
  const { state } = useContext(store);
  const { users, departments } = state;

  return (
    <Layout title='Список пользователей'>
      <AddUser />
      <P>Список всех пользователей</P>
      <UsersTable users={users} />
      {departments.map(department => {
        const filtredUsers = users.filter(user => user.departmentIds.includes(department.id));
        return (
          <Fragment key={department.id}>
            <P>{`Список пользователей, входящих в группу ${department.title}`}</P>
            <UsersTable users={filtredUsers} />
          </Fragment>
        );
      })}
    </Layout>
  );
};

export default UsersList;
