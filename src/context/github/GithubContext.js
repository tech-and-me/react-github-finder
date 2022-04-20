import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const innitialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, innitialState);

  //Get search result
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    // const response = await fetch(`${GITHUB_URL}/users`, {
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`,
    //   },
    // });

    //*****Method 2: without using global variable
    // const response = await fetch("https://api.github.com/users",{
    //     headers:{
    //         Authorization: "token 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"
    //     }
    //})

    //*****Method 3: Without using global variable and without using token
    const response = await fetch(
      `https://api.github.com/search/users?${params}`
    );

    const { items } = await response.json();
    console.log(items);

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
    //   setUsers(data);
    //   setLoading(false);
  };

  //Clear users from state
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  //Set Loading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
