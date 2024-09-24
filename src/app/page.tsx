'use client';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <div className="container mx-auto py-8 font-sans">

    {/* Hero Section with Image Background */}
    <div className="relative w-full h-screen">
      <Image
        src="/s-l1200.webp" // Replace with your actual image path
        alt="Earth from Space"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-7xl font-extrabold animate-fade-in mb-4 drop-shadow-lg">
          Welcome to EcoAcademy
        </h1>
        <p className="text-white text-xl mt-4 mb-8 max-w-xl drop-shadow-md">
          Ready to learn how to save the planet using the power of sustainability? Together, let's become eco-friendly with EcoAcademy!
        </p>
        <Link href="/students" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white py-3 px-6 rounded-full text-lg shadow-md transition-transform transform hover:scale-105">
  Get Started
</Link>
      </div> 
    </div>

    {/* User Categories with Hover Animation */}
    <div id="categories" className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 px-8">
      {/* Student Section */}
      <Link href="/students" className="group bg-blue-50 shadow-xl rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img src="/student-icon.svg" alt="Student Icon" className="w-24 h-24 mb-6 group-hover:animate-pulse transition-transform duration-300" />
        <h2 className="text-4xl font-bold mb-2 text-gray-800">Are you a Student?</h2>
        <p className="text-gray-600">Discover your journey to a sustainable future.</p>
      </Link>

      {/* Teacher Section */}
      <Link href="/teachers" className="group bg-green-50 shadow-xl rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img src="/teacher-icon.svg" alt="Teacher Icon" className="w-24 h-24 mb-6 group-hover:animate-pulse transition-transform duration-300" />
        <h2 className="text-4xl font-bold mb-2 text-gray-800">Are you a Teacher?</h2>
        <p className="text-gray-600">Empower your students with eco-knowledge.</p>
      </Link>

      {/* Parent Section */}
      <Link href="/parents" className="group bg-yellow-50 shadow-xl rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img src="/parent-icon.svg" alt="Parent Icon" className="w-24 h-24 mb-6 group-hover:animate-pulse transition-transform duration-300" />
        <h2 className="text-4xl font-bold mb-2 text-gray-800">Are you a Parent?</h2>
        <p className="text-gray-600">Help guide your family towards a greener future.</p>
      </Link>
    </div>

    {/* Sustainability & Learning Section with Gradient Background */}
    <div className="mt-24 bg-gradient-to-r from-blue-50 to-indigo-100 p-12 rounded-lg shadow-xl text-center">
      <h2 className="text-5xl font-extrabold mb-6 text-indigo-700">Learn About Net-Zero & Sustainability</h2>
      <p className="text-lg text-gray-800 mb-8 max-w-4xl mx-auto">
        Discover how you can make a difference in the world by understanding the principles of net-zero and sustainability. Let's build a brighter, eco-friendly future together.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-semibold mb-4">What is Net-Zero?</h3>
          <p className="text-gray-700 mb-6">
            Net-zero refers to achieving a balance between the amount of greenhouse gases emitted and removed. Learn how we can reach net-zero emissions by 2050.
          </p>
          <Link href="/students/learn" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-semibold mb-4">Why Sustainability Matters?</h3>
          <p className="text-gray-700 mb-6">
            Sustainability ensures that we meet our present needs without compromising the ability of future generations to meet theirs. Explore ways to live sustainably.
          </p>
          <Link href="/students/learn" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-semibold mb-4">Renewable Energy</h3>
          <p className="text-gray-700 mb-6">
            Renewable energy comes from natural sources that are constantly replenished. Discover the different types of renewable energy and how they can power our future.
          </p>
          <Link href="/students/learn" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Learn More
          </Link>
        </div>
      </div>
    </div>

    {/* Sustainability Tips Section with SVG Icons */}
    <div className="mt-24 bg-teal-50 p-12 rounded-lg shadow-xl text-center">
      <h2 className="text-5xl font-extrabold mb-6 text-teal-700">Sustainability Tips</h2>
      <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
        You can make a positive impact on the environment by making small changes in your daily life. Here's how:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
          <img src="/leaf-icon.svg" alt="Leaf Icon" className="w-16 h-16 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-semibold mb-2">Energy Efficiency</h3>
          <p className="text-gray-700 text-center">Use energy-efficient appliances and light bulbs to reduce your energy consumption.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
          <img src="/recycle-icon.svg" alt="Recycle Icon" className="w-16 h-16 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-semibold mb-2">Reduce, Reuse, Recycle</h3>
          <p className="text-gray-700 text-center">Minimize waste by recycling and reusing materials whenever possible.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
          <img src="/tree-icon.svg" alt="Tree Icon" className="w-16 h-16 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-semibold mb-2">Plant Trees</h3>
          <p className="text-gray-700 text-center">Help reforest the planet by planting trees and supporting reforestation efforts.</p>
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default Home;
