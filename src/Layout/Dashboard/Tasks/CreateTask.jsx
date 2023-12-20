import DatePicker from "react-datepicker";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Authentication/AuthProvider";
import Swal from "sweetalert2";
import Title from "../../../Hooks/Title";
import '../../../App.css'



const CreateTask = () => {

    const {user} =useContext(AuthContext)
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const [difficultyValue, setDifficultyValue] = useState('easy')
    const [subjectValue, setSubjectValue] = useState('Math')
    const day = startDate.getDate()
    const month = startDate.getMonth()
    const year = startDate.getFullYear()

    const handleAddPhone = e =>{
        e.preventDefault()
        const form = e.target
        const email = user.email
        const title = form.title.value
        const difficulty = difficultyValue
        const photo = form.photo.value
        const subject = subjectValue
        const mark = form.mark.value
        const date = day+'/'+month+'/'+year
        const description = form.description.value
        const addAssignment = {title,email, difficulty, photo, mark,subject, date, description}

        axios.post(`https://assignment-server-sand.vercel.app/assignments?email=${user?.email}`, addAssignment, {withCredentials:true})
        .then(data =>{
                Swal.fire({position: "top-end",icon: "success", title: "Assignment Created", showConfirmButton: false, timer: 1500 });
                navigate('/assignments')
                console.log(data)
        })



    }

    const handleDifficulty = e =>{
        const difficulty = e.target.value
        setDifficultyValue(difficulty)
    }
    const handleSubject = e =>{
        const difficulty = e.target.value
        setSubjectValue(difficulty)
    }

    return (
        <div className={` ${"light-home"}`}>
            <div className="min-h-screen p-10 lg:px-20 lg:py-20 ">

            <Title title='Create A Task'></Title>

            <form  onSubmit={handleAddPhone} className="lg:space-y-10 form my-10">
                    <div className=" md:gap-6 ">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="title"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Title" required />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Thumbnail Photo URL" />
                    </div>
                        <div className="lg:flex justify-around items-end gap-20 space-y-10 lg:space-y-0 mb-10">
                            <div className="relative text-xl lg:text-3xl lg:w-[500px] mr-auto">
                                <select className="bg-[#92140c] text-[#FFDDB6] " onChange={handleDifficulty}>
                                    <option value="easy">Low</option>
                                    <option value="medium">Moderate</option>
                                    <option value="hard">High</option>
                                </select>
                            </div>
                            <div className="relative text-xl lg:text-3xl lg:w-[500px] mr-auto">
                                <select className="bg-[#92140c] text-[#FFDDB6] " onChange={handleSubject}>
                                    <option value="math">Math</option>
                                    <option value="cse">CSE</option>
                                    <option value="art">Art</option>
                                </select>
                            </div>
                        
                            <div className="lg:w-[500px] mx-auto  text-[#FFDDB6]">
                            <DatePicker className="lg:text-3xl bg-[#92140c] text-center text-xl" selected={startDate} onChange={(date)  => setStartDate(date)} />
                            </div>

                            
                            <div className="relative z-0 lg:w-[500px] ml-auto mb-6 group">
                                <input type="number" name="mark" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Mark" required />
                            </div>
                        
                        </div>
                    </div>
                    <div>
                    <textarea name="description" placeholder="Description"  className="textarea textarea-bordered h-[200px] textarea-lg w-full " ></textarea>
                    </div>
            <button type="submit" className="btnTask btn">Add Task</button>
            </form>
        </div>
        </div>                                                                                       
    );
};

export default CreateTask;