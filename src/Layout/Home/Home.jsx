import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import Banner from './Banner'
import Users from "./Users/Users";

const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="min-h-screen">
            <Banner></Banner>

            <Users></Users>
                
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;