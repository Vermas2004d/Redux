import React, { useState } from 'react';

function SimpleCalculator() {
  // 1. Setup our storage (State)
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  // 2. The Math Functions
  const add = () => setResult(Number(num1) + Number(num2));
  const subtract = () => setResult(Number(num1) - Number(num2));
  const multiply = () => setResult(Number(num1) * Number(num2));
  const divide = () => setResult(Number(num1) / Number(num2));

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simple Calculator</h2>
      
      {/* Input for the first number */}
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
      />

      {/* Input for the second number */}
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
      />

      <div style={{ marginTop: '10px' }}>
        <button onClick={add}> + </button>
        <button onClick={subtract}> - </button>
        <button onClick={multiply}> * </button>
        <button onClick={divide}> / </button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default SimpleCalculator;