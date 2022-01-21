import { createContext, useCallback, useReducer } from 'react';
import githubReducer from './GithubReducre';

const GITHUB_URL = 'https://api.github.com';
const GITHUB_TOKEN = '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';

const GithubContext = createContext({
  users: [],
  user: {},
  searchUsers: () => {},
  clearUsers: () => {},
  getUser: () => {},
});

const initialState = {
  users: [],
  user: {},
  loading: false,
};

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // const navigate = useNavigate();
  // Get searched users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await res.json();
    dispatch({ type: 'GET_USERS', users: items });
  };

  // Get single users
  const getUser = useCallback(async (login) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 404) {
      // navigate('./nofound');
    } else {
      const data = await res.json();

      dispatch({ type: 'GET_USER', payload: data });
    }
  }, []);

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  // Clearing Users on Click
  const clearUsers = () => {
    dispatch({ type: 'CLEAR_USERS', payload: initialState });
  };

  const usersData = {
    users: state.users,
    user: state.user,
    loading: state.loading,
    searchUsers,
    clearUsers,
    getUser,
    // repos: repos,
  };

  return <GithubContext.Provider value={usersData}>{children}</GithubContext.Provider>;
};

export default GithubContext;
