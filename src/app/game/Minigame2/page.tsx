'use client';
import { useState, useEffect } from 'react';

const maze = [
  ['S', 'W', ' ', 'W', 'W', 'W', ' ', 'W', 'W', 'W'],
  [' ', 'W', ' ', 'W', ' ', '?', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' ', 'W', 'W', ' ', 'W', ' '],
  ['W', 'W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', 'W', ' ', 'W', 'W', 'W', ' '],
  [' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
  [' ', ' ', ' ', 'W', ' ', 'W', ' ', ' ', ' ', 'E'],
];

const questions = [
  { question: 'What is renewable energy?', answer: 'energy from natural sources' },
  { question: 'Why is recycling important?', answer: 'reduces waste and conserves resources' },
  { question: 'What is a carbon footprint?', answer: 'total greenhouse gases emitted' },
];

const EnergyEfficiencyMaze = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [completed, setCompleted] = useState<boolean>(false);
  const [showQuestion, setShowQuestion] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<{ question: string; answer: string } | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [questionAnswered, setQuestionAnswered] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (completed || showQuestion) return;

      setPosition((prev) => {
        const newPos = { ...prev };
        if (e.key === 'ArrowUp') newPos.y = Math.max(prev.y - 1, 0);
        if (e.key === 'ArrowDown') newPos.y = Math.min(prev.y + 1, maze.length - 1);
        if (e.key === 'ArrowLeft') newPos.x = Math.max(prev.x - 1, 0);
        if (e.key === 'ArrowRight') newPos.x = Math.min(prev.x + 1, maze[0].length - 1);

        if (maze[newPos.y][newPos.x] !== 'W') {
          if (maze[newPos.y][newPos.x] === 'E') {
            setCompleted(true);
          } else if (maze[newPos.y][newPos.x] === '?') {
            setShowQuestion(true);
            setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)]);
          }
          return newPos;
        }
        return prev;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [completed, showQuestion]);

  const handleAnswerSubmit = () => {
    if (userAnswer.toLowerCase() === currentQuestion?.answer.toLowerCase()) {
      setShowQuestion(false);
      setQuestionAnswered(true);
    } else {
      alert('Incorrect answer. Try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', color: '#FF9800', fontSize: '2.5em' }}>Energy Efficiency Maze</h1>
      <div style={{ display: 'grid', gridTemplateRows: `repeat(${maze.length}, 50px)` }}>
        {maze.map((row, y) => (
          <div key={y} style={{ display: 'grid', gridTemplateColumns: `repeat(${row.length}, 50px)` }}>
            {row.map((cell, x) => (
              <div
                key={x}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid black',
                  backgroundColor:
                    cell === 'W'
                      ? '#757575'
                      : position.x === x && position.y === y
                      ? '#FFEB3B'
                      : cell === 'E' && completed
                      ? '#4CAF50'
                      : '#FFFFFF',
                  textAlign: 'center',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                }}
              >
                {cell === 'S' && 'Start'}
                {cell === 'E' && (completed ? 'Completed' : 'End')}
                {cell === '?' && '?'}
              </div>
            ))}
          </div>
        ))}
      </div>
      {showQuestion && currentQuestion && (
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
          backgroundColor: 'white', padding: '20px', border: '2px solid #4CAF50', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2>Answer the Question to Proceed</h2>
          <p>{currentQuestion.question}</p>
          <input 
            type="text" 
            value={userAnswer} 
            onChange={(e) => setUserAnswer(e.target.value)} 
            style={{ padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #CCC' }}
          />
          <button onClick={handleAnswerSubmit} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#FFF', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Submit
          </button>
        </div>
      )}
      {completed && (
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
          backgroundColor: 'white', padding: '20px', border: '2px solid #4CAF50', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2>Congratulations!</h2>
          <p>You have successfully completed the maze.</p>
        </div>
      )}
    </div>
  );
};

export default EnergyEfficiencyMaze;
