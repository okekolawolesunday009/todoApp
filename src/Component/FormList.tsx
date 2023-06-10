import React, { useState, useEffect } from 'react';
import TaskProp from './TaskProp';
import { useLocation } from 'react-router-dom';
import { Steps } from "../Component/Stepper/steps";
import Button from './Button';

interface FormListProps {
  todos: string[];
  setTodos?: any;
}

const FormList: React.FC<FormListProps> = ({ todos, setTodos }) => {
  const location = useLocation();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  useEffect(() => {
    const loadedStep = Steps.find((stepItem) => stepItem.path === location.pathname);
    setIsCompleted(loadedStep?.step === 3 || false);
    setIsTaskCompleted(loadedStep?.step === 2 || false);

    if (loadedStep?.step === 2 || loadedStep?.step === 3) {
      setSelectedTask(todos.find((task) => task.includes('(Completed)')) || null);
    } else {
      setSelectedTask(null);
    }
  }, [location.pathname, todos]);

  function onDeleteTask(step: number) {
    setTodos((prevTasks: string[]) => {
      return prevTasks.filter((task: string, index: number) => {
        return index !== step;
      });
    });
  }
  const filteredTodos = todos.filter((task) => {
    if (isTaskCompleted) {
      return task.includes('(Completed)');
    } else if (location.pathname.includes('completed')) {
      return task.includes('(Completed)');
    }
    return [task.includes('(Completed)'), !task.includes('(Completed)')]
  }).map((task) => task.replace('(Completed)', ''));
  
  // .map((task) => task.replace('(Completed)', ''));

  function handleDeleteAll() {
    setTodos([]);
  }
  // function handleClickComplete(task: string) {
  //   const updateTask = todos.map((todo: string) => {
  //    if (todo === task){
  //     return {...todos, isCompleted: !todos.isCompleted}; // Remove the "(Completed)" tag
  //   } 
  //    setTodos(updateTask)
      
  //   });
  // }

  function handleClickComplete(task: string) {
    const updatedTodos = todos.map((todo: string) => {
      if (todo === task) {
        if (todo.includes('(Completed)')) {
          return todo.replace('(Completed)', ''); // Remove the "(Completed)" tag
        } else {
          return todo + ' (Completed)'; // Add the "(Completed)" tag
        }
      }
      return todo;
    });
  
    setTodos(updatedTodos);
  }
  

  return (
    <div>
      {filteredTodos.map((todo: string, index: number) => (
        <TaskProp
          key={index}
          task={todo}
          step={index}
          onDeleteTask={onDeleteTask}
          handleClickComplete={handleClickComplete}
          selected={(isTaskCompleted && isCompleted) || location.pathname.includes('Completed') ? todo === selectedTask : false}
        />
      ))}
      <div className="float-right mt-2">
        {isCompleted && <Button text="delete all" type="delete" deleteTaskAll={handleDeleteAll} />}
      </div>
    </div>
  );
};

export default FormList;
