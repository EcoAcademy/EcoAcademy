"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
    school: '',
    grade: '',
    country: '',
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      setLoading(false);
      return;
    }
    setPasswordsMatch(true);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Sign up failed');
      }

      // Assuming signup is successful
      alert('Sign up successful!');
      setFormData({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
        school: '',
        grade: '',
        country: '',
      });
      setCurrentStep(1);

      // Redirect to Student Dashboard
      router.push('/students-dashboard');
    } catch (error: any) {
      setErrors([error.message]);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const goToNextStep = () => {
    let stepErrors: string[] = [];

    if (currentStep === 1) {
      if (!formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
        stepErrors.push('Please fill out all fields in the Personal Information section.');
      } else if (formData.password !== formData.confirmPassword) {
        stepErrors.push('Passwords do not match.');
      }
    } else if (currentStep === 2) {
      if (!formData.gender || !formData.school || !formData.grade || !formData.country) {
        stepErrors.push('Please fill out all fields in the School and Location section.');
      }
    }

    if (stepErrors.length > 0) {
      setErrors(stepErrors);
    } else {
      setErrors([]);
      if (currentStep === 1) {
        setCurrentStep(2);
      } else if (currentStep === 2) {
        handleSubmit(new Event('submit'));
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">Sign Up</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          {errors.length > 0 && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          {currentStep === 1 && (
            <div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoComplete="email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Create a Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoComplete="off"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Create a Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </button>
                </div>
                {!passwordsMatch && <p className="text-red-500 text-sm mt-1">Passwords do not match</p>}
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <div className="mb-6">
                <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Non-Binary">Non-Binary</option>
                  <option value="Prefer Not to Say">Prefer Not to Say</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="school" className="block text-gray-700 font-semibold mb-2">School</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoComplete="off"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="grade" className="block text-gray-700 font-semibold mb-2">Grade</label>
                <input
                  type="text"
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoComplete="off"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="" disabled>Select Country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="Brazil">Brazil</option>
                </select>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={goToPreviousStep}
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Previous
              </button>
            )}
            <button
              type="button"
              onClick={goToNextStep}
              className={`bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {currentStep === 2 ? (loading ? 'Submitting...' : 'Submit') : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
