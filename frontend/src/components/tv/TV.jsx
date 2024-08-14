import React from 'react';
import './TV.css'; // Import the corresponding CSS file
import GridControl from '../GridControl'; // Adjust the path if necessary

const TV = () => {

  return (
    <div className="tv-container">
      <h1 className="title">VISUALIZER TV</h1>
      <div className="tv-block">
        <div className="tv-screen-frame">
          <div className="tv-screen-frame-top"></div>
          <div className="tv-screen-frame-left"></div>
          <div className="tv-screen">
            <GridControl />
          </div>
        </div>
        <div className="tv-controls">
          <div className="buttons">
            <div className="button"></div>
            <div className="button"></div>
          </div>
        </div>
        <div className="tv-bottom"></div>
        <div className="container-shadow"></div>
      </div>
    
    </div>
  );
};

export default TV;
