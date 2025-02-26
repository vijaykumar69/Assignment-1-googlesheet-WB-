import React, { useState } from 'react';
    import './App.css';

    function App() {
      const [grid, setGrid] = useState(Array(10).fill(null).map(() => Array(10).fill('')));
      const [selectedCell, setSelectedCell] = useState(null);

      const handleCellChange = (row, col, value) => {
        const newGrid = grid.map((rowArray, rowIndex) =>
          rowIndex === row ? rowArray.map((cellValue, colIndex) => (colIndex === col ? value : cellValue)) : rowArray
        );
        setGrid(newGrid);
      };

      return (
        <div className="App">
          <h1>Simple Sheets Clone</h1>
          <div className="grid-container">
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} className="grid-row">
                {row.map((cell, colIndex) => (
                  <input
                    key={colIndex}
                    type="text"
                    className="grid-cell"
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default App;
