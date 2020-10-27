import React, {useState, useRef, useCallback} from 'react';
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

const cellNeighbors = [
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

    const runningRef = useRef(running);
    runningRef.current = running;

    const toggleGrid = ({i, j}) => {
        setGrid(produce(grid, gridCopy => {
            gridCopy[i][j] = grid[i][j] ? 0 : 1;
        }))
    }

    const startButton = () => {
        setRunning(!running);
        if(!running) {
            runningRef.current = true;
            runGrid()
        }
    }

    const runGrid = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
        
        setGrid((grid) => {
            return produce(grid, gridCopy => {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        let neighbors = 0;
                        cellNeighbors.forEach(([x, y]) => {
                            const newI = i + x;
                            const newJ = j + y;
                            if(
                                newI >= 0 && newI < rows && newJ >= 0 && newJ < cols
                            ) {
                                neighbors += grid[newI][newJ]
                            }   
                        })
                        
                        if(neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = 0;
                        }else if (grid[i][j] === 0 && neighbors === 3) {
                            gridCopy[i][j] =1;
                        }
                    }
                }
            })
        })
        setTimeout(runGrid, 1000) //one sec
    }, [])

    const toggleCell = ({i, j}) => {
        let toggleBg = 'cell';
        if(grid[i][j] === 1) {
            return toggleBg += 'ToggleBg';
        }else {
            return toggleBg
        }
    }

    return(
        <>
            <button onClick={startButton}>{running ? "Stop" : "Start"}</button>
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