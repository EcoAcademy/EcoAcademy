'use client';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  // Simple slider index for slides
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 3); // Loop through slides
    }, 5000); // 5-second delay
    return () => clearInterval(interval);
  }, []);

  // Slide Images
  const slides = [
    "/images/eco-kids.jpg",
    "/images/eco-nature.jpg",
    "/images/eco-planet.jpg",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with background image and animation */}
      <header className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-16 text-center overflow-hidden">
        {/* Background animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 animate-pulse bg-[url('/images/eco-background.jpg')] bg-cover"></div>

        <h1 className="text-5xl font-bold mb-4 z-10 relative">Welcome to EcoAcademy!</h1>
        <p className="text-lg mb-8 z-10 relative">
          Ready to learn how to save the planet using the power of sustainability? Join us on a journey towards a greener future with EcoAcademy!
        </p>
        <Link href="/students/signup" className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 z-10 relative">
          Get Started Today
        </Link>

        {/* Slideshow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <Image src={slides[slideIndex]} alt="Eco Slides" fill className="object-cover" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-12 px-4">
        {/* Who Are You Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">Who Are You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Student Card */}
            <div className="bg-blue-100 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Are you a Student?</h3>
              <Image src="/images/student.jpg" alt="Students" width={200} height={200} className="mb-4 mx-auto rounded-full shadow-md" />
              <Link href="/students" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300">
                Click Here!
              </Link>
            </div>
            {/* Teacher Card */}
            <div className="bg-green-100 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Are you a Teacher?</h3>
              <Image src="/images/teacher.jpg" alt="Teachers" width={200} height={200} className="mb-4 mx-auto rounded-full shadow-md" />
              <Link href="/teachers" className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all duration-300">
                Click Here!
              </Link>
            </div>
            {/* Parent Card */}
            <div className="bg-yellow-100 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Are you a Parent?</h3>
              <Image src="/images/parent.jpg" alt="Parents" width={200} height={200} className="mb-4 mx-auto rounded-full shadow-md" />
              <Link href="/parents" className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition-all duration-300">
                Click Here!
              </Link>
            </div>
          </div>
        </section>

        {/* Sustainability Section with animations */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Learn About Net-Zero & Sustainability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">What is Net-Zero?</h3>
              <p className="text-gray-700 mb-4">
                Net-zero refers to achieving a balance between the amount of greenhouse gases emitted into the atmosphere and the amount removed.
              </p>
              <Link href="/students/learn" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
                Learn More
              </Link>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Why Sustainability Matters?</h3>
              <p className="text-gray-700 mb-4">
                Sustainability ensures that we meet our present needs without compromising the ability of future generations to meet theirs.
              </p>
              <Link href="/students/learn" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300">
                Learn More
              </Link>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Renewable Energy</h3>
              <p className="text-gray-700 mb-10">
                Renewable energy comes from natural sources that are constantly replenished. Discover how they can power our future.
              </p>
              <Link href="/students/learn" className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Tips for Families */}
        <section className="mt-16 bg-teal-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">How Can Families Help?</h2>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
            <li>Encourage kids to reduce, reuse, and recycle materials to minimize waste.</li>
            <li>Make sorting activities fun to teach kids about the importance of recycling.</li>
            <li>Share EcoAcademy with friends and join the learning journey together.</li>
            <li>Plant trees with your family and support reforestation efforts.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
