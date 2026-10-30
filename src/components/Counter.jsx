import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>Counter</h2>
            <h3>{count}</h3>
            {/* By clicking this button it will increment the count */}
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            {/* By clicking the button it will decrement the count */}
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            {/* By clicking the button it will reset the count to 0 */}
            <button onClick={() => setCount (0)}>
                Reset
            </button>
        </div>
    );
}

export default Counter;