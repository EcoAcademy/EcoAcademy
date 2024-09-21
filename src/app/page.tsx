'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaUserGraduate, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <div className="container mx-auto py-8">
    {/* Hero Section with Static Image*/}
    <div className="relative w-full h-96">
      <Image
        src="/homepage.webp"
        alt="EcoAcademy Hero"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold">Welcome to EcoAcademy!</h1>
        <p className="text-white text-xl mt-4 text-center">
          Ready to learn how to save the planet using the power of sustainability? Together, let's learn to be eco-friendly with EcoAcademy!
        </p>
      </div>
    </div>

    {/* User Categories */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {/* Student Section */}
      <Link href="/students" className="group bg-blue-100 shadow-md rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
        <FaUserGraduate className="text-blue-500 text-6xl mb-4 group-hover:text-blue-600 transition-colors duration-300" />
        <h2 className="text-2xl font-semibold mb-2">Are you a Student?</h2>
      </Link>

      {/* Teacher Section */}
      <Link href="/teachers" className="group bg-green-100 shadow-md rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
        <FaChalkboardTeacher className="text-green-500 text-6xl mb-4 group-hover:text-green-600 transition-colors duration-300" />
        <h2 className="text-2xl font-semibold mb-2">Are you a Teacher?</h2>
      </Link>

      {/* Parent Section */}
      <Link href="/parents" className="group bg-yellow-100 shadow-md rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
        <FaUserTie className="text-yellow-500 text-6xl mb-4 group-hover:text-yellow-600 transition-colors duration-300" />
        <h2 className="text-2xl font-semibold mb-2">Are you a Parent?</h2>
      </Link>
    </div>

    {/* Sustainability & Learning Section */}
    <div className="mt-12 bg-indigo-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4 text-indigo-700">Learn About Net-Zero & Sustainability</h2>
      <p className="text-lg text-gray-700 mb-4">
        Discover how you can make a difference in the world by understanding the principles of net-zero and sustainability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left items-center">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">What is Net-Zero?</h3>
          <p className="text-gray-700 mb-4">
            Net-zero refers to achieving a balance between the amount of greenhouse gases emitted and removed. Learn how we can reach net-zero emissions by 2050.
          </p>
          <Link href="/students/learn" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-md">
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Why Sustainability Matters?</h3>
          <p className="text-gray-700 mb-4">
            Sustainability ensures that we meet our present needs without compromising future generations. Explore ways to live sustainably and reduce your carbon footprint.
          </p>
          <Link href="/students/learn" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-md">
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Renewable Energy</h3>
          <p className="text-gray-700 mb-10">
            Renewable energy comes from sources that are constantly replenished. Discover the types of renewable energy and how they can power our future.
          </p>
          <Link href="/students/learn" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-md">
            Learn More
          </Link>
        </div>
      </div>
    </div>

    {/* Tips and Footer */}
    <div className="mt-12 bg-teal-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4 text-teal-700">Did You Know?</h2>
      <p className="text-lg text-gray-700 mb-4">
        You can make a positive impact on the environment through small changes in your daily life. Here are some tips to live more sustainably:
      </p>
      <ul className="list-disc list-inside text-left text-gray-700 mb-6">
        <li>Use energy-efficient appliances and light bulbs.</li>
        <li>Reduce, reuse, and recycle materials to minimize waste.</li>
        <li>Opt for public transportation, biking, or walking.</li>
        <li>Support renewable energy projects and initiatives.</li>
        <li>Plant trees and support reforestation efforts.</li>
      </ul>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default Home;
