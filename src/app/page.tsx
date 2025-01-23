'use client';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <div className="container mx-auto py-8 font-sans">

    {/* Hero Section with Image Background */}
    <div className="relative w-full h-screen">
      <Image
        src="/homepage.webp" // Replace with your actual image path
        alt="Earth from Space"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold animate-fade-in mb-4 drop-shadow-lg">
          Welcome to EcoAcademy
        </h1>
        <p className="text-white text-lg sm:text-xl mt-4 mb-8 max-w-xl drop-shadow-md">
          Want to learn how to help the planet? Let's be eco-friendly together at EcoAcademy!
        </p>
        <Link href="/students" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white py-3 px-6 rounded-full text-lg shadow-md transition-transform transform hover:scale-105">
          Get Started
        </Link>
      </div> 
    </div>

    {/* User Categories with Hover Animation */}
    <div id="categories" className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 px-4 sm:px-8">
      {/* Student Section */}
      <Link href="/students" className="group bg-blue-50 shadow-xl rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img src="/student-icon.svg" alt="Student Icon" className="w-24 h-24 mb-6 group-hover:animate-pulse transition-transform duration-300" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Are you a Student?</h2>
        <p className="text-gray-600">Start your journey to a better future!</p>
      </Link>

      {/* Teacher Section */}
      <Link href="/teachers" className="group bg-green-50 shadow-xl rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img src="/teacher-icon.svg" alt="Teacher Icon" className="w-24 h-24 mb-6 group-hover:animate-pulse transition-transform duration-300" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Are you a Teacher?</h2>
        <p className="text-gray-600">Help your students learn about the environment!</p>
      </Link>

      {/* Parent Section */}
      <Link href="/parents" className="group bg-yellow-50 shadow-xl rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img src="/parent-icon.svg" alt="Parent Icon" className="w-24 h-24 mb-6 group-hover:animate-pulse transition-transform duration-300" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Are you a Parent?</h2>
        <p className="text-gray-600">Guide your family to a greener life!</p>
      </Link>
    </div>

    {/* Learning About Sustainability Section */}
    <div className="mt-24 bg-gradient-to-r from-blue-50 to-indigo-100 p-12 rounded-lg shadow-xl text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-indigo-700">Learn About Helping the Planet</h2>
      <p className="text-lg text-gray-800 mb-8 max-w-4xl mx-auto">
        Find out how you can make a difference by learning about being eco-friendly. Let's make the world better together!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-semibold mb-4">What is Net-Zero?</h3>
          <p className="text-gray-700 mb-6">
            Net-zero means we balance the gases we put into the air with what we take out. Learn how we can do this by 2050.
          </p>
          <Link href="/students/learn" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-semibold mb-4">Why Helping the Planet Matters</h3>
          <p className="text-gray-700 mb-6">
            Helping the planet means we can meet our needs today without hurting the future. Learn how to live better!
          </p>
          <Link href="/students/learn" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-semibold mb-4">Clean Energy</h3>
          <p className="text-gray-700 mb-6">
            Clean energy comes from sources that won’t run out. Find out about these energy types and how they help us.
          </p>
          <Link href="/students/learn" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Learn More
          </Link>
        </div>
      </div>
    </div>

    {/* Tips for Helping the Planet Section */}
    <div className="mt-24 bg-teal-50 p-12 rounded-lg shadow-xl text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-teal-700">Tips for Helping the Planet</h2>
      <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
        You can help the environment by making small changes in your everyday life. Here’s how:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
          <img src="/leaf-icon.svg" alt="Leaf Icon" className="w-16 h-16 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-semibold mb-2">Use Less Energy</h3>
          <p className="text-gray-700 text-center">Choose energy-saving lights and appliances to use less power.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
          <img src="/recycle-icon.svg" alt="Recycle Icon" className="w-16 h-16 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-semibold mb-2">Reduce, Reuse, Recycle</h3>
          <p className="text-gray-700 text-center">Cut down on waste by recycling and using things again.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
          <img src="/tree-icon.svg" alt="Tree Icon" className="w-16 h-16 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-semibold mb-2">Plant Trees</h3>
          <p className="text-gray-700 text-center">Help the Earth by planting trees and supporting tree planting projects.</p>
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default Home;
