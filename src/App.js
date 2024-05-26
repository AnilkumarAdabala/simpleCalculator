import React, {useState} from 'react';
import "./App.css"


function App() {
  const [input,setInput] = useState("")
  const [result,setResult] = useState("0")
  const [error,setError] = useState(false)

  const handleEvent = (value) => {
    if(value === "c"){
      setInput("")
      setResult("0")
      setError(false)
    }else if(value === "="){
      try{
        setResult(`Result is : ${eval(input)}`)
        setError(false)
      }catch(e){
          console.log(e)
          setResult("Unexpected end of input")
          setError(true)
      }
    }else if (value === "del"){
      setInput(input.slice(0,-1))
    }
    else{
      setInput(input + value)
    }
  }

  return (
    <div className="App">
      <div className = "bg-container">
      <div className = "top-container">
      <p className = "heading">Simple Calculator App</p>
      <input className = "input" value = {input} onChange = {(e)=> setInput(e)} />
      </div>
     <div className='bottom-conatiner'>
      <div className='num-container'>
      <button className='button nums-class' onClick = {()=> handleEvent("1")}>1</button>
      <button className='button nums-class' onClick = {()=> handleEvent("2")}>2</button>
      <button className='button nums-class' onClick = {()=> handleEvent("3")}>3</button>
      <button className='button nums-class' onClick = {()=> handleEvent("4")}>4</button>
      <button className='button nums-class' onClick = {()=> handleEvent("5")}>5</button>
      <button className='button nums-class' onClick = {()=> handleEvent("6")}>6</button>
      <button className='button nums-class' onClick = {()=> handleEvent("7")}>7</button>
      <button className='button nums-class' onClick = {()=> handleEvent("8")}>8</button>
      <button className='button nums-class' onClick = {()=> handleEvent("9")}>9</button>
      <button className='button operators-class' onClick = {()=> handleEvent("=")}>=</button>
      <button className='button nums-class' onClick = {()=> handleEvent("0")}>0</button>
      <button className='button operators-class' onClick = {()=> handleEvent("c")}>c</button>
      </div>
      <div className='operators'>
      <button className='button operators-class' onClick = {()=> handleEvent("+")}>+</button>
      <button className='button operators-class' onClick = {()=> handleEvent("-")}>-</button>
      <button className='button operators-class' onClick = {()=> handleEvent("*")}>*</button>
      <button className='button operators-class' onClick = {()=> handleEvent("/")}>/</button>
      <button className='button operators-class del' onClick = {()=> handleEvent("del")}>DEL</button>
      <button className='button operators-class' onClick = {()=> handleEvent(".")}>.</button>
      
     
      </div>
      
     </div>
     <p className = {error ? ("withError"):("withoutError")}> {result}</p>
      </div>
    </div>
  );
}

export default App;
