import React from "react";
import { useState, useEffect } from "react";
import "./style/Pag.css";

function App() {
  const [nro1, setnro1] = useState(0);
  const [nro2, setnro2] = useState(0);
  const [result, setResult] = useState(0);
  const [operacion, setoperacion] = useState("Sumar");

  const calcular = () => {
    if (operacion === "Sumar") return parseFloat(nro1) + parseFloat(nro2);
    else if (operacion === "Restar") return parseFloat(nro1) - parseFloat(nro2);
    else if (operacion === "Multiplicar")
      return parseFloat(nro1) * parseFloat(nro2);
    else return parseFloat(nro1) / parseFloat(nro2);
  };

  useEffect(() => {
    setResult(calcular());
  }, [nro1, nro2, operacion]);

  return (
    <div className="Container">
      <div className="FormTitle">
        <h4>Calculara</h4>
      </div>
      <div className="FormContainer">
        <div className="FormGroup">
          <label className="FormLabel">Numero 1</label>
          <input
            className="FormInput"
            type="number"
            value={nro1}
            onChange={(e) => setnro1(e.target.value)}
          />
        </div>
        <div className="FormGroup">
          <label className="FormLabel">Numero 2</label>
          <input
            className="FormInput"
            type="number"
            value={nro2}
            onChange={(e) => setnro2(e.target.value)}
          />
        </div>
      </div>

      <div className="ContainerOperaciones">
        <label className="FormLabel">Operaciones</label>

        <select onChange={(e) => setoperacion(e.target.value)}>
          <option>Sumar</option>
          <option>Restar</option>
          <option>Multiplicar</option>
          <option>Dividir</option>
        </select>
        <label>Resultado {result}</label>
      </div>
    </div>
  );
}

export default App;
