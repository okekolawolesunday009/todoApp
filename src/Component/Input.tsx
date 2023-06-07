import './input.css'
import Button from './Button';
import react, {useState, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import StepperList, { LoadedStepProps } from "../Component/Stepper/StepperList";
import { Steps } from "../Component/Stepper/steps";



type InputProps = {
  addTodo: (todo: string) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ addTodo, placeholder }) => {
  const [todo, setTodo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      addTodo(todo);
      setTodo('');
    }
  };

  const location = useLocation();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

    useEffect(() => {
    const loadedStep = Steps.find((stepItem) => stepItem.path === location.pathname);
     console.log(loadedStep); 
      setIsCompleted(loadedStep?.step === 3 || false);
      console.log(isCompleted); 
      // isCompleted = 
     
    

  }, [location.pathname]);

    
  return (
    <form onSubmit={handleSubmit}
    className={`flex space-x-4 relative ${isCompleted ? ' float-right' : 'flex'}`}>
     <div className='flex-1 '>
      {!isCompleted && (
     <input
      type="text"
      name="input"
      className="input outline-none"
      placeholder={placeholder || 'Add text'}
      value={todo}
      onChange={handleChange}
    />
      )}

     
      </div>
   
      <div>
      {isCompleted ? (
        <Button text = "delete all" type = 'delete' addTask = {() => addTodo}/>
      ) : (
        <Button text = "add" type = 'add' addTask = {() => addTodo}/>
 
      )
      }
      </div>

    

      
  </form>
  )
}

export default Input
