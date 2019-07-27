import React, { useState, useEffect } from "react";
import "./index.css";

export default function Calculadora() {
  const [calculadora, setCalculadora] = useState({
    numero1: 0,
    numero2: 0,
    resultado: 0,
    operador: "",
    exprecion: ""
  });
  // const [resultado, setresultado] = useState([]);
  useEffect(() => {}, [calculadora]);

  function AtributeNumber(num) {
    if (calculadora.operador === "") {
      setCalculadora({
        ...calculadora,
        numero1: calculadora.numero1 * 10 + num,
        resultado: calculadora.numero1 * 10 + num,
        numero2: calculadora.numero2,
        operador: calculadora.operador
      });
    } else {
      setCalculadora({
        ...calculadora,
        numero1: calculadora.numero1,
        resultado: calculadora.numero2 * 10 + num,
        numero2: calculadora.numero2 * 10 + num,
        operador: calculadora.operador
      });
    }
  }
  function AtributeOperator(op) {
    if (calculadora.operador === "") {
      setCalculadora({
        calculadora,
        numero1:
          calculadora.numero2 === 0 ? calculadora.numero1 : calculadora.numero2,
        numero2: calculadora.numero2,
        resultado: 0,
        operador: op
      });
    }
  }
  function Calculate() {
    setCalculadora({
      ...calculadora,
      // eslint-disable-next-line no-eval
      numero1: eval(
        calculadora.numero1 + calculadora.operador + calculadora.numero2
      ),
      numero2: calculadora.numero2,
      operador: calculadora.operador,
      // eslint-disable-next-line no-eval
      resultado: eval(
        calculadora.numero1 + calculadora.operador + calculadora.numero2
      )
    });
  }
  function ClearCalculate() {
    setCalculadora({
      numero1: 0,
      numero2: 0,
      resultado: 0,
      operador: ""
    });
  }

  console.log(
    "Numero 1 - " +
      calculadora.numero1 +
      " Operador " +
      calculadora.operador +
      " Numero 2 - " +
      calculadora.numero2
  );
  return (
    <>
      <div className="calculadora">
        <div className="visor">
          <h1>{calculadora.resultado}</h1>
          <p>1 +</p>
        </div>
        <div className="conteudo">
          <button className="limpar" onClick={() => ClearCalculate()}>
            Limpar
          </button>
          <div>
            <div className="numeros">
              <button onClick={() => AtributeNumber(1)}>1</button>
              <button onClick={() => AtributeNumber(2)}>2</button>
              <button onClick={() => AtributeNumber(3)}>3</button>
              <button onClick={() => AtributeNumber(4)}>4</button>
              <button onClick={() => AtributeNumber(5)}>5</button>
              <button onClick={() => AtributeNumber(6)}>6</button>
              <button onClick={() => AtributeNumber(7)}>7</button>
              <button onClick={() => AtributeNumber(8)}>8</button>
              <button onClick={() => AtributeNumber(9)}>9</button>
              <button onClick={() => AtributeNumber(0)}>0</button>
              <button onClick={() => AtributeNumber(".")}>.</button>
              <button onClick={() => AtributeNumber(",")}>,</button>
            </div>
            <div className="operadores">
              <button onClick={() => AtributeOperator("/")}>/</button>
              <button onClick={() => AtributeOperator("*")}>*</button>
              <button onClick={() => AtributeOperator("-")}>-</button>
              <button onClick={() => AtributeOperator("+")}>+</button>
              <button onClick={() => Calculate()}> = </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
