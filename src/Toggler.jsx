import { useState } from "react";
import "./Toggler.css"
export default function Toggler(){
    const [cat, setCat] = useState(true);

    const toggleCat = () => setCat(!cat);

    return (<p className="Toggler" onClick={toggleCat}>
        {cat ? "😸" : "🐶"}
        </p>);
}