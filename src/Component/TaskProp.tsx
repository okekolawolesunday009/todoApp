import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import './styles/taskprop.css';

interface TaskProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onDeleteTask?: (taskId: number | undefined) => void;
  handleClickComplete?: (taskId: number) => void;
  currentFilter?: string;
  taskId?: number;
}

const TaskProp: React.FC<TaskProps> = ({
  task,
  currentFilter,
  taskId,
  onDeleteTask,
  handleClickComplete,
}) => {

  const [activeTask, setActiveTask] = useState<boolean>(false);

  const handleDeleteTask = () => {
    if (onDeleteTask) {
      onDeleteTask(taskId);
    }
  };

  const handleClick = () => {
    setActiveTask(!activeTask);
    localStorage.setItem(`activeTask_${taskId}`, JSON.stringify(!activeTask));
    if (handleClickComplete) {
      handleClickComplete(taskId!);
    }
  };

  return (
    <div className={`flex justify-between items-center drop-shadow-lg taskprop mb-2 p-2 rounded-xl text-black ${task.completed ? 'completed' : ''}`}>
      <div className="flex space-x-3">
        <input
          type="checkbox"
          checked={activeTask}
          onChange={handleClick}
          className="w-3 lg:w-5"
          name=""
          id=""
        />
        <div>
          <h2 className={`text-small font-bold text-black hover:text-white lg:text-xl 
          ${activeTask ? 'strike' : ''}
          `}>
            {task.text}
          </h2>
        </div>
      </div>
      {currentFilter === 'Completed' && (
        <AiOutlineDelete
          className="text-black hover:text-white text-sm lg:text-lg"
          onClick={handleDeleteTask}
        />
      )}
    </div>
  );
};

export default TaskProp;
