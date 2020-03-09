import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading';
import Home from 'containers/Home';
import UsersList from 'containers/UsersList';
import { generateData } from 'lib';
import { actions, store } from 'store';

const list = generateData();
const jsonData = JSON.stringify(list);

const App = () => {
  const { dispatch } = useContext(store);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.parse(jsonData);
      dispatch({ type: actions.loadData, payload: data });
      setLoading(false);
    }, 300);
  }, [dispatch]);

  return (
    <Router>
      <Loading isLoading={isLoading}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/users-list' component={UsersList} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Loading>
    </Router>
  );
};

export default App;
