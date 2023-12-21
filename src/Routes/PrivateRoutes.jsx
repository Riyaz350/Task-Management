import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        <span className="loading loading-ring loading-lg"></span>

    }
    else if(user){
        return children;
    }else{
        Swal.fire({position: "top-end", icon: "error", title: "Please Sign In Before Proceeding", showConfirmButton: false, timer: 1500});

        return<Navigate state={location.pathname} to='/logIn'></Navigate>
        
        }
    
};

export default PrivateRoutes;