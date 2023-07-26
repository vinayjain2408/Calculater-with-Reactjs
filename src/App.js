import React, { useState } from 'react'
import "./App.css"

function App() {
  const [value , setValue] = useState(0)

  function handlebutton(e){
    console.log(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div className='box'>
      <div className='space'>
        <p>{value}</p>
      </div>
      <div className='first-line'>
        <button className='clear'>AC</button>
        <button>()</button>
        <button>%</button>
        <button>/</button>
      </div>
      <div className='second-line'>
        <button onChange={handlebutton}>7</button>
        <button onChange={handlebutton}>8</button>
        <button onChange={handlebutton}>9</button>
        <button onChange={handlebutton}>*</button>
      </div>
      <div className='third-line'>
        <button onChange={handlebutton}>4</button>
        <button onChange={handlebutton}>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div className='fourth-line'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div className='fiveth-line'>
        <button>0</button>
        <button>.</button>
        <button>X</button>
        <button>=</button>
      </div>

    </div>
  )
}

export default App