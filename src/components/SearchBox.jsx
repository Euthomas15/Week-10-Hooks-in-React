
import { useState, useEffect, useRef } from "react";

function SearchBox() {
  // Store the text entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  // Reference the input element
  const inputRef = useRef(null);

  // Keep track of component renders
  const renderCount = useRef(0);

  // Automatically focus the input when the component loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Increase the render count
  renderCount.current += 1;

  return (
    <div>
      <h2>Search Box</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <p>Search Term: {searchTerm}</p>

      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}

export default SearchBox;
