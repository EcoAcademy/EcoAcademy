"use client";
import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const Quiz: React.FC = () => {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<string>('easy');

  const easyQuestions: Question[] = [
    {
      question: 'What is sustainability? Is it...',
      options: ['Using fewer resources', 'Meeting the needs of the present without compromising future generations', 'Recycling'],
      correctAnswer: 'Meeting the needs of the present without compromising future generations',
    },
    {
      question: 'Which of these is a renewable energy source?',
      options: ['Coal', 'Gas', 'Solar Power'],
      correctAnswer: 'Solar Power',
    },
    {
      question: 'Which activity contributes to reducing carbon footprint?',
      options: ['Driving alone in a petrol car', 'Using public transportation or biking', 'Using disposable plastic bags'],
      correctAnswer: 'Using public transportation or biking',
    },
  ];

  const hardQuestions: Question[] = [
    {
      question: 'Sustainability is summarized by which of the following principles?',
      options: ['Balancing resource use to prevent depletion and ensure availability for future generations', 'Focusing solely on economic growth and development', 'Prioritizing short-term gains over long-term environmental impacts'],
      correctAnswer: 'Balancing resource use to prevent depletion and ensure availability for future generations',
    },
    {
      question: 'Which power type does not emit greenhouse gases?',
      options: ['Nuclear Energy', 'Solar Power', 'Oil'],
      correctAnswer: 'Solar Power',
    },
    {
      question: 'Which of the following is most effective in reducing greenhouse gas?',
      options: ['Frequent solo car travel in high-emission vehicles', 'Adopting active transport modes like biking or using well-utilized public transit systems', 'Reliance on single-use plastic products for everyday activities'],
      correctAnswer: 'Adopting active transport modes like biking or using well-utilized public transit systems',
    },
  ];

  const questions = difficulty === 'easy' ? easyQuestions : hardQuestions;

  const handleAnswerClick = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setHasStarted(false);
  };

  const startQuiz = (selectedDifficulty: string) => {
    setDifficulty(selectedDifficulty);
    setHasStarted(true);
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-purple-600 to-blue-500 p-6 rounded-lg shadow-md text-white text-center">
      <h1 className="text-4xl font-bold mb-6"> Sustainability Quiz </h1>
      {!hasStarted ? (
        <div className="flex flex-col items-center space-y-4">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg transform transition duration-300 hover:scale-105"
            onClick={() => startQuiz('easy')}
          >
            Easy!
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg transform transition duration-300 hover:scale-105"
            onClick={() => startQuiz('hard')}
          >
            Hard!
          </button>
        </div>
      ) : showScore ? (
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Quiz Completed!</h2>
          <p className="text-2xl mb-2">You scored {score} out of {questions.length}</p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg transform transition duration-300 hover:scale-105 mt-4"
            onClick={handleRestartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-6">{questions[currentQuestionIndex].question}</h2>
          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-xl font-semibold shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
