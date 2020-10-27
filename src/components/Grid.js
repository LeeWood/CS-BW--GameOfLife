import React, {useState} from 'react';

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
            {grid}
        </div>
    )
}

export default Grid;