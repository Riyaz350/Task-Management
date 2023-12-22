import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import '../../../../App.css'

// const Container = styled.div`
//   color: #000;
//   margin-bottom: 8px;
//   margin-left: 10px;
//   margin-right: 10px;
//   background-color: ${(props) => bgcolorChange(props)};
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
// `;

const TextContent = styled.div``;




export default function Task({ task, index }) {
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
            <div className="flex flex-col lg:flex-row ">
            <button className="btn btnTask">Update</button>
            <button className="btn btnTask">Delete</button>
            </div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}