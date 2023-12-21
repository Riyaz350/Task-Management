import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UserCard from "./UserCard";

const Users = () => {

  const [users, setUser] = useState([])

  const axiosPublic = useAxiosPublic()
  useEffect(()=>{
    const allUsers = axiosPublic.get('/users')
    .then(res=>setUser(res.data))
  },[axiosPublic])
    return (
        <div className="grid grid-cols-4">
          {
            users.map(user=><UserCard key={user._id} user={user}></UserCard>)
          }
        </div>
    );
};

export default Users;