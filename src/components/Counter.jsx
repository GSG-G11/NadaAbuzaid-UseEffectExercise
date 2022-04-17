// Exercise 1
import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCounter) => prevCounter + 1);
  };
  useEffect(() => {
    document.addEventListener('mousedown', incrementCount);
    return () => {
      document.removeEventListener('mousedown', incrementCount);
    };
  });
  return <p>{count}</p>
}
