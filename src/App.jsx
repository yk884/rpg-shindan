import React, { useState } from 'react';
import "./App.css";
import StartScreen from './components/Start';
import QuestionScreen from './components/Question';
import ResultScreen from './components/Result';
import { questions, calculateResult, images, typeLabels, typeDescriptions } from './utils/quizdata';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0); // プログレスバーの進捗を管理

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    setProgress((currentQuestionIndex + 1) / questions.length * 100); // 進捗を更新

    if (newAnswers.length === questions.length) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const restart = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setIsStarted(false);
    setProgress(0); // プログレスバーの進捗をリセット
  };
  const startGame = () => {
    setIsStarted(true);
  }

  return (
    <div className='flame'>
    {!isStarted ? (
      <StartScreen startGame={startGame} />
    ) : !showResult ? (
      <QuestionScreen
        question={questions[currentQuestionIndex]}
        progress={progress}
        handleAnswer={handleAnswer}
      />
    ) : (
      <ResultScreen
        resultLabel={typeLabels[calculateResult(answers)]}
        resultDescription={typeDescriptions[calculateResult(answers)]}
        resultImage={images[calculateResult(answers)]}
        onRestart={restart}
      />
    )}
  </div>
  );
};

export default App;
