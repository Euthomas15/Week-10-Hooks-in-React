import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import ProfileCard from "./components/ProfileCard";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Week 10: Hooks in React</h1>
      <p>Learning React Hooks through practical examples.</p>
 
      {/* Assignment 1: COMPONENT 1: COUNTER */}
      <div className="components-container">
        <div className="component-card">
          <Counter />
        </div>

      {/* Assignment 2: COMPONENT 2: TODO LIST */}
      <div className="component-card">
        <TodoList />
        </div>
      </div>

      {/* Assignment 3: COMPONENT 3: PROFILE LOADER */}
      <div className="component-card">
        <ProfileCard />
      </div>

      {/* Assignment 4: COMPONENT 4: SEARCH BOX */}
      <div className="component-card">
        <SearchBox />
      </div>
    </div>

  );
}

export default App;