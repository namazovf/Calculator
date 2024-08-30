import React, { useState } from 'react'

function Calculator() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)
  return (
    <div className="container">
      <div className="one">
        <div className="inputs">
        <div className="input inputone" onChange={(e)=>{
          setNum1(e.target.value)
        }}>
          <input type="number" placeholder='Enter num 1' /></div>
        <div className="input input2"onChange={(e)=>{
          setNum2(e.target.value)
        }}><input type="number" placeholder='Enter num 2' /></div>
      </div>
      <div className="emeller">
        <button className='emel' onClick={()=>{
          setResult(Number(num1)+Number(num2))
        }}    >+</button>
        <button className='emel'  onClick={()=>{
          setResult(num1-num2)
        }} >-</button>
        <button className='emel' onClick={()=>{
          setResult(num1*num2)
        }}  >*</button>
        <button className='emel'  onClick={()=>{
          setResult(num1/num2)
        }} >/</button>
        
      </div>
      <div className="result">
          {result}
      </div>
      </div>
      
    </div>
  )
}

export default Calculator