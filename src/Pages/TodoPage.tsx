import Button from "../Component/Button";
import Input from "../Component/Input";
import { Link, Outlet} from 'react-router-dom';
import StepperList from "../Component/Stepper/StepperList";
import { Steps } from "../Component/Stepper/steps";
import react, {useState, useEffect} from 'react'
import FormList from "../Component/FormList";
type TodoProps = {
    setTodos?: any
    todo?: any
}


export const All = ({setTodos, todo}: TodoProps)=>{
  
 const addTodo = (todo: string) => {
    setTodos((prev: any) => [...prev, todo]);
  };
  useEffect(() => {
    
    setTodos((prev: any) => [...prev]);
  }, [setTodos]);

    // Title("Serch || Profile Home");
    return(
        <div className="flex flex-col space-y-4">             
           <div className = ''> <Input addTodo={addTodo} /></div>
          
        </div>
        
    )
    
};
export const Active = ({setTodos}: TodoProps)=>{

 const addTodo = (todo: string) => {
    setTodos((prev: any) => [...prev, todo]);
  };

  
    // Title("Serch || Profile Home");
    return(
        <div className="flex flex-col space-y-4">             
        <div className = ''> <Input addTodo={addTodo} /></div>
        
     </div>
        
        
    )
    
};
export const Completed = ({setTodos}: TodoProps)=>{
    // Title("Serch || Profile Home");

    const addTodo = (todo: string) => {
       setTodos((prev: any) => [...prev, todo]);
     };
   
    return(
       
        <div className="flex flex-col space-y-4">             
        <div className = ''> <Input addTodo={addTodo} /></div>
       
        
     </div>
    
        
    )
    
};
export const Home = ()=>{
    // Title("Serch || Profile Home");
    return(
       
        <div className = "">
            
          
            <Outlet/>
         </div>
    
        
    )
    
};
export const NoMatch = ()=>{
    // Title("Serch || Profile Home");
    return(
       
        <div className = "">
            
          
            no match
         </div>
    
        
    )
    
};