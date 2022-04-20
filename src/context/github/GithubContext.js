import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const innitialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, innitialState);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    //*****Method 2: without using global variable
    // const response = await fetch("https://api.github.com/users",{
    //     headers:{
    //         Authorization: "token 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"
    //     }
    //})

    //*****Method 3: Without using global variable and without using token
    // const response = await fetch("https://api.github.com/users")

    const data = await response.json();
    console.log(data);

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
    //   setUsers(data);
    //   setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
