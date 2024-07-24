import React, { useState } from 'react';

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const add = (numbers) => {
    if (!numbers) return 0;

    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      delimiter = parts[0].substring(2);
      numbers = parts[1];
    }

    numbers = numbers.replace(/\n/g, delimiter);
    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setResult(add(input));
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
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
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default StringCalculator;
