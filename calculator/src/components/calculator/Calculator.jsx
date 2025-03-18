import React, { useState } from 'react';
import './calculator.css';


const Calculator = () => {
  const [value,setValue]=useState('')

  const handleButton=(e)=>{
    setValue(value+e.target.innerHTML)
  }

  const equalFun=()=>{
setValue(eval(value))
  }
const acSetFun=()=>{
setValue('')
}

const delFun=()=>{
setValue(value.toString().slice(0,-1))
}



  return (
    <div className="container">
      <div className="box">
        
          <input type="text" placeholder='0'
          value={value}
          />


        <div className="buttons-1">
          <button onClick={acSetFun}>AC</button>
          <button onClick={delFun}>DELL</button>
          <button onClick={handleButton}>%</button>
          <button onClick={handleButton}>/</button>
        </div>

        <div className="button-2">
          <button onClick={handleButton}>7</button>
          <button onClick={handleButton}>8</button>
          <button onClick={handleButton}>9</button>
          <button onClick={handleButton}>*</button>
        </div>

        <div className="button-3">
          <button onClick={handleButton}>4</button>
          <button onClick={handleButton}>5</button>
          <button onClick={handleButton}>6</button>
          <button onClick={handleButton}>-</button>
        </div>

        <div className="button-4">
          <button onClick={handleButton}>1</button>
          <button onClick={handleButton}>2</button>
          <button onClick={handleButton}>3</button>
          <button onClick={handleButton}>+</button>
        </div>

        <div className="button-5">
          <button className="wide" onClick={handleButton}>00</button>
          <button onClick={handleButton}>0</button>
          <button onClick={handleButton}>.</button>
          <button className="yellow" onClick={equalFun}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
