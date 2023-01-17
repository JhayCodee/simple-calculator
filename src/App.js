import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addToInput = (val) => {
    setInput(input + val);
  };

  const handleEqual = () => {
    // please validate the input before evaluating it
    // otherwise it will throw an error

    if (input) {
      try {
        setInput(evaluate(input));
      } catch (e) {
        setInput("");
        alert("Ingrese una expresión válida");
      }
    } else {
      alert("Ingrese una expresión válida");
    }
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <Screen input={input} />
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <ClearButton handleClick={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
