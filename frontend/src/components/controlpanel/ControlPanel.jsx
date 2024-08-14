import React, { useState } from 'react';
import "./controlpanel.css"

const ControlPanel = ({ onColorChange, onSpeedChange, onTextChange }) => {
    return (
        <div className="control-panel">
            <label>
                Speed:
                <input type="range" min="50" max="1000" onChange={(e) => onSpeedChange(e.target.value)} />
            </label>
            <label>
                Text:
                <input type="text" onChange={(e) => onTextChange(e.target.value)} />
            </label>
        </div>
    );
};

export default ControlPanel;