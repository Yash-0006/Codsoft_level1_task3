import React from "react";
import { useState } from 'react';
import "./style.scss";


export default function App() {

    const[input,setInput] = useState([]);

    const handler = e =>{
        setInput(e.target.value);
    }

    const btnHandler = (e) => {
        setInput(input+e.target.value)
    } 

    const clearHandler = () =>{
        setInput("")
    }

    const evalHandler = () => {
        setInput(eval(input))
    }


  return (
    <div className='container'>
        <div className='inner-container'>
            <div className='display'>
                <input type="text" value={input} onChange={handler} onKeyDown={(e) => {
        if (e.key === "Enter")
            evalHandler();
        }} />
            </div>
            <div className='buttons'>
                <button className='button spl' onClick={btnHandler} value="(">(</button>
                <button className='button spl' onClick={btnHandler} value=")">)</button>
                <button className='button clear' onClick={clearHandler} >Clear</button>
                <button className='button' onClick={btnHandler} value="1">1</button>
                <button className='button' onClick={btnHandler} value="2">2</button>
                <button className='button' onClick={btnHandler} value="3">3</button>
                <button className='button spl' onClick={btnHandler} value="+">+</button>
                <button className='button' onClick={btnHandler} value="4">4</button>
                <button className='button' onClick={btnHandler} value="5">5</button>
                <button className='button' onClick={btnHandler} value="6">6</button>
                <button className='button spl' onClick={btnHandler} value="-">-</button>
                <button className='button' onClick={btnHandler} value="7">7</button>
                <button className='button' onClick={btnHandler} value="8">8</button>
                <button className='button' onClick={btnHandler} value="9">9</button>
                <button className='button spl' onClick={btnHandler} value="/">/</button>
                <button className='button' onClick={btnHandler} value=".">.</button>
                <button className='button' onClick={btnHandler} value="0">0</button>
                <button className='button equalto' onClick={evalHandler} value="=">=</button>
                <button className='button spl' onClick={btnHandler} value="*">X</button>
            </div>
        </div>
    </div>
  )
}
