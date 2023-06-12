import Button from "../Component/Button";
import Input from "../Component/Input";
import { Link, Outlet} from 'react-router-dom';
import react, {useState, useEffect, } from 'react';
import { Title } from "../Component/titleHeader";

export type TodoProps = {
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

    Title("Todo || All");
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

  
  Title("Todo || Active");
  return(
        <div className="flex flex-col space-y-4">             
        <div className = ''> <Input addTodo={addTodo} /></div>
        
     </div>
        
        
    )
    
};
export const Completed = ({setTodos}: TodoProps)=>{
    Title("Todo || Completed");

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
       
        <div className = "flex flex-col">
            <Outlet/>
            <h1 className= 'text-xl float-left font-bold  mt-3 mb-[-30px]'>Check List</h1>

           
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