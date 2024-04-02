import React from 'react';

const ProgressBar = ({ progress }) => (
  <div className='progressBarBackground'>
    <div className="progressBar" style={{ width: `${progress}%` }}></div>
  </div>
);

export default ProgressBar;
