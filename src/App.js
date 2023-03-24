import logo from './logo.svg';
import './App.css';
import FunctionCompo from './Components/FunctionCompo';
import ClassCompo from './Components/ClassCompo';
import { useState } from 'react';
import './style.css'

function App() {
  const [count, setCount] = useState(false);
  const [data, setData] = useState(false);

  const handleFunction =()=>{
   setCount(!count);
  }
  
  const handleClass =()=> {
    setData(!data)
}

  return (
    <div>
      <h1 id="h">WELCOME TO REACT HANDSON 1</h1>
      <button onClick={handleFunction} id="btn">To see styling in functional Component</button>
      <button onClick={handleClass} id="btnn">To see styling in class  Component</button>

  
    {count ? <FunctionCompo />:null}
    {data ? <ClassCompo />:null}
  
    </div>
      );
}

export default App;
