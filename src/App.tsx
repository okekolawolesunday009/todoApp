import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  Home} from './Pages/TodoPage';


function App() {
 
  return (
    <div className="container h-[100vh] lg:600px drop-shadow w-auto lg:w-[608px] bg-white lg:rounded-xl  p-4 lg:mx-[414px] lg:mt-[32px] space-y-10">
      <BrowserRouter>
        <h1 className="text-3xl font-bold text-center mt-4">#todo</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;







