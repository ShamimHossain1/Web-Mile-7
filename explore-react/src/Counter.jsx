import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '2px solid red' }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
        </div>
    )
}