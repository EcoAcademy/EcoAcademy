'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faRocket, faMedal } from '@fortawesome/free-solid-svg-icons';

const StudentHighlights: React.FC = () => {
  const highlights = [
    {
      title: 'Top Achiever',
      description: 'Recognizing the highest achievements of our students.',
      icon: faTrophy,
      color: 'bg-yellow-500',
    },
    {
      title: 'Innovator',
      description: 'Celebrating the most creative and innovative projects.',
      icon: faRocket,
      color: 'bg-blue-500',
    },
    {
      title: 'Star Contributor',
      description: 'Honoring those who contribute the most to the community.',
      icon: faMedal,
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Student Highlights</h1>
          <p className="text-lg text-gray-600">
            Discover the standout achievements and contributions of our amazing students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map(({ title, description, icon, color }) => (
            <div key={title} className={`flex items-center p-6 rounded-lg shadow-lg ${color} text-white`}>
              <FontAwesomeIcon icon={icon} className="text-4xl mr-4" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-lg">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentHighlights;
