// pages/shop.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolarPanel, faSave, faRecycle, faTree } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import Link from 'next/link';

const ShopPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tutorials</h1>
        <p className="text-lg text-gray-700">
          Welcome to ArchAcademy's Tutorials, where you can learn how to use sustainable products and solutions to support your net-zero journey.
        </p>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        {/* Tutorial Section 1: Add a Net-Zero Appliance */}
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faSolarPanel} className="text-3xl text-blue-500 mr-4" />
          <h2 className="text-2xl font-semibold mb-0">Add a Net-Zero Appliance</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Learn how to add a sustainable appliance to your home.
            </p>
            <Link href="/shop/solar-panels">
              <span className="text-blue-500 hover:underline cursor-pointer">Use</span>
            </Link>
          </div>
        </div>

        {/* Tutorial Section 2: Save your project */}
        <div className="flex items-center mt-8 mb-6">
          <FontAwesomeIcon icon={faSave} className="text-3xl text-green-500 mr-4" />
          <h2 className="text-2xl font-semibold mb-0">Save your project</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Learn how to save your project so you won't lose it.
            </p>
            <Link href="/shop/home-batteries">
              <span className="text-blue-500 hover:underline cursor-pointer">Use</span>
            </Link>
          </div>
        </div>

        {/* Tutorial Section 3: Recycling Tips */}
        <div className="flex items-center mt-8 mb-6">
          <FontAwesomeIcon icon={faRecycle} className="text-3xl text-yellow-500 mr-4" />
          <h2 className="text-2xl font-semibold mb-0">Recycling Tips</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Discover effective recycling practices and how they contribute to sustainability.
            </p>
            <Link href="/shop/recycling-tips">
              <span className="text-blue-500 hover:underline cursor-pointer">Use</span>
            </Link>
          </div>
        </div>

        {/* Tutorial Section 4: Planting Trees for Carbon Sequestration */}
        <div className="flex items-center mt-8 mb-6">
          <FontAwesomeIcon icon={faTree} className="text-3xl text-green-500 mr-4" />
          <h2 className="text-2xl font-semibold mb-0">Planting Trees for Carbon Sequestration</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Understand the importance of planting trees and how it helps in absorbing carbon dioxide from the atmosphere.
            </p>
            <Link href="/shop/planting-trees">
              <span className="text-blue-500 hover:underline cursor-pointer">Use</span>
            </Link>
          </div>
        </div>

        {/* Additional tutorials can be added similarly */}
      </div>
    </div>
  );
}

export default ShopPage;
