import { useState } from "react";


export default function Counter(){
    const [num, setNum] = useState(0);

    const changeNum = () =>{
        setNum(num + 1);
    };

    const cleanNum = () =>{
        setNum(num * 0)
    }
    
    return(
        <div>
            <p>The count is: {num}</p>
            <button onClick={changeNum}>Increment</button>
            <button onClick={cleanNum}>Clean</button>
        </div>
    )
}