import React, { useState, useEffect } from 'react';
import GridLayout from './gridlayout/GridLayout';
import { letterPatterns } from '../utils/letterPatterns'; // Ensure this path is correct
import './GridControl.css'; // If you have specific styles for GridControl

const GridControl = () => {
  const rows = 20;
  const cols = 53;

  const [speed, setSpeed] = useState(100);
  const [text, setText] = useState("WELCOME TO THE GAMECOMPANY I AM DEV GUPTA");

  const handleSpeedChange = (newSpeed) => setSpeed(newSpeed);
  const handleTextChange = (newText) => setText(newText.toUpperCase());

  const createEmptyGrid = () => {
    return Array.from({ length: rows }, () => Array(cols).fill('black'));
  };

  const [grid, setGrid] = useState(createEmptyGrid());
  const [startCol, setStartCol] = useState(cols); // Start from the far right to slide left

  const placeLetterOnGrid = (grid, letterPattern, startRow, startCol, color) => {
    if (startCol < 0 || startCol >= cols) return; // Skip if out of bounds

    for (let i = 0; i < letterPattern.length; i++) {
      for (let j = 0; j < letterPattern[i].length; j++) {
        if (letterPattern[i][j] === 1) {
          const row = startRow + i;
          const col = startCol + j;

          if (row < grid.length && col >= 0 && col < cols) {
            grid[row][col] = color;
          }
        }
      }
    }
  };

  const slideText = () => {
    const newGrid = createEmptyGrid();
    const color = getRandomColor();
    let currentCol = startCol;

    for (let i = 0; i < text.length; i++) {
      const letter = text[i];
      const letterPattern = letterPatterns[letter];

      if (letterPattern && currentCol < cols) {
        placeLetterOnGrid(newGrid, letterPattern, 4, currentCol, color);
        currentCol += letterPattern[0].length + 1; // Move to the next position
      }
    }
    setGrid(newGrid);

    // Update the starting column for the next frame
    if (startCol + text.length * 6 > 0) { // Assuming average letter width is 5 plus 1 space
      setStartCol((prevStartCol) => prevStartCol - 1);
    } else {
      setStartCol(cols); // Reset to start from the right again
    }
  };

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideText();
    }, speed); // Adjust timing as needed for smooth sliding
    return () => clearInterval(interval);
  }, [startCol, text, speed]);

  return (
    <div className='outer'>
      <GridLayout gridData={grid} />
      {/* <ControlPanel
        onSpeedChange={handleSpeedChange}
        onTextChange={handleTextChange}
      /> */}
    </div>
  );
};

export default GridControl;
