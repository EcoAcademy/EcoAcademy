import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const ProgressPage: NextPage = () => {
  // Dummy data for children's progress
  const childrenProgress = [
    {
      name: 'John Doe',
      completedTasks: 8,
      totalTasks: 10,
    },
    {
      name: 'Jane Doe',
      completedTasks: 5,
      totalTasks: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">Children's Progress</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {childrenProgress.map((child, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{child.name}</h2>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-orange-600">
                      {((child.completedTasks / child.totalTasks) * 100).toFixed(2)}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                  <div
                    style={{ width: `${(child.completedTasks / child.totalTasks) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                  ></div>
                </div>
                <p className="text-gray-600 text-sm">
                  {child.completedTasks} out of {child.totalTasks} tasks completed
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/parents" className="text-orange-500 hover:text-orange-700 font-semibold">
            Back to Parents Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
