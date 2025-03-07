'use client';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Home: React.FC = () => {
  // Add smooth scroll effect when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('categories')?.scrollIntoView({ 
        behavior: 'smooth'
      });
    }, 2000); // Wait 2 seconds before scrolling

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto py-8 font-sans">
      {/* Hero Section with Image Background */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/homepage.jpg" // Changed to .jpg format for better quality/size balance
          alt="Classroom Image"
          priority // Add priority for faster loading of hero image
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold animate-fade-in mb-4 drop-shadow-lg">
            Hey Kids, Welcome to EcoAcademy!
          </h1>
          <p className="text-white text-lg sm:text-xl mt-4 mb-8 max-w-xl drop-shadow-md">
            Ready for an awesome adventure? Let's team up to save our planet and have fun doing it! 🌍
          </p>
          <Link href="/students" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white py-3 px-6 rounded-full text-lg shadow-md transition-transform transform hover:scale-105">
            Start Your Adventure!
          </Link>
        </div> 
      </div>

      {/* User Categories with Hover Animation */}
      <div id="categories" className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 px-4 sm:px-8">
        <Link href="/students" className="group bg-blue-50 shadow-xl rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <img src="/student-icon.svg" alt="Student Icon" className="w-24 h-24 mb-6 group-hover:animate-bounce transition-transform duration-300" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Kids Zone!</h2>
          <p className="text-gray-600">Jump in and start your eco-adventure!</p>
        </Link>

        <Link href="/teachers" className="group bg-green-50 shadow-xl rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <img src="/teacher-icon.svg" alt="Teacher Icon" className="w-24 h-24 mb-6 group-hover:animate-bounce transition-transform duration-300" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Teachers Corner</h2>
          <p className="text-gray-600">Cool tools to teach about our planet!</p>
        </Link>

        <Link href="/parents" className="group bg-yellow-50 shadow-xl rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <img src="/parent-icon.svg" alt="Parent Icon" className="w-24 h-24 mb-6 group-hover:animate-bounce transition-transform duration-300" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Parents Place</h2>
          <p className="text-gray-600">Join your kids on their green journey!</p>
        </Link>
      </div>

      {/* Learning About Sustainability Section - Simplified for Kids */}
      <div className="mt-24 bg-gradient-to-r from-blue-50 to-indigo-100 p-12 rounded-lg shadow-xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-indigo-700">Cool Earth Facts! 🌎</h2>
        <p className="text-lg text-gray-800 mb-8 max-w-4xl mx-auto">
          Did you know you can be a superhero for Earth? Check out these awesome ways to help!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-semibold mb-4">What's Net-Zero? 🎯</h3>
            <p className="text-gray-700 mb-6">
              It's like keeping your room clean - whatever mess we make, we clean up! That's what net-zero means for Earth.
            </p>
            <Link href="/students/learn" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              Discover More!
            </Link>
          </div>
          {/* Similar changes for other sections... */}
        </div>
      </div>

      {/* Tips Section - Made More Fun */}
      <div className="mt-24 bg-teal-50 p-12 rounded-lg shadow-xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-teal-700">Super Earth-Saving Powers! ⚡</h2>
        <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
          Here are some cool ways you can be an Earth Hero today:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <img src="/leaf-icon.svg" alt="Leaf Icon" className="w-16 h-16 mb-4 animate-spin-slow" />
            <h3 className="text-2xl font-semibold mb-2">Power Saver Hero! 💡</h3>
            <p className="text-gray-700 text-center">Turn off lights when you leave - just like a superhero's secret hideout!</p>
          </div>
          {/* Similar changes for other tips... */}
        </div>
      </div>

      {/* News Section - Kid-Friendly Version */}
      <div className="mt-24 bg-white p-12 rounded-lg shadow-xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-800">What's New at EcoAcademy? 📰</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* Update news items with more kid-friendly language... */}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
