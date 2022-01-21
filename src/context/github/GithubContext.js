import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext({
  users: [],
  user: {},
  clearUsers: () => {},
});

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const usersData = {
    ...state,
    dispatch,
  };

  return <GithubContext.Provider value={usersData}>{children}</GithubContext.Provider>;
};

export default GithubContext;
