// pages/parental-controls.tsx

'use client';

import React from 'react';
import Link from 'next/link';

const ParentalControls: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Parental Controls</h1>
        <p className="text-lg text-gray-700">
          Manage your child's learning experience and monitor their progress with our parental control tools.
        </p>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Content Restrictions</h2>
          <p className="text-gray-700 mb-4">
            Control the type of content your child can access. Enable or disable access to specific sections and topics to ensure age-appropriate learning.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            Manage Content
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Screen Time Limits</h2>
          <p className="text-gray-700 mb-4">
            Set limits on how much time your child can spend on the platform each day. Help them balance their learning with other activities.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
            Set Screen Time
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Progress Monitoring</h2>
          <p className="text-gray-700 mb-4">
            Track your child's progress through various courses and activities. Get insights into their strengths and areas for improvement.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500">
            View Progress
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Privacy Settings</h2>
          <p className="text-gray-700 mb-4">
            Manage your child's privacy settings. Control what information is shared and who can interact with them on the platform.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500">
            Adjust Privacy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParentalControls;
