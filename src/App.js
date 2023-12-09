import { MyFirstComponentSolution } from "./000_komponent/exercise/MyFirstComponent.solution";
import { MetricSolution } from "./001_css_assety/exercise003/Metric.solution";
import { TodoAppSolution } from "./002_relacje_między_komponentami/exercise001_solution/App";
import { CounterSolution } from "./004_eventy_przyciski_formularze/exercise000/Counter.solution";
import { ComplexCounterSolution } from "./004_eventy_przyciski_formularze/exercise001/ComplexCounter.solution";
import { TextFieldSolution } from "./004_eventy_przyciski_formularze/exercise002/TextField.solution";
import { AddTwoNumbersSolution } from "./004_eventy_przyciski_formularze/exercise003/AddTwoNumbers.solution";
import { CSSEditorSolution } from "./004_eventy_przyciski_formularze/exercise004/CSSEditor.solution";
import { CalculatorSolution } from "./004_eventy_przyciski_formularze/exercise005/Calculator.solution";
import { TodoFormSolution } from "./004_eventy_przyciski_formularze/exercise006/TodoForm.solution";

function App() {
  return (
    <main className="container">
      <MyFirstComponentSolution />
      <MetricSolution />
      <TodoAppSolution />
      <CounterSolution />
      <ComplexCounterSolution />
      <TextFieldSolution />
      <AddTwoNumbersSolution />
      <CSSEditorSolution />
      <CalculatorSolution />
      <TodoFormSolution />
    </main>
  );
}

export default App;
