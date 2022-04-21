import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //Set an alert
  const setAlert = (msg) => {
    dispatch({
      type: "SET_ALERT",
      payload: {msg},
    });

    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_ALERT",
        }),
      4000
    );
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
