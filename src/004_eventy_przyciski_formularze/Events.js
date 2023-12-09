import React, { useState } from "react";

/**
 * Eventy na przykładzie
 * - buttonów
 * - inputów
 * - formularz (submit)
 *
 * aktualizacja stanu
 * wyświetlanie nowego stanu
 *
 * event handlery różne podejscia: referencja vs funkcja anonimowa
 *
 * Przykłady
 * counter
 * text field z wyświetlaniem aktualnej wartości
 * submit formularza | jeden input | wyświetlenie tbalicy stringów
 */

// const button = document.getElementById("button");

// button.addEventListener("click", (event) => {});

export const Events = () => {
  const [textInputValue2, setTextInputValue2] = useState("");

  return (
    <div>
      <input
        value={textInputValue2}
        onChange={(event) => {
          // event - jest to obiekt który zawsze jest jako parametr w funkcji którą przypiszemy do eventu
          // event - jest to obiekt reprezentujący to co się stało w przeglądarce jakiś "event"
          // event.target - jest obiekt reprezentujacy element na którym wystąpił dany event np event "change" zaszedł na inpucie (event.target)
          // event.target.value - jest to wartość która jest w inpucie (text wpisany w chwili zmiany)
          // event.target.value - może nam posłużyć do aktualizacji stanu (useState)
          setTextInputValue2(event.target.value);
        }}
      />
    </div>
  );
};
