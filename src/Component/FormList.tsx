import React from 'react'
interface FormListProps {
  todos: string[];
}

const FormList: React.FC<FormListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo: string, index: number) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  )
}

export default FormList
