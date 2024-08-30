'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<'teacher' | 'student' | 'parent' | 'admin' | null>(null);
  const router = useRouter();

  const handleUserTypeSelect = (type: 'teacher' | 'student' | 'parent' | 'admin') => {
    setUserType(type);
  };

  const handleLogin = () => {
    if (userType) {
      // Redirect to the appropriate login page based on the selected user type
      router.push(`/${userType}s/login`);
    } else {
      console.log('Please select your user type');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select your role:</h2>
        
          <div className="flex space-x-4">          
            <button
              onClick={() => handleUserTypeSelect('student')}
              className={`px-4 py-2 rounded-md ${
                userType === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => handleUserTypeSelect('parent')}
              className={`px-4 py-2 rounded-md ${
                userType === 'parent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Parent
            </button>
            <button
              onClick={() => handleUserTypeSelect('teacher')}
              className={`px-4 py-2 rounded-md ${
                userType === 'teacher' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Teacher
            </button>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2">Then Click Login</h2>
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

export default LoginPage;
