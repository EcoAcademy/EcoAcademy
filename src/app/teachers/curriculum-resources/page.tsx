"use client";

import React from 'react';
import Link from 'next/link';

const ExploreResourcesPage: React.FC = () => {
  return (
    <div className="bg-blue-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Explore Resources for Teachers</h1>
          <p className="text-lg text-gray-800">
            Find a wealth of resources to enhance your teaching and inspire your students. Explore lesson plans, activities, and useful tools to make learning engaging and fun.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-around mb-12">
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4">
              <div className="bg-blue-200 rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                <h2 className="text-2xl font-semibold mb-2 text-center text-blue-800">Lesson Plans</h2>
                <p className="text-gray-700 mb-4 text-center">
                  Discover a variety of lesson plans that cater to different subjects and grade levels. Engage your students with creative and effective teaching strategies.
                </p>
                <Link href="/resources/lesson-plans">
                  <span className="text-blue-500 hover:underline cursor-pointer block text-center">Explore Lesson Plans</span>
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4">
              <div className="bg-blue-200 rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                <h2 className="text-2xl font-semibold mb-2 text-center text-blue-800">Activities</h2>
                <p className="text-gray-700 mb-4 text-center">
                  Find engaging activities that will help make learning interactive and enjoyable for your students. From science experiments to creative writing exercises.
                </p>
                <Link href="/resources/activities">
                  <span className="text-blue-500 hover:underline cursor-pointer block text-center">Explore Activities</span>
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4">
              <div className="bg-blue-200 rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                <h2 className="text-2xl font-semibold mb-2 text-center text-blue-800">Useful Tools</h2>
                <p className="text-gray-700 mb-4 text-center">
                  Access a collection of useful tools and apps designed to support your teaching and enhance classroom experiences.
                </p>
                <Link href="/resources/tools">
                  <span className="text-blue-500 hover:underline cursor-pointer block text-center">Explore Tools</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreResourcesPage;
