import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import Swal from "sweetalert2";
import { IoIosLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";

import '../../../App.css'



const Sidebar = () => {

  const {logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)

  //LogOut button handler 
  const handleLogOut = e =>{
    e.preventDefault()
    logOut()
    .then(()=>{
      Swal.fire({position: "top-end",icon: "success", title: "Logged Out", showConfirmButton: false, timer: 1500 });
      navigate('/')
    })
    .catch(()=>{console.log("error")})

  }
    return (
          <div className="drawer lg:min-h-screen lg:w-fit  lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content lg:hidden flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btnTask drawer-button lg:hidden">Menu</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 lg:w-80 gap-5  bg-[#001524] py-5 min-h-full w-1/2 text-[#ffecd1] text-xl lg:text-3xl">
      {/* Sidebar content here */}
      <img src={user?.photoURL} className="w-1/2 rounded-lg" alt="" />
      <Link className="flex items-center gap-2" to='/'> <FaHome />Home</Link>
      <Link className="flex items-center gap-2" to='/dashboard/createTask' > <IoCreate />Manage Tasks</Link>
      {/* <Link className="flex items-center gap-2" to='/dashboard/tasksBoard' > <IoCreate />Tasks Board</Link> */}
      <Link className="flex items-center gap-2" onClick={handleLogOut}> <IoIosLogOut />Log Out</Link>
    </ul>
  
  </div>
          </div>
    );
};

export default Sidebar;