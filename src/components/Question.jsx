import React from 'react';
import ProgressBar from './ProgressBar';

const QuestionScreen = ({ question, progress, handleAnswer }) => (
  <div className='questionPage'>
    <ProgressBar progress={progress} />
    <h3>{question.text}</h3>
    <div className='qOptions'>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default QuestionScreen;
