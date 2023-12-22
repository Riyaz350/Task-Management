import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="lg:flex p-0 m-0 max-w-full">
            
            <Sidebar></Sidebar>
            
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Dashboard;