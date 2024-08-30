"use client";

import React, { useState } from 'react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add your forgot password logic here, e.g., sending a request to your API
      // Here we just simulate a successful password reset request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage('A password reset link has been sent to your email address.');
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Forgot Password</h2>
        {message && <p className="mb-4 text-green-600">{message}</p>}
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
