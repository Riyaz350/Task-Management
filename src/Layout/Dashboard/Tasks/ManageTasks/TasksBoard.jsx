import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import styled from "styled-components";
import useTasks from "../../../../Hooks/useTasks";

export default function TaskBoard() {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [tasks] =useTasks()
  console.log(tasks)
  // http://localhost:5000/tasks
  // https://jsonplaceholder.typicode.com/todos
  useEffect(() => {
   
        setIncomplete(tasks.filter((task) => !task.completed));
      }, [tasks]);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination.droppableId) return;

    //REMOVE FROM SOURCE ARRAY

    if (source.droppableId == 2) {
      setCompleted(removeItemById(draggableId, completed));
    } else if(source.droppableId == 4){
      setProcessing(removeItemById(draggableId, processing));
    }
     else {
      setIncomplete(removeItemById(draggableId, incomplete));
    }

    // GET ITEM

    const task = findItemById(draggableId, [...incomplete,...processing, ...completed]);

    //ADD ITEM
    if (destination.droppableId == 2) {
      setCompleted([{ ...task, completed: !task.completed }, ...completed]);
    } else if(destination.droppableId == 4) {
      setProcessing([{ ...task, processing: !task.processing }, ...processing]);
    }
     else {
      setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
    }
  };

  function findItemById(id, array) {
    return array.find((item) => item._id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item._id != id);
  }
  

  return (
    <DragDropContext   onDragEnd={handleDragEnd}>
      <h2 style={{ textAlign: "center" }}>PROGRESS BOARD</h2>

      <div className="flex p-0 items-center  justify-center flex-col lg:flex-row "
      >
        <Column className='text-white text-3xl' title={"TO DO"} tasks={incomplete} id={"1"} />
        <Column title={"Processing"} tasks={processing} id={"4"} />
        <Column title={"DONE"} tasks={completed} id={"2"} />
        {/* <Column title={"BACKLOG"} tasks={[]} id={"3"} /> */}
      </div>
    </DragDropContext>
  );
}