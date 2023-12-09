import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie aplikacji typu kalkulator na podstawie designu z pliku desing.png
 * User jest w stanie wpisać dwie liczby w dwa inputy, może również określić działanie matematyczne
 * jakie ma być wykonane na tych dwóch liczbach
 *
 * do wpisania liczb użyj zwykłych inputów tekstowych natomiast do wyboru
 * działania matematycznego możesz użyć selecta z optionami - pamiętaj żeby każdy option oprócz labelki
 * miał również określoną wartość (atrybut value)
 *
 * do powyższych rzeczy (liczba1, liczba2, działanie matematyczne) będziesz potrzebować stanu lub kilku stanów😉 (useState)
 * wynik działania natomiast będzie tzw computed value - będzie budowana przy każdym rerenderze na nowo
 * na podstawie 3 w/w stanów pamiętaj user może chieć dodać, odjąć, podzielić lub pomnożyć wpisane liczby.
 *
 * do logiki (obliczenia) i zwrócenia wyniki obliczenia mozesz użyć tworząc dodatkowa funkcje wewnątrz lub na zewnątrz komponentu
 *
 * rezultat obliczeń możesz wyświetlać w inpucie readOnly lub w zwykły div-ie
 *
 * UWAGA wartości z inputów e.target.value są typu string, przy wykonywani obliczeń musisz zamienić liczbo-stirgni (string) na liczby (number)
 */

export const CalculatorSolution = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");

  const getResult = (n1, n2, op) => {
    if (op === "+") {
      return n1 + n2;
    } else if (op === "-") {
      return n1 - n2;
    } else if (op === "/") {
      return n1 / n2;
    } else if (op === "*") {
      return n1 * n2;
    }

    return "";
  };

  const result = getResult(Number(num1), Number(num2), operation);

  return (
    <article>
      <p>Calculator</p>
      <div style={{ display: "flex", gap: 20 }}>
        <input
          type="text"
          placeholder="Liczba pierwsza..."
          value={num1}
          onChange={(e) => {
            setNum1(e.target.value);
          }}
        />
        <select
          name=""
          id=""
          value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
          }}
        >
          <option value="" hidden>
            Wybierz działanie
          </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>
        <input
          type="text"
          placeholder="Liczba druga..."
          value={num2}
          onChange={(e) => {
            setNum2(e.target.value);
          }}
        />
        <input type="text" placeholder="Wynik" value={result} readOnly />
      </div>
    </article>
  );
};
