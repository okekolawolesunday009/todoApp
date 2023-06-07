import React from 'react'
import TaskProp from './TaskProp';
interface FormListProps {
  todos: string[];
}

const FormList: React.FC<FormListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo: string, index: number) => (
        <TaskProp key = {index} task = {todo}/>
      ))}
    </div>
  )
}

export default FormList
