import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Steps } from "../Component/Stepper/steps";
import { AiOutlineDelete } from 'react-icons/ai';

interface TaskProps {
  task: string;
  handleClick?: () => void;
  onDeleteTask?: (step: number) => void;
  step: number;
}

const TaskProp: React.FC<TaskProps> = ({ task, step, onDeleteTask }) => {
  const [complete, setComplete] = useState<boolean>(false);
  const location = useLocation();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    const loadedStep = Steps.find((stepItem) => stepItem.path === location.pathname);
    setIsCompleted(loadedStep?.step === 3 || false);
  }, [location.pathname]);

  function handleClick() {
    setComplete(!complete);
  }

  function handleDeleteTask() {
    if (onDeleteTask) {
      onDeleteTask(step);
    }
  }

  return (
    <div className='flex justify-between'>
      <div className='flex space-x-3'>
        <input
          type="checkbox"
          onClick={handleClick}
          className="w-3 lg:w-5"
          name=""
          id=""
        />
        <h2 className={`text-small lg:text-3xl ${complete ? 'strike' : ''}`}>{task}</h2>
      </div>
      {isCompleted && (
        <AiOutlineDelete className='' onClick={handleDeleteTask} />
      )}
    </div>
  );
}

export default TaskProp;
