import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworznie apki typu counter na podstawie deisgnu (design.png)
 * tym razem aplikacja powinna składać się z więcej niż jednego komponentu - każdy
 * będzie posiadał swoje dedykowane zadanie
 *
 * komponent Output w pliku Output.js powinien przyjmować propsa o dowolnej nazwie wartością tego propsa
 * powinnna być wartoś countera - komponent Ouput powinien wyświetlać przekazana wartos
 *
 * komponent IncreaseButton w pliku IncreaseButton.js powinien przyjmować funkcje jako props (nazwa dowolna)
 * przekazana funkcja powinna byc wywoływana w momencie kliknięcia (onClick) przycisku w komponencie
 * IncreseButton - funkcja ta powinna aktualizować wartość counera dodając wartość 1 do poprzeniej warośći
 *
 * Komponent DecreaseButton - opis taki jak wyżej z tą różnica że po przyciśniećiu przycisku wartość
 * countera powinna być pomniejszana o 1
 *
 * powyższe komponenty powinny zostać zaimportowane w tym pliku
 *
 * stan countera powinien byc trzymany w useState - wartością początkową nieh będzie 0
 *
 * ⭐⭐ dla chętnych dodaj propsa w który będzie określał wartość incrementowaną/decrementowaną
 * czyli przyciski nie będą na sztywno miały -/+ 1 tylko będzie możliwość określenia tej wartości
 * za pomocą drugiego propa - takie podejście wymaga sprytnego obsłużenia kliknięć - ten dodatkowy prop
 * orpócz tego że będzie labelką w przycisku będzie takżę wartością dodawaną/odejmowaną
 */

export const CounterWithProps = () => {
  return (
    <article>
      <p>Counter with props</p>
    </article>
  );
};
