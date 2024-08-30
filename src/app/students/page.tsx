"use client";

import React from 'react';
import Link from 'next/link';
import FAQComponent from '../../components/FAQ'; // Import the FAQComponent
import Footer from '../../components/Footer'; // Import the Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCompass, faBookOpen, faUserPlus, faSignInAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const StudentsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="container mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome Students</h1>
          <p className="text-xl text-gray-600">
            Dive into the world of EcoAcademy, where creativity meets learning.
          </p>
        </div>

        <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-0">
          {[
            { href: '/students/play', label: 'Create New', icon: faLightbulb, bgColor: 'bg-blue-500', hoverColor: 'hover:bg-blue-600' },
            { href: '/students/explore', label: 'Explore', icon: faCompass, bgColor: 'bg-green-500', hoverColor: 'hover:bg-green-600' },
            { href: '/students/learn', label: 'Learn', icon: faBookOpen, bgColor: 'bg-yellow-500', hoverColor: 'hover:bg-yellow-600' },
            { href: '/students/shop', label: 'Tutorials', icon: faGraduationCap, bgColor: 'bg-red-500', hoverColor: 'hover:bg-red-600' },
            { href: '/students/signup', label: 'Sign up', icon: faUserPlus, bgColor: 'bg-purple-500', hoverColor: 'hover:bg-purple-600' },
            { href: '/students/login', label: 'Login', icon: faSignInAlt, bgColor: 'bg-indigo-500', hoverColor: 'hover:bg-indigo-600' },
          ].map(({ href, label, icon, bgColor, hoverColor }) => (
            <Link href={href} passHref legacyBehavior key={label}>
              <button
                className={`${bgColor} ${hoverColor} text-white py-6 px-8 rounded-lg shadow-lg flex items-center justify-center space-x-3 focus:outline-none focus:ring-4 focus:ring-offset-2 transition-transform transform hover:scale-105`}
              >
                <FontAwesomeIcon icon={icon} className="text-3xl" />
                <span className="text-xl font-semibold">{label}</span>
              </button>
            </Link>
          ))}
        </nav>

{/* Include the FAQComponent */}
<div className="mt-4">
            <FAQComponent />
          </div>

        <div className="mt-4 flex flex-row justify-between w-full">
          <div className="text-center bg-white rounded-lg shadow-lg p-8 w-1/3 mx-2">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Explore Our Features</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover the various opportunities and resources available to you as a student at EcoAcademy. Whether you're looking to create, explore, learn, shop, sign up, or log in, we've got you covered.
            </p>
          </div>

          <div className="text-center bg-white rounded-lg shadow-lg p-8 w-1/3 mx-2">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Start Creating</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Ready to unleash your creativity? Start a new project and create something amazing with our tools and resources.
            </p>
            <Link href="/students/play" passHref legacyBehavior>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg mt-6 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-transform transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

          <div className="text-center bg-white rounded-lg shadow-lg p-8 w-1/3 mx-2">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Explore</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Explore the community's designs to inspire your own creations.
            </p>
            <Link href="/students/explore" passHref legacyBehavior>
              <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg mt-6 focus:outline-none focus:ring-4 focus:ring-green-500 transition-transform transform hover:scale-105">
                Let's Go!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
