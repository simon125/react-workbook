/**
 * Twoim pierwszym zadaniem reactowym będzie stworzenie
 * komponentu funkyjnego w który będzie zawierał dowolne elementy "HTMLowe"
 * mogą to być inputy, buttony, paragrafy, headingi - tutaj wyobraźnia i lista dostępnych
 * tagów jest limitem.
 *
 * niech komponent będzie komponentem funkcyjnym i niech się nazywa dokładnie tak jak nazwa
 * pliku
 *
 * nie ma znaczenia czy będzie to komponent funkcyjny zapisany przy użyciu słowa kluczowego
 * function czy będzie to funckja strzałkowa
 *
 *
 */

import React from "react";

export const MyFirstComponentSolution = () => {
  return (
    <article>
      <h1>Formularz</h1>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Submit</button>
    </article>
  );
};
