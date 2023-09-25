import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
/*
//                          1 домашка
const [count, setCount] = useState(0)
const increment = () => {
  setCount(count + 5)
};
  return (
    <div className="App">
    <div>{count}</div>
    <button onClick={increment}>ломай меня полностью</button>    
    </div>
  );*/
  const [time, setTime] = useState(10); 

  useEffect(() => {
    setTimeout(() => {
      if(time > 0) {
        setTime(time - 1)
      }
    }, 1000)
  });
 
  return <div className='App'> {time}</div> 
};

export default App;
