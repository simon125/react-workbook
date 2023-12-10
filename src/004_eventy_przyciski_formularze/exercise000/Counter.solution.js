import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie mini aplikacji Counter na podstawie dostępnego
 * designu (design.png)
 *
 * Counter powinien składać się z następujących elementów:
 *  - dwóch przycisków (jeden do dodawania, jeden do odejmowania)
 *  - elementu wyświetlającego aktualny wynik
 * aplikacja powinna używać hooka useState który będzie przechowywal wartosć
 * countera, funkcja setująca powinna być wywołana z odpowiednimi parametrami
 * w momencie przyciśniecia przycisków +/-
 *
 * stan początkowy (parametr funkcji useState) powinien być ustawiona na 0
 * po przyciśnieciu przycisku +1 wartość stanu powinna się zwiekszyć o 1
 * po przyciśnieciu przycisku -1 wartość stanu powinna się zmniejszyć o 1
 *
 *
 */

export const CounterSolution = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <article>
      <p>Counter</p>
      <div>
        <button onClick={handleIncrease}>+1</button>
        <input readOnly value={counter} />
        <button onClick={handleDecrease}>-1</button>
      </div>
    </article>
  );
};