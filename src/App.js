import React, { useState } from 'react'
import BackspaceIcon from '@mui/icons-material/Backspace';
import "./App.css"

function App() {

	const [result, setResult] = useState([]);

	// const ops = ['/', '*', '-', '+', '.'];

	const updateCalc = (value) => {
    setResult([...result, value]);
    console.log(result)
  };

  function handleClear(){
    setResult([])
  }


  const calculate = () => {
    // console.log(eval(...result))
		// setResult(eval(result).toString());
    console.log(eval(result.join("")))
    let total=eval(result?.join(""))
    setResult([total]);
    console.log('result',result)

    
	}

  function handledelte(){
    result.pop()
    // console.log(result.pop())
    console.log([...result])
    setResult([...result])
  }


  return (
    <div className='box'>
      <div className='space'>
        <p>{result}</p>
      </div>
      <div className='first-line'>
      {/* <button onClick={handledelte}><BackspaceIcon /> </button> */}
      <button onClick={handledelte}>del</button>
        <button onClick={calculate}>=</button>
  
        <button onClick={() => updateCalc("%")}>%</button>
        <button onClick={() => updateCalc("/")}>/</button>
      </div>
      <div className='second-line'>
        <button onClick={() => updateCalc("7")}>7</button>
        <button onClick={() => updateCalc("8")}>8</button>
        <button onClick={() => updateCalc("9")}>9</button>
        <button onClick={() => updateCalc("*")}>*</button>
      </div>
      <div className='third-line'>
        <button onClick={() => updateCalc("4")}>4</button>
        <button onClick={() => updateCalc("5")}>5</button>
        <button onClick={() => updateCalc("6")}>6</button>
        <button onClick={() => updateCalc("-")}>-</button>
      </div>
      <div className='fourth-line'>
        <button onClick={() => updateCalc("1")}>1</button>
        <button onClick={() => updateCalc("2")}>2</button>
        <button onClick={() => updateCalc('3')}>3</button>
        <button onClick={() => updateCalc("+")}>+</button>
      </div>
      <div className='fiveth-line'>
        <button onClick={() => updateCalc('0')}>0</button>
        <button onClick={() => updateCalc('.')}>.</button>
        <button className='clear' onClick={handleClear}>Clear</button>
        
      </div>

    </div>
  )
}

export default App