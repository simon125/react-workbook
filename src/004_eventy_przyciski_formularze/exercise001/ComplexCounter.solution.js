import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworznie bardziej złozonej aplikacji typu Counter
 * która orpócz podstawowej funkcjonalności czyli dodawania i odejmowania 1 do stanu
 * powinna mieć możliwość dodać i odjąć liczbę 5
 * za pomocą doadkowych buttonów (patrz design.png)
 */

export const ComplexCounterSolution = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = (value) => {
    setCounter((prev) => prev + value);
  };

  const handleDecrease = (value) => {
    setCounter((prev) => prev - value);
  };

  return (
    <article>
      <p>Counter</p>
      <div>
        <button onClick={() => handleIncrease(5)}>+5</button>
        <button onClick={() => handleIncrease(1)}>+1</button>
        <input readOnly value={counter} />
        <button onClick={() => handleDecrease(1)}>-1</button>
        <button onClick={() => handleDecrease(5)}>-5</button>
      </div>
    </article>
  );
};