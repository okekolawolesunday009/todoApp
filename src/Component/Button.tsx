import React from 'react'
import './button.css';

type ButtonTypes = 'add' | 'delete';

interface ButtonProps {
    text: string
    addTask?: () => void
    type?: ButtonTypes
}

const Button: React.FC<ButtonProps> = ({text, type}: ButtonProps) => {
    const buttonClass = `button ${type}`;
    
    const addTask = (event: React.MouseEvent<HTMLButtonElement>) =>{
        console.log(event);
      }
   
  return (
    <div>
      <button
       className ={buttonClass}
       onClick={addTask}>
       {text}
       
      </button>
      
    </div>
  )
}

export default Button
