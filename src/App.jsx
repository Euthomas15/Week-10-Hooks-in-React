import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Week 10: Hooks in React</h1>
      <p>Learning React Hooks through practical examples.</p>

      <div className="components-container">
        <div className="component-card">
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;