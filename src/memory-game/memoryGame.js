import { useState } from "react";
import "./styles.css";

const MemoryGame = () => {
    const [difficulty, setDifficulty] = useState(2);
    const [cells, setCells] = useState(
        Array(4).fill(undefined)
    );

    const handleRangeOnChange = (e) => {
        setDifficulty(parseInt(e.target.value));
        setCells(Array(Math.pow(parseInt(e.target.value))).fill(undefined));
    };

    return (
        <div className="content">
            <h1>Memory Game</h1>
            <p>Difficulty: {difficulty}</p>
            <input
                type="range"
                min="2"
                max="20"
                step="1"
                onChange={handleRangeOnChange}
            />
            <button className="start-button">Start Game</button>
            <div
                className="board"
                style={{ gridTemplateColumns: `repeat(${difficulty}, 1fr)` }}
            >
                {cells.map((cell, idx) => {
                    return (
                        <div className="cell" key={idx}>
                            {" "}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MemoryGame;
