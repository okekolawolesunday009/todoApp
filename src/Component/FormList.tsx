import react, {useState, useEffect, } from 'react';
import TaskProp from './TaskProp';
import { useLocation } from 'react-router-dom';

import { Steps } from "../Component/Stepper/steps";
import Button from './Button';
import { TodoProps } from '../Pages/TodoPage';

interface FormListProps {
  todos: string[]
  setTodos?: any
  
}

const FormList: React.FC<FormListProps> = ({ todos, setTodos }) => {

  const location = useLocation();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

    useEffect(() => {
    const loadedStep = Steps.find((stepItem) => stepItem.path === location.pathname);
     console.log(loadedStep); 
      setIsCompleted(loadedStep?.step === 3 || false);
      console.log(isCompleted); 
      // isCompleted = 
     
    

  }, [location.pathname]);

  function onDeleteTask(step: number){
    setTodos((prevTasks: string[])=>{
      return prevTasks.filter((Tasks: string, index: number) => {
        return  (index !== step);
      });
    });
  };

  function handleDeleteAll(){
    setTodos([]);

  }
  
  return (
    <div>
      {todos.map((todo: string, index: number) => (
        <TaskProp key = {index} task = {todo} step={index} onDeleteTask={onDeleteTask}/>
      ))}

      <div className ="float-right mt-2">
      {isCompleted && (
        <Button text = "delete all" type = 'delete' deleteTaskAll={handleDeleteAll}  />
        )}
      </div>


    </div>
  )
}

export default FormList
