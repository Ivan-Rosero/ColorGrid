import { useState } from "react";
import "./Colors.css";

export default function Colors() {
    const initialColor = Math.floor(Math.random() * 25)
    const [colorNum, setColorNum] = useState(initialColor);

    const changeColor = () => {
        const newColorNum = Math.floor(Math.random() * 25);
        setColorNum(newColorNum);
    };

    const getColor = number => {
        const options = {
            "0": "pink",
            "1": "skyblue",
            "2": "#E55604",
            "3": "#F4E869",
            "4": "#D80032",
            "5": "#A6FF96",
            "6": "#C683D7",
            "7": "#994D1C",
            "8": "#1640D6",
            "9": "#FFEBD8",
            "10": "#7B66FF",
            "11": "#BBAB8C",
            "12": "#FF8F8F",
            "13": "#9ADE7B",
            "14": "#7C93C3",
            "15": "#FFC5C5",
            "16": "#AF2655",
            "17": "#FF90C2",
            "18": "#FFD28F",
            "19": "#D0A2F7",
            "20": "#FF9209",
            "21": "#7743DB",
            "22": "#FFFB73",
            "23": "#FFC436",
            "24": "#8DDFCB",
            "25": "#9400FF", 
        };

        return options[number];
    };

    return (
        <>
            <div
                className="square"
                style={{ backgroundColor: getColor(colorNum) }}
                onClick={changeColor}
            ></div>
        </>
    );
}
