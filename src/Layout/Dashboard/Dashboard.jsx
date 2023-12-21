import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;