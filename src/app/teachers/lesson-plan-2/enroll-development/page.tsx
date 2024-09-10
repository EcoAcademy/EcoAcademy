'use client';

import { useState } from 'react';

interface EnrollmentFormData {
  name: string;
  email: string;
  courseId: number;
  phoneNumber: string;
  address: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Introduction to Sustainability Education',
    description: 'Learn the fundamentals of teaching sustainability concepts to students of all ages.',
    duration: '4 weeks',
  },
  {
    id: 2,
    title: 'Designing Engaging Sustainability Lessons',
    description: 'Explore strategies and techniques for creating interactive and engaging sustainability lessons.',
    duration: '6 weeks',
  },
  {
    id: 3,
    title: 'Integrating Technology in Sustainability Education',
    description: 'Discover how to leverage technology to enhance your sustainability teaching practices.',
    duration: '3 weeks',
  },
  {
    id: 4,
    title: 'Assessing Student Learning in Sustainability Education',
    description: 'Learn effective methods for assessing student understanding and progress in sustainability topics.',
    duration: '2 weeks',
  },
];

const EnrollDevelopmentPage: React.FC = () => {
  const [formData, setFormData] = useState<EnrollmentFormData>({
    name: '',
    email: '',
    courseId: 0,
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
    // Reset form data after submission
    setFormData({ name: '', email: '', courseId: 0, phoneNumber: '', address: '' });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Enroll for Development</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block font-semibold mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-semibold mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="courseId" className="block font-semibold mb-1">
            Course
          </label>
          <select
            id="courseId"
            name="courseId"
            value={formData.courseId}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value={0}>Select a course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enroll
        </button>
      </form>
    </div>
  );
};

export default EnrollDevelopmentPage;
