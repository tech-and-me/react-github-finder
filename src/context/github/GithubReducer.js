const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR":
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default githubReducer;
