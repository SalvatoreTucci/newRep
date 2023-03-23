import React, { useState } from 'react';

function FormCalcolatrice() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform calculation based on operator
    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        Numero 1:
        <input
          type="number"
          value={num1}
          onChange={(event) => setNum1(parseFloat(event.target.value))}
        />
      </label>
      <br /><br />
      <label>
        Operatore:
        <select value={operator} onChange={(event) => setOperator(event.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
      <br /><br />
      <label>
        Numero 2:
        <input
          type="number"
          value={num2}
          onChange={(event) => setNum2(parseFloat(event.target.value))}
        />
      </label>
      <br /><br />
      <button type="submit">Calcola</button>
      <br /><br />
      <label>
        Risultato:
        <input type="number" value={result} readOnly />
      </label>
    </form>
  );
}

export default FormCalcolatrice;
