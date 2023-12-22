import DatePicker from "react-datepicker";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Authentication/AuthProvider";
import Swal from "sweetalert2";
import Title from "../../../Hooks/Title";
import '../../../App.css'
import Column from "./ManageTasks/Column";
import TasksBoard from "./ManageTasks/TasksBoard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useTasks from "../../../Hooks/useTasks";



const CreateTask = () => {

    const {user} =useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [startDate, setStartDate] = useState(new Date());
    const [difficultyValue, setDifficultyValue] = useState('easy')
    const day = startDate.getDate()
    const month = startDate.getMonth()
    const year = startDate.getFullYear()
    const [,,refetch] = useTasks()

    const handleAddPhone = e =>{
        e.preventDefault()
        const form = e.target
        const email = user.email
        const title = form.title.value
        const difficulty = difficultyValue
        const date = day+'/'+month+'/'+year
        const description = form.description.value
        const addTask = {title,email, difficulty,  date, description}

        axiosPublic.post(`/tasks`, addTask)
        .then(data =>{
            if(data.status == 200){
                refetch()
                e.target.reset()
                    Swal.fire({position: "top-end",icon: "success", title: "Task Created", showConfirmButton: false, timer: 1500 });
                }
        })



    }

    const handleDifficulty = e =>{
        const difficulty = e.target.value
        setDifficultyValue(difficulty)
    }
    // const handleSubject = e =>{
    //     const difficulty = e.target.value
    //     setSubjectValue(difficulty)
    // }

    return (
        <div className='w-1/2 mx-auto flex flex-col'>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btnTask w-fit mx-auto " onClick={()=>document.getElementById('my_modal_4').showModal()}>Add Task</button>
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <Title title='Create A Task'></Title>
                <div className="modal-action flex flex-col">
                <form  onSubmit={handleAddPhone} className="lg:space-y-10 form my-10">
                                <div className=" md:gap-6 ">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="title"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Title" required />
                                </div>
                                
                                    <div className="lg:flex justify-around items-end gap-20 space-y-10 lg:space-y-0 mb-10">
                                        <div className="relative text-xl lg:text-3xl lg:w-[500px] mr-auto">
                                            <select className="bg-[#92140c] text-[#FFDDB6] " onChange={handleDifficulty}>
                                                <option value="low">Low</option>
                                                <option value="moderate">Moderate</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                        {/* <div className="relative text-xl lg:text-3xl lg:w-[500px] mr-auto">
                                            <select className="bg-[#92140c] text-[#FFDDB6] " onChange={handleSubject}>
                                                <option value="math">Math</option>
                                                <option value="cse">CSE</option>
                                                <option value="art">Art</option>
                                            </select>
                                        </div> */}
                                    
                                        <div className="lg:w-[500px] mx-auto  text-[#FFDDB6]">
                                        <DatePicker className="lg:text-3xl bg-[#92140c] text-center text-xl" selected={startDate} onChange={(date)  => setStartDate(date)} />
                                        </div>

                                        
                                        
                                    
                                    </div>
                                </div>
                                <div>
                                <textarea name="description" placeholder="Description"  className="textarea textarea-bordered h-[200px] textarea-lg w-full " ></textarea>
                                </div>
                        <button type="submit" className="btnTask btn">Add Task</button>
                        </form>
                        <form method="dialog" className="w-full">
                        <button className="btn">Close</button>

                </form>
                
                </div>
            </div>
        </dialog>
            <div className=" ">

            

            

            
        <TasksBoard></TasksBoard>
        </div>

        </div>                                                                                       
    );
};

export default CreateTask;