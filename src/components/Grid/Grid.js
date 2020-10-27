import React, {useState} from 'react';
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

const Grid = () => {
    const [grid, setGrid] = (useState(gridStructure))

    return(
        <div className="grid">
            {grid.map((gridRow, i) => {
                return gridRow.map((column, j) => {
                    return (
                        <div 
                          className="cell"
                          key = {`${i}-${j}`}
                        />
                    )
                })
            })}
        </div>
    )
}

export default Grid;