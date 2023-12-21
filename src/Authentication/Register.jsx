import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import auth from "../../firebase.config";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css'
import { FaGoogle } from "react-icons/fa";



const Register = () => {
    const [name, setName] =useState("")
    const [photo, setPhoto] =useState('')
    const [email, setEmail] =useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();


const {createUser, logOut, signInPop} =useContext(AuthContext)

const handleEmailRegister = e=>{
    e.preventDefault()
    if(password.length<6){
        Swal.fire({position: "top-end", icon: "error", title: "Password must be at lease 6 characters", showConfirmButton: false, timer: 1500});
        
    }else if(!/[A-Z]/.test(password)){
        Swal.fire({position: "top-end", icon: "error", title: "Password must have a capital letter", showConfirmButton: false, timer: 1500});

        
    }
    else if(!/[^a-zA-Z0-9]/.test(password)){
        Swal.fire({position: "top-end", icon: "error", title: "Password must have a special character", showConfirmButton: false, timer: 1500});

        
    }else{
        createUser( email, password)
    .then(()=>{
        e.target.reset()
        Swal.fire({position: "top-end", icon: "success", title: "Please Sign In again", showConfirmButton: false, timer: 1500});

        // const userInfo = {email:email, name:name, photo:photo,  role:'user', owned: '', acceptedAgreement:''}
        // axios.post('/users', userInfo )
        // .then()
        
        logOut()
        .then(result=>console.log(result))
        .catch(error => console.log(error.message))
        
        updateProfile(auth.currentUser, { displayName: name, photoURL:photo }).catch(
            (err) => console.log(err))
            navigate('/login')
        
    })
    .catch(e =>{
        if(e.message == 'Firebase: Error (auth/email-already-in-use).'){
            Swal.fire({position: "top-end", icon: "error", title: "This Email is already in use", showConfirmButton: false, timer: 1500});
        } 
    })
     
    }
}

const handleGoogleSignIn = () =>{
    signInPop(provider)
    .then(()=>{
        Swal.fire({position: "top-end", icon: "error", title: "Google sign up successful", showConfirmButton: false, timer: 1500});
        navigate(location?.state? location.state :'/')

    }).catch(()=>{
    })
}

    return (
        <div >

        <div  className="py-20 lg:p-20">
            <div className={"text-black light-home max-w-xl rounded-3xl mx-auto my-20 py-10 px-5 lg:p-20 border-2 border-black"}>
                <div className="text-center ">
                <h1 className="text-3xl mb-10 lg:text-5xl font-bold ">Register </h1>
                </div>
                <div className="bg-white p-10 rounded-xl">
                <form onSubmit={handleEmailRegister} className="bg-white">

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#0d3454]">Full Name</span>
                    </label>
                    <input onChange={e=>setName(e.target.value)} type="text"  placeholder="Full Name" className="input input-bordered border-[#0d3454] text-[#0d3454]" required />
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#0d3454]">Photo Url</span>
                    </label>
                    <input onChange={e=>setPhoto(e.target.value)} type="text"  placeholder="Photo Url" className="input input-bordered border-[#0d3454] text-[#0d3454]" required />
                    </div>

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
                    <button className="btn btnTask">Register</button>
                    </div>

                </form>
                    <div className="form-control mt-4">
                    <button onClick={handleGoogleSignIn} className="btn btnTask"><FaGoogle /> Sign Up with Google</button>
                    </div>

                    <div className="space-y-5 mt-5">
                    <p className="text-center ">Already have an account?? <Link to="/signIn" className="text-blue-500 hover:underline">Log In</Link></p>
                    </div>
               
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;