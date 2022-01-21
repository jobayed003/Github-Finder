import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext({
  setAlert: () => {},
});

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });

    setTimeout(() => dispatch({ type: 'REMOVE__ALERT' }), 3000);
  };

  const alertValue = {
    alert: state,
    setAlert,
  };

  return <AlertContext.Provider value={alertValue}>{children}</AlertContext.Provider>;
};

export default AlertContext;
