'use client';
import Link from 'next/link';
import Footer from '../components/Footer'; 
const Home: React.FC = () => (
  <div className="container mx-auto py-8">
    <h1 className="text-4xl font-bold mb-4 text-center">Welcome to EcoAcademy!</h1>
    <p className="text-gray-900 font-semibold mb-8 text-center">
      Ready to learn how to save the planet using the power of sustainablty? Together let's learn to be Eco with Ecoacademy! 
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-blue-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold mb-2">Are you a Student?</h2>
        <Link href="/students" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          Click Here!
        </Link>
      </div>
      <div className="bg-green-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold mb-2">Are you a Teacher?</h2>
        <Link href="/teachers" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
          Click Here!
        </Link>
      </div>
      <div className="bg-yellow-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold mb-2">Are you a Parent?</h2>
        <Link href="/parents" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
          Click Here!
        </Link>
      </div>
    </div>
    <div className="mt-6 bg-purple-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold mb-2">Or Create a New Project</h2>
      <Link href="/students/play" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
        Create New Project
      </Link>
    </div>
    <div className="mt-6 bg-indigo-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4 text-indigo-700">Learn About Net-Zero & Sustainability</h2>
      <p className="text-lg text-gray-700 mb-4">
        Discover how you can make a difference in the world by understanding the principles of net-zero and sustainability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left items-center text-center">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">What is Net-Zero?</h3>
          <p className="text-gray-700 mb-4">
            Net-zero refers to achieving a balance between the amount of greenhouse gases emitted into the atmosphere and the amount removed. Learn how we can reach net-zero emissions by 2050.
          </p>
          <Link href="/students/learn" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-md">
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Why Sustainability Matters?</h3>
          <p className="text-gray-700 mb-4">
            Sustainability ensures that we meet our present needs without compromising the ability of future generations to meet theirs. Explore ways to live sustainably and reduce your carbon footprint.
          </p>
          <Link href="/students/learn" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-md">
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Renewable Energy</h3>
          <p className="text-gray-700 mb-10">
            Renewable energy comes from natural sources that are constantly replenished. Discover the different types of renewable energy and how they can power our future.
          </p>
          <Link href="/students/learn" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-md">
            Learn More
          </Link>
        </div>
      </div>
    </div>
    <div className="mt-6 bg-teal-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4 text-teal-700">Did you know?</h2>
      <p className="text-lg text-gray-700 mb-4">
        You can easily make a positive impact on the environment through simple changes in your daily life. Here are some tips to help you live more sustainably:
      </p>
      <ul className="list-disc list-inside text-left text-gray-700 mb-2">
        <li>Use energy-efficient appliances and light bulbs.</li>
        <li>Reduce, reuse, and recycle materials to minimize waste.</li>
        <li>Opt for public transportation, biking, or walking instead of driving.</li>
        <li>Support renewable energy projects and initiatives.</li>
        <li>Plant trees and support reforestation efforts.</li>
      </ul>
      <div className="mt-6 bg-purple-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">How can Adults Help?</h2>
        <p className="text-lg text-gray-700 mb-4">
          You can easily make a positive impact on the environment through simple changes in your family. Here are some tips to help you and your family live more sustainably:
        </p>
        <ul className="list-disc list-inside text-left text-gray-700 mb-2">
          <li>Encourage your kids to reduce, reuse, and recycle materials to minimize waste.</li>
          <li>Make a fun sorting activity with your kids to teach them about the 3 bins.</li>
          <li>Share EcoAcademy with friends and all join in the fun.</li>
          <li>Visit ecoacademy.vercel.app to learn more.</li>
          <li>Plant trees with your family to support reforestation efforts.</li>
        </ul>
      </div>
      <Footer />
    </div>
  </div>
);

export default Home;
