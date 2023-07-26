import React, { useState } from "react";
import advicesAPI from './advicesAPI.json'
import './App.css';

function App() {
  const [randomAdvice, setRandomAdvice] = useState("");
  const [randomIndex, setRandomIndex] = useState(null);
  function handleClick() {
    const index = Math.floor(Math.random() * advicesAPI.advices.length);
    setRandomIndex(index);
    setRandomAdvice(advicesAPI.advices[index]);
  }
  return (
    <div className="App">
      <div className='content'>
        <h4 className="head">Advice # {randomIndex + 1}</h4>
        <p className="advice">
          " {randomAdvice} "
        </p>
        <div className='hr-container'>
          <hr></hr>
          <span className='pause-icon'></span>
        </div>
        <button onClick={handleClick} className='btn'></button>

      </div>

    </div>

  );
}

export default App;
