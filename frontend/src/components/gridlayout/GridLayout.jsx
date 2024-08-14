// src/components/Grid.js
import React from 'react';
import './gridlayout.css';

const GridLayout = ({ gridData }) => {
    return (
        <div className="grid">
            {gridData.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, cellIndex) => (
                        <div
                            key={cellIndex}
                            className="cell"
                            style={{ backgroundColor: cell, boxShadow: `0 0 10px ${cell}, 0 0 2px ${cell}`}}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GridLayout;
