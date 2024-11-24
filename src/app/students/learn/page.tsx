"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Quiz from '../../../components/Quiz'; // Import the Quiz component
import FAQComponent from '../../../components/FAQ'; // Import the FAQComponent
import FunFactsComponent from '../../../components/FunFacts'; // Import the FunFactsComponent

const LearnPage: React.FC = () => {
  const [showKeyConcepts, setShowKeyConcepts] = useState<boolean>(false);
  const [showWhyMatters, setShowWhyMatters] = useState<boolean>(false);
  const [showTakingAction, setShowTakingAction] = useState<boolean>(false);

  return (
    <div className="bg-green-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-green-600">Explore Sustainability!</h1>
          <p className="text-lg text-gray-800">
            Welcome to the world of sustainability! Discover how we can protect our planet.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-around mb-12">
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4">
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                <h2 className="text-2xl font-semibold mb-2 text-center text-blue-600">Solar Panels</h2>
                <img src="/images/MIT-PPA-1-Press_solar_array_3.jpg" alt="Solar Panels" className="mb-4 rounded-lg shadow-md mx-auto" />
                <p className="text-gray-700 mb-4 text-center">
                  Solar panels are like magic! They capture sunlight and turn it into clean, renewable energy. Did you know that a typical solar panel can generate enough electricity to power a light bulb for hours?
                </p>
                <Link href="/students/play">
                  <span className="text-blue-500 hover:underline cursor-pointer block text-center">Learn More</span>
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4 relative">
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                <h2 className="text-2xl font-semibold mb-2 text-center text-yellow-600">Home Batteries</h2>
                <img src="/images/download.jpeg" alt="Home Batteries" className="mb-4 rounded-lg shadow-md mx-auto" />
                <p className="text-gray-700 mb-4 text-center">
                  Home batteries save the day! They store energy from solar panels and keep your home powered up, even during blackouts. Imagine never having to worry about running out of power!
                </p>
                <Link href="/students/play">
                  <span className="text-blue-500 hover:underline cursor-pointer block text-center">Learn More</span>
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4">
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                <h2 className="text-2xl font-semibold mb-2 text-center text-purple-600">Passive houses</h2>
                <img src="/images/Passivehouse-Balgowlah-Hao-Quan-Cai-640x686.jpg" alt="Eco-friendly Buildings" className="mb-4 rounded-lg shadow-md mx-auto" />
                <p className="text-gray-700 mb-4 text-center">
                  Passive houses are superheroes! They use clever designs to save energy and keep the planet smiling. Fun fact: Some passive houses generate more energy than they use, sending the extra back to the grid!
                </p>
                <Link href="/students/play">
                  <span className="text-blue-500 hover:underline cursor-pointer block text-center">Learn More</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full text-xl font-semibold mb-4 w-full text-left"
              onClick={() => setShowKeyConcepts(!showKeyConcepts)}
            >
              Key Concepts of Sustainability:
            </button>
            {showKeyConcepts && (
              <div className="text-gray-700">
                <h3 className="text-xl mb-2">Conserving Resources:</h3>
                <p>
                  Earth has limited resources like water, forests, and minerals. Sustainability means using these resources in a way that doesn’t use them up too quickly or damage the environment.
                </p>
                <h3 className="text-xl mb-2 mt-4">Protecting Biodiversity:</h3>
                <p>
                  Biodiversity refers to the variety of life on Earth, including plants, animals, and ecosystems. Sustainable practices aim to protect and preserve this diversity.
                </p>
                <h3 className="text-xl mb-2 mt-4">Reducing Waste and Pollution:</h3>
                <p>
                  Waste and pollution harm the environment and can affect human and other living things health. Sustainability involves reducing waste, recycling materials, and finding cleaner ways to produce energy.
                </p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-full text-xl font-semibold mb-4 w-full text-left"
              onClick={() => setShowWhyMatters(!showWhyMatters)}
            >
              Why Sustainability Matters:
            </button>
            {showWhyMatters && (
              <div className="text-gray-700">
                <p>
                  Sustainability ensures that future generations can enjoy a healthy environment with clean air, water, and natural resources. It also addresses global environmental issues like climate change that affect everyone.
                </p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full text-xl font-semibold mb-4 w-full text-left"
              onClick={() => setShowTakingAction(!showTakingAction)}
            >
              Taking Action:
            </button>
            {showTakingAction && (
              <div className="text-gray-700">
                <h3 className="text-xl mb-2">Education and Awareness:</h3>
                <p>
                  Learning about sustainability and sharing knowledge with others helps promote positive change.
                </p>
                <h3 className="text-xl mb-2 mt-4">Community Involvement:</h3>
                <p>
                  Participating in environmental initiatives, recycling programs, and conservation efforts strengthens sustainability efforts locally and globally.
                </p>
                <h3 className="text-xl mb-2 mt-4">Advocacy:</h3>
                <p>
                  Supporting policies and practices that promote sustainability and environmental protection can influence broader societal changes.
                </p>
              </div>
            )}
          </div>



          {/* Include the Quiz component */}
          <div className="text-center mb-8 mt-12">
            <Quiz />
          </div>

          {/* Include the FAQComponent */}
          <div className="mt-8">
            <FAQComponent />
          </div>

          <div className="mt-12">
            <FunFactsComponent />
          </div>

          <div className="text-gray-800 text-center mt-8">
            <p className="text-lg mb-4">
              Ready to be a sustainability champion? Explore, learn, and make a difference for our planet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnPage;
