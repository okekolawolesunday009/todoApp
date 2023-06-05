import React, {useState} from 'react'
import './input.css'
import Button from './Button';

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
    
  return (
    <form onSubmit={handleSubmit}
    className='flex space-x-4'>
    <input
      type="text"
      name="input"
      className="input outline-none"
      placeholder={placeholder || 'Add text'}
      value={todo}
      onChange={handleChange}
    />
    <Button text = "add" type = 'add' addTask = {() => addTodo}/>
  </form>
  )
}

export default Input
