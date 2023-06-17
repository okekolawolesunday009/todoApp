import './styles/input.css'
import Button from './Button';
import {useState, useEffect, } from 'react';



type FormProps = {
  addTodo: (todo: string) => void;
  setTodos?: any
  todos?: any
  placeholder?: string;
};

const Input: React.FC<FormProps> = ({ setTodos,todos, addTodo, placeholder }) => {
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

 
  return (
    <form onSubmit={handleSubmit}
    className={`flex space-x-4 relative `}>
     <div className='flex-1 '>
       
     <input
      type="text"
      name="input"
      className={`input outline-none drop-shadow-xl `}
      placeholder={placeholder || 'Add text'}
      value={todo}
      onChange={handleChange}
    />
    
      </div>
   
      <div>
  
        <Button text = "add"  type = 'add' addTask = {() => addTodo}/>
      </div>

    

      
  </form>
  )
}

export default Input
