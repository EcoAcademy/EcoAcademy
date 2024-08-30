'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const StudentsLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Perform student login logic here
    console.log('Student Login:', email, password);

    // Redirect to the student dashboard or homepage after successful login
    router.push('/students-dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Student Login</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">
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
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default StudentsLoginPage;
