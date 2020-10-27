import React, {useState} from 'react';
import produce from 'immer';
import './Grid.css';

const rows = 20;
const cols = 20;

const gridStructure = () => {
    const gridRow = [];
    for(let i = 0; i < rows; i++){
        gridRow.push(Array.from(Array(cols), () => 0))
    }
    return gridRow;
}

const neighbors = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];

const Grid = () => {
    const [grid, setGrid] = (useState(gridStructure));
    const [running, setRunning] = useState(false);

    const toggleGrid = ({i, j}) => {
        setGrid(produce(grid, gridCopy => {
            gridCopy[i][j] = grid[i][j] ? 0 : 1;
        }))
    }

    const toggleCell = ({i, j}) => {
        let toggleBg = 'cell';
        if(grid[i][j] === 1) {
            return toggleBg += 'ToggleBg';
        }else {
            return toggleBg
        }
    }

    const startGame = () => {
        setRunning(!running);
    }

    return(
        <>
            <button onClick={startGame}>{running ? "Stop" : "Start"}</button>
            <div className="grid">
                {grid.map((gridRow, i) => {
                    return gridRow.map((column, j) => {
                        return (
                            <div 
                            //className="cell"
                            key = {`${i}-${j}`}
                            onClick = {() => toggleGrid({i, j})}
                            className = {toggleCell({i, j})}
                            />
                        )
                    })
                })}
            </div>
        </>
    )
}

export default Grid;