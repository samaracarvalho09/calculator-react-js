import "./Calculator.css";

import { ArrowUUpLeft } from "@phosphor-icons/react";


import { Box } from "@mui/system";
import { useState } from "react";
export function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  const [resultado, setResultado] = useState(0);

  function inputNum(e) {
    let input = e.target.value;
    //faz com que limpe o botão, caso o valor na tela seja diferente de 0
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
    setOldNum(0);
    setResultado(0);
    setOperator("");
  }

  function porcentage() {
    setNum(num / 100);
  }

  // deixa o número negativo/positivo
  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
    console.log(`aqui num ${num}`);
    console.log(`aqui old num ${oldNum}`);
  }

  function calculate() {
    if (operator === "/") {
      setResultado(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "x") {
      setResultado(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setResultado(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setResultado(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <div className="wrapper">
      <div>
        {oldNum || num ? (
          <>
            <p>
              <span>{oldNum || ""}</span>
              <span>{operator || ""}</span>
              <span>{num || ""}</span>
            </p>
            <p>
              =<span>{resultado || ""}</span>
            </p>
          </>
        ) : (
          <span>0</span>
        )}
      </div>
      <div className="container-button">
      <button onClick={clear}>AC</button>
      <button onClick={changeSign}>+/-</button>
      <button onClick={porcentage}>%</button>
      <button className="orange" onClick={operatorHandler} value={"/"}>
        /
      </button>
      </div>
      
      <div className="container-button">
      <button className="gray" onClick={inputNum} value={7}>
        7
      </button>
      <button className="gray" onClick={inputNum} value={8}>
        8
      </button>
      <button className="gray" onClick={inputNum} value={9}>
        9
      </button>
      <button className="orange" onClick={operatorHandler} value={"x"}>
        X
      </button>
      </div>

      <div className="container-button">
      <button className="gray" onClick={inputNum} value={4}>
        4
      </button>
      <button className="gray" onClick={inputNum} value={5}>
        5
      </button>
      <button className="gray" onClick={inputNum} value={6}>
        6
      </button>
      <button className="orange" onClick={operatorHandler} value={"-"}>
        -
      </button>
      </div>
      <div className="container-button">
      <button className="gray" onClick={inputNum} value={1}>
        1
      </button>
      <button className="gray" onClick={inputNum} value={2}>
        2
      </button>
      <button className="gray" onClick={inputNum} value={3}>
        3
      </button>
      <button className="orange" onClick={operatorHandler} value={"+"}>
        +
      </button>
      </div>
      <div className="container-button">
      <button className="gray" onClick={calculate}>
          <span>
          <ArrowUUpLeft size={20} /> 
          </span>
      </button>
      <button className="gray" onClick={inputNum} value={0}>
        0
      </button>
      <button className="gray" onClick={inputNum} value={"."}>
        ,
      </button>
      <button className="orange" onClick={calculate}>
        =
      </button>
     
      </div>
    </div>
  );
}
