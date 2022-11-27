import { useState, useContext, useReducer } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, fetchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      fetchUsers(text);
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grd-cols2 lg:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-contro">
            <div className="relative">
              <input
                type="text"
                value={text}
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={(e) => handleChange(e)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button className="btn-outline btn btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
