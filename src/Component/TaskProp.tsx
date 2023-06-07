import './input.css';
import react, {useState, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import { Steps } from "../Component/Stepper/steps";
import {AiOutlineDelete} from 'react-icons/ai'

interface TaskProps  {
    task: string
    handleClick?: () => void
    deleteTask?: () => void
    
}

export interface StepperProps  {
    Tasks: TaskProps[]
   
    
}
const TaskProp = ({task}: TaskProps) => {
  const [complete, setComplete] = useState<boolean>(false);


  function handleClick () {
    setComplete(!complete);
   
  }

  const location = useLocation();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

    useEffect(() => {
    const loadedStep = Steps.find((stepItem) => stepItem.path === location.pathname);
     console.log(loadedStep); 
      setIsCompleted(loadedStep?.step === 3 || false);
      console.log(isCompleted); 
      // isCompleted = 
     
    

  }, [location.pathname]);

  function deleteTask(){
    console.log('delete');
  };

  return (
    <div className='flex justify-between'>
    <div className='flex space-x-3'>
        <input type="checkbox"
         onClick={handleClick}
         className = "w-3 lg:w-5"
         name="" 
         id="" />
        <h2 className={`text-small lg:text-3xl ${complete ? 'strike': ''}`}>{task}</h2>
    

      
    </div>
     {isCompleted && (
      <AiOutlineDelete className=''
       onClick={deleteTask}/>
     )}
     </div>
  )
}

export default TaskProp
