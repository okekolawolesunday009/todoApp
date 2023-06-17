  import Input from "../Component/Form";
  import React, { useState, useEffect } from "react";
  import TaskProp from "../Component/TaskProp";
  import Button from "../Component/Button";
  import '../Component/styles/taskprop.css';



  export type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };

  export const Home = () => {
    const [currentFilter, setCurrentFilter] = useState<string>("All");
    const [todos, setTodos] = useState<Todo[]>([ ]);
    
    
    useEffect(() => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        if (setTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      }
    }, [setTodos]);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const filteredTasks = (filter: string) => {
      switch (filter) {
        case "All":
          return todos;
        case "Active":
          return todos.filter((todo) => !todo.completed);
        case "Completed":
          return todos.filter((todo) => todo.completed);
        default:
          return todos;
      }
    };
    

    

    const addTodo = (todo: string) => {
      const newTask = {
        id: Date.now(),
        text: todo,
        completed: false,
      };
      if (setTodos) {
          setTodos([...(todos), newTask]);
        }
    };

    const handleClickComplete = (taskId: any) => {
      const updatedTodos = (todos).map((todo) => {
        if (todo.id === taskId) {
          return { ...todo, completed: !todo.completed  };
        }
        return todo;
      });
    
      if (setTodos) {
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
      }
    };
    
    function handleDeleteTask(taskId: any) {
      const updatedTasks = (todos).filter((task) => task.id !== taskId);
      if (setTodos) {
      setTodos(updatedTasks);
      }
    }
    const setFilter = (filter: string) => {
      setCurrentFilter(filter);
    };

    function handleDeleteAll() {
      setTodos([]);
    }
    

    return (
      <div className="flex flex-col">
        
        <div className="mb-6 toggle-btn  text-center space-x-8 font-bold justify-between">
          <button className="lg:text-xl" onClick={() => setFilter("All")}>All</button>
          <button className="lg:text-xl " onClick={() => setFilter("Active")}>Active</button>
          <button className="lg:text-xl" onClick={() => setFilter("Completed")}>Completed</button>
        </div>
        <div className="mt-4">
        {currentFilter !== "Completed" && (
          <Input setTodos={setTodos} addTodo={addTodo} todos={todos} />
        )}
        </div>
        <div className="mt-4">
        {filteredTasks(currentFilter).map((task: Todo) => (
          <TaskProp 
          key={task.id} 
          task={task} 
          taskId = {task.id}
          currentFilter = {currentFilter} 
          handleClickComplete={handleClickComplete}
          onDeleteTask = {handleDeleteTask}/>
        ))}
        </div>


          <div className="float-right mt-2">
          {currentFilter === 'Completed' &&
          (<Button text="delete all" type="delete"  deleteTaskAll= {handleDeleteAll}    />)
          }
        </div>
      </div>
    );
  };

