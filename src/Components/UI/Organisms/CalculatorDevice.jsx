import { CalculatorButtons } from "../Atoms/CalculatorButtons";
import { useState } from "react";

export const CalculatorDevice = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const blockClass = "calculator-device";

  const handleNumberClick = (number) => {
    setInput((prevInput) => prevInput + number);
  }

  const handleOperatorClick = (operator) => {
    if (input !== '') {
      let newResult = result

      switch (operator) {
        case '+':
          newResult += parseFloat(input)
          break;
        case '-':
          newResult -= parseFloat(input)
          break;
        case 'x':
          newResult *= parseFloat(input)
          break;
        case '/':
          newResult /= parseFloat(input)
          break;
        case '%':
          newResult %= parseFloat(input);
          break;
        default:
          break;
      }
      setResult(newResult);
      setInput('');
    }
  }

  const handleEqualClick = (operator) => {
    if (input !== '') {
      let newResult = result;
      switch (operator) {
        case '+':
          newResult += parseFloat(input);
          break;
        case '-':
          newResult -= parseFloat(input);
          break;
        case '*':
          newResult *= parseFloat(input);
          break;
        case '/':
          newResult /= parseFloat(input);
          break;
        case '%':
          newResult %= parseFloat(input);
          break;
        default:
          break;
      }
      setResult(newResult);
      setInput('');
      // setOperator('');
    }
  };

  const handleClearClick = () => {
    setInput('');
    setResult(0);
  };

  const handleDeleteClick = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };


  return (
    <>
      <div className={blockClass}>
        <div className={blockClass + '__screen'}>
          <input type="text" placeholder="0" className={blockClass + '__result'} value={input} readOnly />
          <div className={blockClass + '__operation'}>{result}</div>
        </div>
        <div className={blockClass + '__buttons'}>
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleClearClick}
            value="AC"
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleDeleteClick}
            value="Delete"
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleOperatorClick}
            value="%"
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleOperatorClick}
            value="/"
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value={7}
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value={8}
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value={9}
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleOperatorClick}
            value="x"
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value={4}
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value={5}
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value={6}
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleOperatorClick}
            value="-"
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value={1}
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value={2}
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value={3}
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleOperatorClick}
            value="+"
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value="0"
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleNumberClick}
            value="."
          />
          <CalculatorButtons
            blockClass={blockClass}
            functionHandle={handleEqualClick}
            value="="
          />
        </div>
      </div>
    </>
  )
}