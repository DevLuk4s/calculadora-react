import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num, setNum] = useState("");
  const [prevNum, setPrevNum] = useState("");
  const [operator, setOperator] = useState("");

  const calculator = () => {
    if (prevNum !== "") {
      switch (operator) {
        case "+":
          setNum((parseFloat(prevNum) + parseFloat(num)).toString());
          break;
        case "-":
          setNum((parseFloat(prevNum) - parseFloat(num)).toString());
          break;
        case "x":
          setNum((parseFloat(prevNum) * parseFloat(num)).toString());
          break;
        case "/":
          setNum((parseFloat(prevNum) / parseFloat(num)).toString());
          break;
        default:
          setNum(num);
      }
      setPrevNum("");
      setOperator("");
    }
  };

  const HandleButtonClick = (value) => {
    if (value === "+" || value === "-" || value === "x" || value === "/") {
      if (prevNum === "") {
        setPrevNum(num);
      } else {
        calculator();
        setPrevNum(num);
      }
      setNum("");
      setOperator(value);
    } else if (value === "=") {
      calculator();
    } else if (value === "C") {
      setNum("");
      setPrevNum("");
      setOperator("");
    } else if (value === "+/-") {
      setNum((parseFloat(num) * -1).toString());
    } else {
      setNum(num + value);
    }
  };

  return (
    <div className="container">
      <input type="text" value={num} readOnly />
      <div className="container__button">
        <button onClick={() => HandleButtonClick("C")} className="orange">
          C
        </button>
        <button onClick={() => HandleButtonClick("+/-")} className="orange">
          +/-
        </button>
        <button onClick={() => HandleButtonClick("%")} className="orange">
          %
        </button>
        <button onClick={() => HandleButtonClick("/")} className="orange">
          /
        </button>
        <button onClick={() => HandleButtonClick("7")}>7</button>
        <button onClick={() => HandleButtonClick("8")}>8</button>
        <button onClick={() => HandleButtonClick("9")}>9</button>
        <button onClick={() => HandleButtonClick("x")} className="orange">
          x
        </button>
        <button onClick={() => HandleButtonClick("4")}>4</button>
        <button onClick={() => HandleButtonClick("5")}>5</button>
        <button onClick={() => HandleButtonClick("6")}>6</button>
        <button onClick={() => HandleButtonClick("-")} className="orange">
          -
        </button>
        <button onClick={() => HandleButtonClick("1")}>1</button>
        <button onClick={() => HandleButtonClick("2")}>2</button>
        <button onClick={() => HandleButtonClick("3")}>3</button>
        <button onClick={() => HandleButtonClick("+")} className="orange">
          +
        </button>
        <button onClick={() => HandleButtonClick("0")}>0</button>
        <button onClick={() => HandleButtonClick(".")} className="orange">
          .
        </button>
        <button onClick={() => HandleButtonClick("=")} className="orange">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
