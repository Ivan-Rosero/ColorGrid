import Colors from "./Colors";
import "./ColorGrid.css";

function ColorGrid() {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<Colors />)
    }

    return (
        <>
            <div className="colorGrid">{boxes}</div>
        </>
    )
}

export default ColorGrid;