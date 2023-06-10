import React from 'react'
import './button.css';
import { AiOutlineDelete } from 'react-icons/ai';


type ButtonTypes = 'add' | 'delete';

interface ButtonProps {
    text: string
    addTask?: () => void
    deleteTaskAll?: () => void
    type?: ButtonTypes

}


const Button: React.FC<ButtonProps> = ({text, type, addTask, deleteTaskAll}: ButtonProps) => {
    const buttonClass = `button ${type}`;
    
  
    const handleClick = () => {
      if (type === 'add' && addTask) {
        addTask();
      } else if (type === 'delete' && deleteTaskAll) {
        deleteTaskAll();
      }
    };
    
   
    
   
  return (
    <div  className ={buttonClass}>
      {type === 'delete' && 
       (<AiOutlineDelete/>)
       }

      <button
      
       onClick={handleClick} 
       >
      
       {text}
       
      </button>
      
    </div>
  )
}

export default Button
