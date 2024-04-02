import React from 'react';

const ResultScreen = ({ resultLabel, resultDescription, resultImage, onRestart }) => (
  <div className='result'>
    <h2>診断結果</h2>
    <p className='message'>あなたは<br /><strong>{resultLabel}</strong><br />タイプです。</p>
    <p className='caption'>{resultDescription}</p>
    <img src={resultImage} alt="img" />
    <button onClick={onRestart}>もう一度やってみる</button>
  </div>
);

export default ResultScreen;
