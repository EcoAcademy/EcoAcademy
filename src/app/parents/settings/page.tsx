"use client";
import React, { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const SettingsPage: NextPage = () => {
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [goal, setGoal] = useState('Complete 5 sustainability activities per week');

  const handleEmailUpdatesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailUpdates(event.target.checked);
  };

  const handleGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoal(event.target.value);
  };

  const handleSaveSettings = () => {
    // Logic to save settings (e.g., send to an API)
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">Parent Settings</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Email Updates</h2>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={emailUpdates}
                onChange={handleEmailUpdatesChange}
                className="form-checkbox h-5 w-5 text-orange-500"
              />
              <span className="ml-2 text-gray-600">Receive email updates about my child&apos;s progress and new activities</span>
            </label>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Set Goals</h2>
            <label className="block text-gray-600 mb-2">Weekly Goal</label>
            <input
              type="text"
              value={goal}
              onChange={handleGoalChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            onClick={handleSaveSettings}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Save Settings
          </button>
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

export default SettingsPage;
