
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTodo() {
    if (inputValue.trim() === "") return;

    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function handleDeleteTodo(indexToDelete) {
    setTodos(
      todos.filter((todo, index) => index !== indexToDelete)
    );
  }

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
