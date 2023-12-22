import { Link } from "react-router-dom";
import '../../App.css'
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="lg:grid my-5 p-5 grid-cols-2 text-center items-center justify-center border-2 max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Master Your Day: Elevate Productivity with TaskForge</h1>
                <Link  to={user? '/dashboard/createTask' : '/signIn'} className="btn btnTask w-fit mx-auto">Let's Explore</Link>
            </div>
                <img className="w-full mx-auto" src="https://i.ibb.co/jHfn19s/4894122.jpg" alt="" />
        </div>
    );
};

export default Banner;