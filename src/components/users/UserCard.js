import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;
  return (
    <div className="card shadow-md compact side bg-base-100">
      {/* ---------Start of flex card------------------------------ */}
      <div className="flex-row items-center space-x-4 card-body">
        {/* item1 of flex :  Avatar */}

        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="profile" />
          </div>
        </div>

        {/* item2 of flex : Name and link */}
        <div>
          <h2 className="card-title">{login}</h2>

          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>

      {/* ---------------------------------------End of flex-card */}
    </div>
  );
};

export default UserItem;
