'use client';

import Link from 'next/link';
import React from 'react';

const ProfessionalDevelopmentPage = () => {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Sustainability Education',
      description: 'Learn the fundamentals of teaching sustainability concepts to students of all ages.',
      duration: '4 weeks',
    },
    {
      id: 2,
      title: 'Designing Engaging Sustainability Lessons',
      description: 'Explore strategies and techniques for creating interactive and engaging sustainability lessons.',
      duration: '6 weeks',
    },
    {
      id: 3,
      title: 'Integrating Technology in Sustainability Education',
      description: 'Discover how to leverage technology to enhance your sustainability teaching practices.',
      duration: '3 weeks',
    },
    {
      id: 4,
      title: 'Assessing Student Learning in Sustainability Education',
      description: 'Learn effective methods for assessing student understanding and progress in sustainability topics.',
      duration: '2 weeks',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Professional Development</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Enhance your knowledge and skills in teaching sustainability through our professional development courses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <p className="text-gray-600 mb-6">Duration: {course.duration}</p>
            <Link href={`/teachers/enroll-development/`}>
              <div className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-center">
                Enroll Now
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalDevelopmentPage;
