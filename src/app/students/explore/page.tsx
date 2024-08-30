'use client';

import React from 'react';
import Link from 'next/link';

interface Creation {
  id: number;
  title: string;
  description: string;
  creator: {
    name: string;
    profilePicture: string;
  };
  imageUrl: string;
  projectUrl: string;
}

const ExplorePage: React.FC = () => {
  const creations: Creation[] = [
    {
      id: 1,
      title: 'Eco-Friendly Home Renovation',
      description: 'A complete overhaul of my home to make it more energy-efficient and sustainable.',
      creator: {
        name: 'John Doe',
        profilePicture: 'https://example.com/profile-pictures/john-doe.jpg',
      },
      imageUrl: 'https://example.com/eco-friendly-home-renovation.jpg',
      projectUrl: '/projects/eco-friendly-home-renovation',
    },
    {
      id: 2,
      title: 'Community Garden Project',
      description: 'A collaborative effort to create a shared garden space in our neighborhood.',
      creator: {
        name: 'Jane Smith',
        profilePicture: 'https://example.com/profile-pictures/jane-smith.jpg',
      },
      imageUrl: 'https://example.com/community-garden-project.jpg',
      projectUrl: '/projects/community-garden-project',
    },
    {
      id: 3,
      title: 'Zero-Waste Lifestyle Guide',
      description: 'A comprehensive guide to help people transition to a zero-waste lifestyle.',
      creator: {
        name: 'Michael Johnson',
        profilePicture: 'https://example.com/profile-pictures/michael-johnson.jpg',
      },
      imageUrl: 'https://example.com/zero-waste-lifestyle-guide.jpg',
      projectUrl: '/projects/zero-waste-lifestyle-guide',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore Creations</h1>
        <p className="text-lg text-gray-700">
          Discover and get inspired by creations shared by our community members.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {creations.map((creation) => (
          <Link key={creation.id} href={creation.projectUrl}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={creation.imageUrl}
                alt={creation.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="flex items-center mb-4">
                <img
                  src={creation.creator.profilePicture}
                  alt={creation.creator.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <h3 className="text-lg font-semibold">{creation.creator.name}</h3>
              </div>
              <h2 className="text-2xl font-semibold mb-2">{creation.title}</h2>
              <p className="text-gray-700 mb-4">{creation.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
