import React, {useState}from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StepperList from './Component/Stepper/StepperList';
import { Steps } from './Component/Stepper/steps';
import { Active, All, Home, Completed, NoMatch } from './Pages/TodoPage';
import FormList from './Component/FormList';
import TaskProp from './Component/TaskProp';
// import { from './Pages/TodoPage.tsx';


export type TodoProps = {
  setTodos?: any
  todo?: any
  todos?: any

}
function App() {
  const [todos, setTodos] = useState<any>([
    "Do coding Challenges", 
    "Do coding Challenges",
    "Do coding Challenges"
  ]);

  
  
  return (
    <div className="container h-auto drop-shadow w-auto lg:w-[608px] px-4 lg:mx-[414px] lg:mt-[32px] space-y-10" >
     
      <BrowserRouter>
    
          <h1 className= 'text-3xl font-bold text-center mt-4'>#todo</h1>
          <StepperList Steps={Steps}/>
      
      <Routes>
        <Route path='/' element = {<Home/>}>
        <Route path='/' element = {<All setTodos = {setTodos}/>}/>
        <Route path='active' element = {<Active setTodos = {setTodos}/>}/>
        <Route path='completed' element = {<Completed setTodos = {setTodos}/>}/>


        </Route>
        <Route path="*" element={<NoMatch />} />

      </Routes>
         <FormList todos = {todos}/>



      </BrowserRouter>
      
    </div>
  );
}

export default App;
