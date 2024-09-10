import React from 'react';
import Link from 'next/link';

const LessonPlan1: React.FC = () => {
  return (
    <div className="bg-blue-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Lesson Plan 1</h1>
          <p className="text-lg text-gray-800">
            An introduction to the concept of net-zero emissions and why it is crucial for our planet.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Learning Objectives</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Understand the concept of net-zero emissions.</li>
              <li>Recognize the importance of achieving net-zero emissions for climate change mitigation.</li>
              <li>Identify methods to achieve net-zero emissions.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Materials Needed</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Whiteboard and markers</li>
              <li>Projector and screen</li>
              <li>Handouts on net-zero emissions (PDF)</li>
              <li>Internet access for video presentation</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Introduction (10 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Start with a brief discussion on climate change and its impact on the environment. Introduce the concept of net-zero emissions and explain its significance in combating climate change.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Main Activity (20 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Show a short video explaining net-zero emissions. After the video, distribute handouts and have students read through them in small groups. Ask each group to list ways to achieve net-zero emissions and discuss their ideas with the class.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Discussion (15 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Facilitate a class discussion on the importance of net-zero emissions. Encourage students to share their thoughts on how they can contribute to achieving net-zero in their daily lives.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Assessment (10 minutes)</h2>
            <p className="text-gray-700 mb-4">
              Conduct a quick quiz to assess students&apos; understanding of net-zero emissions. Use multiple-choice and short-answer questions based on the lesson content.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link href="/lesson-plans" legacyBehavior>
              <a className="bg-blue-500 text-white px-4 py-2 rounded-full text-xl font-semibold mb-4 inline-block">
                View More Lesson Plans
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlan1;
