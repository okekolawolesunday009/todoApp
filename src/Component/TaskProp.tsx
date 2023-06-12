import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Steps } from "../Component/Stepper/steps";
import { AiOutlineDelete } from 'react-icons/ai';
import './taskprop.css'


interface TaskProps {
  task: string;
  handleClick?: () => void;
  onDeleteTask?: (step: number) => void;
  handleClickComplete?: (task: string) => void;
  step: number;
  time: Date;
  selected: boolean; 
}

const TaskProp: React.FC<TaskProps> = ({ task, time, step, onDeleteTask, selected, handleClickComplete }) => {
  const [completedTask, setCompletedTask] = useState<boolean>(false);
  const location = useLocation();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    const loadedStep = Steps.find((stepItem) => stepItem.path === location.pathname);
    setIsCompleted(loadedStep?.step === 3 || false);
  }, [location.pathname]);

  function handleClick() {
    setCompletedTask(!completedTask);
    if (handleClickComplete) {
      handleClickComplete(task);
    }

  }
  

  function handleDeleteTask() {
    if (onDeleteTask) {
      onDeleteTask(step);
    }
  }

  return (
    <div
     className='flex justify-between items-center drop-shadow-lg taskprop  hover:text-white bg-white  mb-2 p-2 rounded-xl text-black'>
      <div className='flex space-x-3'>
        <input
          type="checkbox"
          checked={completedTask} 
          onChange={handleClick}
          className="w-3 lg:w-5"
          name=""
          id=""
        />
        <div>
        <h2 className={`text-small font-bold text-black hover:text-white lg:text-xl ${completedTask ? 'strike' : ''}`}>{task}</h2>
        <p className='text-black text-xs lg:text-base hover:text-white'>{time.toLocaleString()}</p>
        </div>
      </div>
      {isCompleted &&  (
        <AiOutlineDelete className='text-black hover:text-white text-sm lg:text-lg' onClick={handleDeleteTask} />
      )}
    </div>
  );
}

export default TaskProp;
