import React, { useState } from "react";

/**
 * Twoim zadaniem jest na podstawie designu wyświetlić liczby (numbers)
 * za pomocą metody na tabliach map
 *
 * niech każda liczba będzie wewnątrz elementu li - co za tym idzie? map powinien być wywołany wewnątrz
 * elmementu ul
 *
 * hint: nie zapomnij o atrybucie key
 *
 * ⭐ niech pierwszy i ostatni element tablicy będą koloru czerwonego - użyj stylu inlinowego
 * oraz wyrażenia warunkowego (ternary operator) do przypisania koloru
 *
 */

export const Numbers = () => {
  const [numbers] = useState([3, 1, 6, 5, 2, 4]);
  return (
    <article>
      <p>Numbers</p>
    </article>
  );
};
