'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUpPage: React.FC = () => {
  const [userType, setUserType] = useState<'student' | 'parent' | 'teacher' | null>(null);
  const router = useRouter();

  const handleUserTypeSelect = (type: 'student' | 'parent' | 'teacher') => {
    setUserType(type);
  };

  const handleSignUp = () => {
    if (userType) {
      // Redirect to the appropriate sign-up page based on the selected user type
      // Replace the URLs below with your actual sign-up page links
      if (userType === 'student') {
        router.push('/students/signup'); // Link to student sign-up
      } else if (userType === 'parent') {
        router.push('/parents/signup'); // Link to parent sign-up
      } else if (userType === 'teacher') {
        router.push('/teachers/signup'); // Link to teacher sign-up
      }
    } else {
      alert('Please select your role');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        <h2 className="text-lg font-semibold mb-2">Select your role:</h2>
        
        <div className="flex space-x-4 mb-4">          
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

        <h2 className="text-lg font-semibold mb-2">Then Click Sign Up</h2>
        <button
          onClick={handleSignUp}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
