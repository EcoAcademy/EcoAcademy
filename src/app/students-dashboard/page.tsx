'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import FAQComponent from '../../components/FAQ'; // Import the FAQComponent
import StudentHighlights from '../../components/StudentHighlights'; // Import the new component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCompass, faBookOpen, faGraduationCap, faFolderOpen, faSignOutAlt, faUser, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'; // Import additional icons

const StudentsPage: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipToggle = () => setShowTooltip(prev => !prev);

  return (
    <div className="bg-green-100 py-12 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-green-600">Welcome Student</h1>
          <p className="text-lg text-gray-800">
            Welcome to the world of EcoAcademy! Discover how we can protect our planet while having a blast.
          </p>
        </div>

        <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { href: '/students/play', label: 'Create New', icon: faLightbulb, bgColor: 'bg-blue-500', hoverColor: 'hover:bg-blue-600' },
            { href: '/students/explore', label: 'Explore', icon: faCompass, bgColor: 'bg-green-500', hoverColor: 'hover:bg-green-600' },
            { href: '/students/learn', label: 'Learn', icon: faBookOpen, bgColor: 'bg-yellow-500', hoverColor: 'hover:bg-yellow-600' },
            { href: '/students/shop', label: 'Tutorials', icon: faGraduationCap, bgColor: 'bg-red-500', hoverColor: 'hover:bg-red-600' },
            { href: '/students-dashboard/projects', label: 'Your Projects', icon: faFolderOpen, bgColor: 'bg-orange-500', hoverColor: 'hover:bg-orange-600' },
            { href: '/students/', label: 'Logout', icon: faSignOutAlt, bgColor: 'bg-purple-500', hoverColor: 'hover:bg-purple-600' },
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

        <div className="mt-8">
          <FAQComponent />
        </div>

        <div className="mt-8">
          <StudentHighlights />
        </div>

        {/* Enhanced Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div className="text-center bg-white rounded-lg shadow-lg p-6 lg:p-8 flex-1 mx-2">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 text-gray-800">Explore Our Features</h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Discover the various opportunities and resources available to you as a student at EcoAcademy. Whether you&apos;re looking to create, explore, learn, shop, sign up, or log in, we&apos;ve got you covered.
            </p>
          </div>

          <div className="text-center bg-white rounded-lg shadow-lg p-6 lg:p-8 flex-1 mx-2">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 text-gray-800">Start Creating</h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Ready to unleash your creativity? Start a new project and create something amazing with our tools and resources.
            </p>
            <Link href="/students/play" passHref legacyBehavior>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg mt-4 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-transform transform hover:scale-105">
                Get Started!
              </button>
            </Link>
          </div>

          <div className="text-center bg-white rounded-lg shadow-lg p-6 lg:p-8 flex-1 mx-2">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 text-gray-800">Explore</h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Explore the community&apos;s designs to inspire your own creations.
            </p>
            <Link href="/students/explore" passHref legacyBehavior>
              <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg mt-4 focus:outline-none focus:ring-4 focus:ring-green-500 transition-transform transform hover:scale-105">
                Let&apos;s Go!
              </button>
            </Link>
          </div>
        </div>

        {/* Help Button */}
        <div className="fixed bottom-4 right-4 flex items-center">
          <button
            onClick={handleTooltipToggle}
            className="bg-white border-2 border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300"
            aria-label="Help"
          >
            <FontAwesomeIcon icon={faQuestionCircle} className="text-xl text-gray-600" />
          </button>
          {showTooltip && (
            <div className="absolute bottom-12 right-0 bg-gray-800 text-white text-sm rounded-lg p-3 shadow-lg">
              <p>Need help? Visit our FAQ or contact support.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
