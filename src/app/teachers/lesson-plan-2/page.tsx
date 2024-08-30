import React from 'react';
import Link from 'next/link';

const LessonPlan2: React.FC = () => {
  return (
    <div className="bg-green-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-green-600">Lesson Plan 2</h1>
          <p className="text-lg text-gray-800">
            Exploring renewable energy sources and their role in a sustainable future.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Learning Objectives</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Understand the different types of renewable energy sources.</li>
              <li>Recognize the benefits of using renewable energy sources.</li>
              <li>Identify ways to promote the adoption of renewable energy.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Materials Needed</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Whiteboard and markers</li>
              <li>Projector and screen</li>
              <li>Handouts on renewable energy sources (PDF)</li>
              <li>Internet access for video presentation</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Introduction (10 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Start with a brief discussion on the importance of transitioning to renewable energy sources. Introduce the different types of renewable energy sources and their potential impact on the environment.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Main Activity (25 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Divide the class into small groups and assign each group a different renewable energy source (e.g., solar, wind, hydroelectric, geothermal). Have each group research their assigned source and prepare a short presentation highlighting its benefits, challenges, and potential applications.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Group Presentations (30 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Have each group present their findings to the class. Encourage discussion and questions after each presentation.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Wrap-up (10 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Summarize the key points from the lesson and emphasize the importance of promoting and adopting renewable energy sources for a sustainable future.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link href="/teachers" legacyBehavior>
              <a className="bg-green-500 text-white px-4 py-2 rounded-full text-xl font-semibold mb-4 inline-block">
                View More Lesson Plans
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlan2;
