import React from "react";
import { useState, useEffect } from "react";
import "./style/Pag.css";

function App() {
  const [nro1, setNro1] = useState();
  const [nro2, setNro2] = useState();
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");

  const calculator = () => {
    switch (operation) {
      case "Sum":
        return parseFloat(nro1) + parseFloat(nro2);

      case "Subtract":
        return parseFloat(nro1) - parseFloat(nro2);

      case "Multiply":
        return parseFloat(nro1) * parseFloat(nro2);

      case "Divide": 
        return parseFloat(nro1) / parseFloat(nro2);

      default:
        return "";
    }
  };

  useEffect(() => {
    setResult(calculator());
  });

  return (
    <div className="container">
      <div className="form-title">
        <h4>Calculator</h4>
      </div>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label">Number 1</label>
          <input
            className="form-input"
            type="number"
            value={nro1}
            onChange={(event) => setNro1(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Number 2</label>
          <input
            className="form-input"
            type="number"
            value={nro2}
            onChange={(event) => setNro2(event.target.value)}
          />
        </div>
      </div>

      <div className="container-operaciones">
        <div>
          <label className="label-operations">Operations</label>
        </div>
        <div className="select-options">
          <select
            className="select"
            onChange={(event) => setOperation(event.target.value)}
          >
            <option disabled="true" selected="true">Options</option>
            <option>Sum</option>
            <option>Subtract</option>
            <option>Multiply</option>
            <option>Divide</option>
          </select>
        </div>

        <div>
          <div className="label-result">
            <label>Result</label>
          </div>
          <label className="label-result">{result}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
