import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {

    if (counter == 20) {
      return;
    } else {
      counter = counter + 1;
      setCounter(counter);
      console.log("value added", counter);
    }

  }

  const rmvValue = () => {
    if (counter == 0) {
      return;
    } else {
      counter = counter - 1;
      setCounter(counter);
      console.log("value remove", counter);
    }
  }

  let [Number, setNumber] = useState(0);

  const RandomNum = () => {
    let gen = Math.floor(Math.random() * 100 + 1);
    setNumber(gen);
  }

  let [Color, setcolor] = useState();
  let hex = () => {
    const newNum = Math.floor(Math.random() * 16777215).toString(16);
    let x = "#";
    let add = x.concat(newNum);
    setcolor(add);

  }

  return (
    <>
      <div id="main" style={{ background: `${Color}` }}>
        <h1>Coder Shubham</h1>
        <h2>Counter Value: {counter}</h2><br />
        <button onClick={addValue}>Add Value</button><br /><br />
        <button onClick={rmvValue}>Remove Value</button>

        <br /><br />
        <h1>Generate Random Number</h1>
        <button onClick={RandomNum}>Generate</button>
        <h3>Random Number : {Number}</h3>
      </div>
      <br />
        <h1>Change Background Color</h1>
        <button onClick={hex}>Click</button>
        {/* <h1 style={{ color: `${Color}` }}>See Magic</h1> */}
    </>
  )
}

export default App
