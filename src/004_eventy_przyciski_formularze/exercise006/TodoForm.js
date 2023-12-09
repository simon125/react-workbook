import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie formularza na podstawie dostępnego designu
 * formularz powinien składać się z dwóch inputów
 * jeden textowy do wpisania tytułu zadania
 * a drugi typu select (zwykły select) do wyboru priorytetu zadania
 *
 * wartości powinny być przechowywane w stanie/stanach (useState)
 *
 * user może zasubmitować wpisane wartości jednocześnie tworząc obiekt task
 * i uzupełniając stan który przechowuje tablice tasków (tablica obiektów)
 * stan odpowiedzialny za przechowywanie taskow już istnieje (patrz const [tasks, setTasks] = useState([]);)
 *
 * submit ma być wywoływany na przyciśniecie przycisku submit albo przycisnięcie przyciksu enter
 * będąc sfocusowanym na dowolnym inpucie w obrębie formularza - (użycie eventu submit)
 *
 * dodatkowo w momencie submitu inputy (input i selcet) powinny mieć resetowane/czyszczone wartości tak
 * żeby user mógł wprowadzić nowe dane
 *
 * hints:
 * - pamiętaj o wyłączeniu defaultowego zachowania formularza
 *
 * możliwe wartości dla selecta to kolejno: high medium low
 */

export const TodoForm = () => {
  const tasks = [
    { name: "John", lastName: "Doe", age: 23, profession: "developer" },
    { name: "John", lastName: "Doe", age: 23, profession: "developer" },
    { name: "John", lastName: "Doe", age: 23, profession: "developer" },
  ];
  return (
    <article>
      <p>Form</p>
      <form
        onSubmit={(event) => {
          /**
           * 1) stworzyć obiekt reprezentujący task
           * 2) zaktualizować stan tablicy z taskami
           * 3) wyczyszczenie/resetowanie pól w formularzu
           *
           */
        }}
      >
        MIEJSCE NA FORMULARZ
      </form>

      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </article>
  );
};
