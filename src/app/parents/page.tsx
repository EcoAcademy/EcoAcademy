'use client';

import Link from 'next/link';

export default function ParentsPage() {
  return (
    <div className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Parents Section</h1>
        <p className="text-lg text-gray-700">
          Welcome to the Parents section of EcoAcademy! Here, you can find resources and tools to help support your child&apos;s learning journey.
        </p>
      </div>
      
      <nav className="mb-8 flex flex-col items-center space-y-4">
        <div className="flex justify-center space-x-4">
          <Link href="/parents/signup">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg">
              Sign up
            </button>
          </Link>
          <Link href="/parents/login">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
              Login
            </button>
          </Link>
          <Link href="/parents/resources">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Resources
            </button>
          </Link>
          <Link href="/students/learn">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
              What Can You Learn
            </button>
          </Link>
        </div>
      </nav>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">How You Can Support Your Child</h2>
        <p className="text-gray-700 mb-6">
          As a parent, you play a crucial role in your child&apos;s education. Here are some ways you can support your child&apos;s learning about net-zero and sustainability:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Encourage curiosity and ask questions about sustainability topics.</li>
          <li>Explore resources together and discuss what you&apos;ve learned.</li>
          <li>Support hands-on projects that teach about renewable energy and conservation.</li>
          <li>Model sustainable practices at home, such as recycling and energy conservation.</li>
          <li>Stay informed about your child&apos;s progress and provide positive reinforcement.</li>
        </ul>
        <Link href="/parents/resources">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-4">
            Explore More Resources
          </button>
        </Link>
      </div>
    </div>
  );
}
