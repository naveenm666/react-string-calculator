import React, { useState } from 'react';

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const add = (numbers) => {
    if (!numbers) return 0;
    return parseInt(numbers, 10);
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(add(input));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
        />
        <button type="submit">Add</button>
      </form>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default StringCalculator;
