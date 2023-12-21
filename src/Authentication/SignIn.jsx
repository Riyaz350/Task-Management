import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import '../App.css'
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";


const SignIn = () => {
    const {user, signInPop} = useContext(AuthContext)
    const {signInUser} =useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")
    const provider = new GoogleAuthProvider();

    
    // Email password sign in
    const handleSignIn = e =>{
        e.preventDefault()
        signInUser(email, password)
        .then(()=>{    
            
                Swal.fire({position: "top-end", icon: "success", title: "Welcome to Harmony Haven", showConfirmButton: false, timer: 1500});
                e.target.reset()
                navigate(location?.state? location.state :'/')
            
            })
        .catch((error)=>{
            console.log(error)
            if(error){
                Swal.fire({position: "top-end", icon: "error", title: "Wrong Credentials", showConfirmButton: false, timer: 1500});
            }
        })
    }

    // Google Sign in 
    const handleGoogleSignIn = () =>{
        signInPop(provider)
        .then(()=>{
            Swal.fire({position: "top-end", icon: "success", title: "Google sign in successful", showConfirmButton: false, timer: 1500});
            navigate(location?.state? location.state :'/')

        }).catch(()=>{
        })
    }


    return (
        <div >
            <div data-aos='fade-up' className="py-20 lg:p-20">
                <div className={"text-black light-home max-w-xl rounded-3xl mx-auto my-20 py-10 px-5 lg:p-20 border-2 border-black"}>
                    <div className="text-center ">
                    <h1 className="text-3xl mb-10 lg:text-5xl font-bold ">Sign in </h1>
                    </div>
                    <div className="bg-white p-10 rounded-xl">
                    <form onSubmit={handleSignIn} className="bg-white">
                        <div className="form-control">
                        <label className="label">
                            <span className=" label-text text-black">Email</span>
                        </label>
                        <input onChange={e=> setEmail(e.target.value)} type="email"  placeholder="email" className="input input-bordered border-[#0d3454] text-[#0d3454]" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="text-black">Password</span>
                        </label>
                        <input onChange={e=> setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered border-[#0d3454]" required />
                        <div>
                        </div>

                        <label className="label">
                            <a href="#" className= "text-black label-text-alt text-base link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-4">
                        <button className="btn btnTask">Login</button>
                        </div>

                            

                    </form>
                        <div className="form-control mt-4">
                        <button onClick={handleGoogleSignIn} className="btn btnTask"><FaGoogle /> Login With Google</button>
                        </div>
                            <div className="space-y-5 mt-5">
                            <p className="text-center ">Do not have an account?? <Link to="/register" className="text-blue-500 hover:underline">Register Here</Link></p>
                            </div>
                    
                    </div>
                </div>
                </div>
            </div>
    );
};

export default SignIn;