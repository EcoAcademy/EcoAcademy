import React from 'react';
import Link from 'next/link';

const LessonPlan3: React.FC = () => {
  return (
    <div className="bg-yellow-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-yellow-600">Lesson Plan 3</h1>
          <p className="text-lg text-gray-800">
            Sustainable agriculture: Exploring eco-friendly farming practices.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Learning Objectives</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Understand the principles of sustainable agriculture.</li>
              <li>Recognize the environmental and economic benefits of sustainable farming practices.</li>
              <li>Identify practical strategies for implementing sustainable agriculture.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Materials Needed</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Whiteboard and markers</li>
              <li>Projector and screen</li>
              <li>Handouts on sustainable agriculture practices (PDF)</li>
              <li>Internet access for video presentation</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Introduction (10 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Start with a brief overview of traditional agriculture practices and their environmental impact. Introduce the concept of sustainable agriculture and its importance in addressing these challenges.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Main Activity (30 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Show a short documentary or video on sustainable agriculture practices. After the video, distribute handouts and have students work in pairs to identify and discuss the key principles and strategies highlighted in the material.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Group Discussion (20 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Facilitate a class discussion where pairs share their findings and insights. Encourage students to share their thoughts on how sustainable agriculture practices can be implemented in their local communities.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Wrap-up (15 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Summarize the key points from the lesson and emphasize the importance of adopting sustainable agriculture practices for a more environmentally friendly and economically viable food production system.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link href="/teachers" legacyBehavior>
              <a className="bg-yellow-500 text-white px-4 py-2 rounded-full text-xl font-semibold mb-4 inline-block">
                View More Lesson Plans
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlan3;
