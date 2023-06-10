import './input.css'
import Button from './Button';
import react, {useState, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
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
  const [isCompletedPage, setIsComletedPage] = useState<boolean>(false);

    useEffect(() => {
    const loadedStep = Steps.find((stepItem) => stepItem.path === location.pathname);
      setIsComletedPage(loadedStep?.step === 3 || false);
      // isCompletedPage = 
     
    

  }, [location.pathname]);

    
  return (
    <form onSubmit={handleSubmit}
    className={`flex space-x-4 relative ${isCompletedPage ? ' float-right' : 'flex'}`}>
     <div className='flex-1 '>
      {!isCompletedPage && (
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
      {!isCompletedPage && (
     
        <Button text = "add" type = 'add' addTask = {() => addTodo}/>
 
      )
      }
      </div>

    

      
  </form>
  )
}

export default Input
