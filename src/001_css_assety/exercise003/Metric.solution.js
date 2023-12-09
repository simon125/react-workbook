import React from "react";
import "./solution.css";
/**
 * Twoim zadaniem jest odwzorowanie designu dostępnego w pliku design.png
 * dokładne odzworowanie nie jest konieczne - przykładowe rozwiązanie które
 * jest w zupełności wystarczające jest dostępne w pliku expectedResult.png
 *
 * do rozwiązania zadania możesz użyć dowolnej metody stylowania komponentu
 */

export const MetricSolution = () => {
  return (
    <article>
      <p>Metric</p>
      <div className="outer-container">
        <div className="inner-container">
          <p className="title">
            Work <span>•••</span>
          </p>
          <p className="value">32hrs</p>
          <p className="prev-week-value">Last Week - 36hrs</p>
        </div>
      </div>
    </article>
  );
};
