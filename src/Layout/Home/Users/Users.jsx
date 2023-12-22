import UserCard from "./UserCard";
import useUserData from "../../../Hooks/useUserData";

const Users = () => {

  const [usersData, userLoading] = useUserData()

    return (
        <div>
          {userLoading && <p>Loading...</p>}
          <div className="grid grid-cols-4">
          {
            usersData.map(user=><UserCard key={user._id} user={user}></UserCard>)
          }
        </div>
        </div>
    );
};

export default Users;