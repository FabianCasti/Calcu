import React from "react";
import { useState, useEffect } from "react";
import "./style/Pag.css";

function App() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("Sum");

  const calculator = () => {
    if (operation === "Sum") return parseFloat(nro1) + parseFloat(nro2);
    else if (operation === "Subtract")
      return parseFloat(nro1) - parseFloat(nro2);
    else if (operation === "Multiply")
      return parseFloat(nro1) * parseFloat(nro2);
    else return parseFloat(nro1) / parseFloat(nro2);
  };

  useEffect(() => {
    setResult(calculator());
  }, [nro1, nro2, operation]);

  return (
    <div className="Container">
      <div className="FormTitle">
        <h4>Calculator</h4>
      </div>
      <div className="FormContainer">
        <div className="FormGroup">
          <label className="FormLabel">Number 1</label>
          <input
            className="FormInput"
            type="number"
            value={nro1}
            onChange={(event) => setNro1(event.target.value)}
          />
        </div>
        <div className="FormGroup">
          <label className="FormLabel">Number 2</label>
          <input
            className="FormInput"
            type="number"
            value={nro2}
            onChange={(event) => setNro2(event.target.value)}
          />
        </div>
      </div>

      <div className="ContainerOperaciones">
        <div>
          <label className="LabelOperations">Operations</label>
        </div>
        <div className="SlectOptions">
          <select
            className="Select"
            onChange={(event) => setOperation(event.target.value)}
          >
            <option>Sum</option>
            <option>Subtract</option>
            <option>Multiply</option>
            <option>Divide</option>
          </select>
        </div>

        <div>
          <div className="LabelResult">
            <label>Result</label>
          </div>
          <label className="LabelResult">{result}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
