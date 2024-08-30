'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import * as freeSolidSvgIcons from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'; // Import from next/navigation

export default function StudentAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<string>('faLeaf'); // Default icon

  const sustainabilityIcons = [
    { icon: freeSolidSvgIcons.faLeaf, name: 'Leaf' },
    { icon: freeSolidSvgIcons.faRecycle, name: 'Recycle' },
    { icon: freeSolidSvgIcons.faTree, name: 'Tree' },
    { icon: freeSolidSvgIcons.faWater, name: 'Water' },
    { icon: freeSolidSvgIcons.faSun, name: 'Sun' },
    { icon: freeSolidSvgIcons.faWind, name: 'Wind' },
    { icon: freeSolidSvgIcons.faSeedling, name: 'Seedling' },
    { icon: freeSolidSvgIcons.faBolt, name: 'Bolt' },
    { icon: freeSolidSvgIcons.faGlobe, name: 'Globe' },
    { _icon: freeSolidSvgIcons.faSunflower,get icon_1() {
        return this._icon;
      },
set icon_1(value) {
        this._icon = value;
      },
get icon() {
        return this._icon;
      },
set icon(value) {
        this._icon = value;
      },
 name: 'Sunflower' },
  ];

  const router = useRouter(); // Initialize useRouter hook from next/navigation

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Selected Icon:', selectedIcon);
  };

  const handleBackToDashboard = () => {
    router.push('/students-dashboard'); // Navigate to the students-dashboard route
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Account Settings</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-semibold mb-2">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Icon Selection Section */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              <FontAwesomeIcon icon={freeSolidSvgIcons.faLeaf} className="mr-2" />
              Choose Icon
            </label>
            <div className="grid grid-cols-2 gap-4">
              {sustainabilityIcons.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSelectedIcon(item.name)}
                  className={`p-2 border rounded-md flex items-center justify-center ${selectedIcon === item.name ? 'border-green-500' : 'border-gray-300'} focus:outline-none`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Save Changes
          </button>
        </form>
        <button
          type="button"
          onClick={handleBackToDashboard}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
