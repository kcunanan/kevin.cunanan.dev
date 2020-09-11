import React from 'react';
import PropTypes from 'prop-types';

import Reducer from '_/store/Reducer';

const initialState = {
  loading: true,
  error: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export const Context = React.createContext(initialState);

Store.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Store;