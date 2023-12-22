import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task'
import './tasks.css'

const Container = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`;

const TaskList = styled.div`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({title, tasks, id}) => {
    return (
        <Container className="column w-[200px] lg:w-full mx-auto  min-h-screen  overflow-scroll border-2 border-black">
        <Title className='bg-black' 
          // style={{
          //   backgroundColor: "lightblue",
          //   position: "stick",
          // }}
        >
          {title}
        </Title>
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isdraggingover={snapshot.isdraggingover}
            >
              {tasks.map((task, index) => (
                <Task key={index} index={index} task={task} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
};

export default Column;