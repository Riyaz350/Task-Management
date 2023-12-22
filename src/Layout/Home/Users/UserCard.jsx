import Title from '../../../Hooks/Title'
import { FaLaptopCode } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineScience } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { MdEvent } from "react-icons/md";






const UserCard = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <Title title='Professionals Who Use Us Everyday'></Title>
            <div >
            
            <div className='grid grid-cols-2 lg:grid-cols-3 my-5'>

            <div className='text-xl lg:text-5xl border-2 border-black p-2 text-center flex flex-col items-center'>
            <FaLaptopCode />
            <h1 className='font-bold'>Developers</h1>
            <p className='text-lg'> Organize projects efficiently, enhance collaboration, meet deadlines with streamlined workflows.</p>
            </div>

            <div className='text-xl lg:text-5xl border-2 border-black p-2 text-center flex flex-col items-center'>
            <IoMdMegaphone />
            <h1 className='font-bold'>Marketer</h1>
            <p className='text-lg'> Track tasks, allocate resources, optimize project timelines for successful outcomes</p>
            </div>

            <div className='text-xl lg:text-5xl border-2 border-black p-2 text-center flex flex-col items-center'>
            <IoIosSchool />
            <h1 className='font-bold'>Teachers</h1>
            <p className='text-lg'> Plan lessons, track student progress, and create a structured learning environment.</p>
            </div>

            <div className='text-xl lg:text-5xl border-2 border-black p-2 text-center flex flex-col items-center'>
            <MdOutlineScience />
            <h1 className='font-bold'>Researchers</h1>
            <p className='text-lg'> Organize data, set milestones, and facilitate collaborative research efforts effectively</p>
            </div>

            <div className='text-xl lg:text-5xl border-2 border-black p-2 text-center flex flex-col items-center'>
            <FaLaptop />
            <h1 className='font-bold'>Freelancers</h1>
            <p className='text-lg'> Manage diverse projects, set goals, and maintain a productive freelance career.</p>
            </div>

            <div className='text-xl lg:text-5xl border-2 border-black p-2 text-center flex flex-col items-center'>
            <MdEvent />
            <h1 className='font-bold'>Event Planners</h1>
            <p className='text-lg'> Coordinate events flawlessly, manage tasks, and ensure a smooth execution</p>
            </div>

        </div>
        </div>
        </div>
    );
};

export default UserCard;