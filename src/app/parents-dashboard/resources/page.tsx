import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const ResourcesPage: NextPage = () => {
  // Dummy data for sustainability resources
  const resources = [
    {
      title: 'Sustainability 101: An Introduction for Parents and Kids',
      description: 'Learn the basics of sustainability and how you can practice it at home.',
      link: '/parents/signup',
    },
    {
      title: 'Fun Activities to Teach Kids About Recycling',
      description: 'Engage your kids in fun activities that teach the importance of recycling.',
      link: '/parents/signup',
    },
    {
      title: 'Top 5 Educational Videos on Climate Change',
      description: 'Watch these kid-friendly videos to understand the impact of climate change.',
      link: '/parents/signup',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">Sustainability Resources</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {resources.map((resource, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{resource.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              <Link href={resource.link} className="text-orange-500 hover:text-orange-700 font-semibold">
                Read More
              </Link>
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

export default ResourcesPage;
