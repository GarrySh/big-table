import React, { createContext, useReducer } from 'react';

const initialState = { users: [], colors: [], departments: [] };

const store = createContext(initialState);
const { Provider } = store;

const actions = {
  loadData: 'LOAD_DATA',
  addUser: 'ADD_USER',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.loadData:
      return { ...action.payload };
    case actions.addUser: {
      const lastUser = state.users[state.users.length - 1];
      const newUser = { ...action.payload, id: lastUser.id + 1 };
      return { ...state, users: [...state.users, newUser] };
    }
    default:
      throw new Error('unknown action type');
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const providerValue = { state, dispatch };
  return <Provider value={providerValue}>{children}</Provider>;
};

export { store, actions, StateProvider };
