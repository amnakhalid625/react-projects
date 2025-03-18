import React, { useState } from 'react'
import './cal.css'

const Cal = () => {
    const [value,setValue]=useState('')

    const getValue=(e)=>{
        setValue( value+ e.target.innerHTML)
    }

    const equalFun=()=>{
        setValue(eval(value))
    }

    const handleAC=()=>{
        setValue('')
    }

    const handleDEL=()=>{
        setValue(value.toString().slice(0 ,-1))
    }

  return (
    <div className='container'>
<div className='box'>
<input type="text" placeholder='0'
value={value}
/>

<div className='buttons'>
<div className="button-one com-button">
    <button onClick={handleAC}>AC</button>
    <button onClick={handleDEL}>DELL</button>
    <button>%</button>
    <button>/</button>

</div>
<div className="button-two com-button">

    <button onClick={getValue}>7</button>
    <button onClick={getValue}>8</button>
    <button onClick={getValue}>9</button>
    <button onClick={getValue}>*</button>
</div>

<div className="button-three com-button">
<button onClick={getValue}>4</button>
    <button onClick={getValue}>5</button>
    <button onClick={getValue}>6</button>
    <button onClick={getValue}>-</button>
</div>

<div className="button-four com-button">

<button onClick={getValue}>1</button>
    <button onClick={getValue}>2</button>
    <button onClick={getValue}>3</button>
    <button onClick={getValue}>+</button>
</div>

<div className="button-five com-button">
<button onClick={getValue}>00</button>
    <button onClick={getValue}>0</button>
    <button onClick={getValue}>.</button>
    <button onClick={equalFun}>=</button>
</div>
</div>

</div>

    </div>
  )
}

export default Cal