import React, { useContext, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import '../../../../App.css'
import { AuthContext } from "../../../../Authentication/AuthProvider";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import Title from "../../../../Hooks/Title";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useTasks from "../../../../Hooks/useTasks";




const TextContent = styled.div``;








export default function Task({ task, index }) {

const [,,refetch] = useTasks()
const {user} =useContext(AuthContext)
const axiosPublic = useAxiosPublic()
const [startDate, setStartDate] = useState(new Date());
const [difficultyValue, setDifficultyValue] = useState('easy')
const day = startDate.getDate()
const month = startDate.getMonth()
const year = startDate.getFullYear()

  const handleUpdate = e =>{
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const difficulty = difficultyValue
    const date = day+'/'+month+'/'+year
    const description = form.description.value
    const addTask = {title, difficulty,  date, description}

    axiosPublic.put(`/task?_id=${task._id}`, addTask)
    .then(data =>{
        if(data.status == 200){
            e.target.reset()
                Swal.fire({position: "top-end",icon: "success", title: "Task updated", showConfirmButton: false, timer: 1500 });
            }
    })

}

const handleDelete = ()=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      axiosPublic.delete(`/tasks/${task._id}`)
      .then(res => {
        if(res.status ==200){
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success"
          });
        }
      })

      
    }
  });
}

const handleDifficulty = e =>{
  const difficulty = e.target.value
  setDifficultyValue(difficulty)
}

  return (
    <Draggable draggableId={`${task._id}`} key={task._id} index={index}>
      {(provided) => (
        <div className="shadow-2xl rounded-lg p-5 min-h-[150px] flex justify-between flex-col cursor-pointer bg-[#ffecd1] my-2 text-[#001524]"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
            <span>
              <small>
                {/* #{task.id} */}
                {"  "}
              </small>
            </span>
          </div>
          <div className="flex-col"
            style={{ display: "flex", justifyContent: "center", padding: 2 }}
          >
            <TextContent>{task.title}</TextContent>
            <TextContent className="text-sm">Deadline:{task.date}</TextContent>
            <div className="flex justify-center flex-row ">

        <div>
            <button className="btn btnTask w-fit mx-auto " onClick={()=>document.getElementById('my_modal22').showModal()}><FaPencilAlt /></button>
        <dialog id="my_modal22" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <Title title='Create A Task'></Title>
                <div className="modal-action flex flex-col">
                <form  onSubmit={handleUpdate} className="lg:space-y-10 form my-10">
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
                                        <div className="lg:w-[500px] mx-auto  text-[#FFDDB6]">
                                        <DatePicker className="lg:text-3xl bg-[#92140c] text-center text-xl" selected={startDate} onChange={(date)  => setStartDate(date)} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <textarea name="description" placeholder="Description"  className="textarea textarea-bordered h-[200px] textarea-lg w-full " ></textarea>
                                </div>
                        <button type="submit" className="btnTask btn">Update</button>
                        </form>
                        <form method="dialog" className="w-full">
                        <button className="btn">Close</button>

                </form>
                
                </div>
            </div>
        </dialog>
        </div>
        <div>

            <button onClick={()=>handleDelete()} className="btn btnTask"><MdDelete /></button>
        </div>
            </div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}