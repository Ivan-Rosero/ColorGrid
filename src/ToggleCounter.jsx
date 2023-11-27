import { useState } from "react";
import "./Toggler.css"
export default function Toggler() {
    const [cat, setCat] = useState(true);
    const [count, setCount] = useState(0);

    const toggleCat = () => setCat(!cat);
    const incrementCount = () => setCount(count + 2);

    return (
        <div>
            <p className="Toggler" onClick={toggleCat}>
                {cat ? "😸" : "🐶"}
            </p>
            <p >{count}</p>
            <button onClick={incrementCount}>+2</button>
        </div>
    );
}