import React, { useState } from 'react';
import * as fuzzball from 'fuzzball';
const faqData = require('./faqData');

const FAQComponent: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [learnedQuestions, setLearnedQuestions] = useState<{ [key: string]: string }>({});

  const allQuestionsAndAnswers = { ...faqData, ...learnedQuestions };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
    setAnswer(null); // Reset answer when the question changes
  };

  const handleAskQuestion = () => {
    const normalizedQuestion = question.trim().toLowerCase().replace(/[?]/g, '');

    // Using fuzzball to find the best matches
    const bestMatches = fuzzball.extract(normalizedQuestion, Object.keys(allQuestionsAndAnswers), { scorer: fuzzball.token_sort_ratio, limit: 10 }) as [string, number, number][];

    if (bestMatches.length > 0) {
      // Set the answer based on the best match
      const matchedQuestion = bestMatches[0][0]; // Get the most relevant question
      setAnswer(allQuestionsAndAnswers[matchedQuestion]);
    } else {
      setAnswer('Sorry, we don\'t have an answer for that question right now. It is likely that your question wasn\'t referring to sustainability. Sorry, please try another question.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Got questions about Net-Zero?</h2>
      
      <div className="mb-4">
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500"
          placeholder="Type your question here..."
        />
      </div>

      <button
        onClick={handleAskQuestion}
        className="bg-green-500 hover:bg-green-600 text-white py-3 w-full rounded-lg shadow-lg mb-6 focus:outline-none focus:ring-4 focus:ring-green-500 transition-transform transform hover:scale-105"
      >
        Answer
      </button>

      {answer && (
        <div className="mt-4">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQComponent;
