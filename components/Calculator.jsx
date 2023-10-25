import { useState, useRef, useEffect } from "react";
import "./Calculator.css";

export default function Calculator() {
  const inputRef = useRef(null);
  // UseState para gerenciar o estado da calculadora
  const [num, setNum] = useState("");
  const [prevNum, setPrevNum] = useState("");
  const [operador, setOperador] = useState("");

  // Função para realizar cálculos
  const calculator = () => {
    if (prevNum !== "") {
      switch (operador) {
        case "+":
          setNum((parseFloat(num) + parseFloat(prevNum)).toString());
          break;
        case "x":
          setNum((parseFloat(num) * parseFloat(prevNum)).toString());
          break;
        case "-":
          setNum((parseFloat(num) - parseFloat(prevNum)).toString());
          break;
        case "/":
          setNum((parseFloat(num) / parseFloat(prevNum)).toString());
          break;
        case "%":
          setNum(((parseFloat(num) / 100) * parseFloat(prevNum)).toString());
          break;
      }
      setOperador("");
      setPrevNum("");
    }
  };

  // Função para focar no input quando a página é carregada
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // UseEffect para chamar focusInput quando o componente é montado
  useEffect(() => {
    focusInput();
  }, []);

  // Função para lidar com os cliques nos botões
  const HandleButtonClick = (value) => {
    if (
      value === "+" ||
      value === "-" ||
      value === "x" ||
      value === "/" ||
      value === "%"
    ) {
      if (prevNum === "") {
        setPrevNum(num);
      } else {
        calculator();
        setPrevNum(num);
      }
      setOperador(value);
      setNum("");
    } else if (value === "+/-") {
      const invertedNum = parseFloat(num) * -1;
      setNum(invertedNum.toString());
    } else if (value === "C") {
      setNum("");
      setOperador("");
      setPrevNum("");
    } else if (value === "=") {
      calculator();
    } else {
      setNum(num + value);
    }
  };

  return (
    <div className="container">
      <input type="text" value={num} ref={inputRef} />
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
