import Link from 'next/link';

export default function TeachersPage() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Teachers</h1>
      <div className="mb-10 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the Teachers section of EcoAcademy! Here, you'll find resources and tools to help you teach students about net-zero and sustainability.
        </p>
        <p className="text-lg text-gray-700">
          Explore our curriculum resources, professional development opportunities, and community forum to enhance your teaching experience.
        </p>
      </div>

      <div className="flex justify-center space-x-6 mb-12">
        {/* <Link href="/teachers/login">
          <div className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
            Login
          </div>
        </Link> */}
        <div className="flex justify-center space-x-6 mb-12">
          <Link href="/students/learn">
            <div className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
              What Can You Learn
            </div>
          </Link>
          <Link href="/teachers/classroom">
            <div className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
              Your Classroom
            </div>
          </Link>        
          {/* <Link href="/students/learn">
            <div className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
        Sign up
            </div>
          </Link> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Curriculum Resources</h2>
          <p className="text-gray-700 mb-6">
            Explore a variety of curriculum resources that can help you integrate net-zero and sustainability topics into your lessons.
          </p>
          <Link href="/teachers/curriculum-resources">
            <div className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer text-center">
              Explore Resources
            </div>
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Professional Development</h2>
          <p className="text-gray-700 mb-6">
            Access professional development opportunities to enhance your understanding of sustainability and how to teach it effectively.
          </p>
          <Link href="/teachers/professional-development">
            <div className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer text-center">
              Learn More
            </div>
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Community Forum</h2>
          <p className="text-gray-700 mb-6">
            Join our community forum to connect with other teachers, share ideas, and discuss best practices for teaching net-zero and sustainability.
          </p>
          <Link href="/teachers/community-forum">
            <div className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer text-center">
              Join the Forum
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-indigo-100 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Featured Lesson Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <img src="/icons/lesson-plan-1.svg" alt="Lesson Plan 1" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Lesson Plan 1</h3>
            <p className="text-gray-700 mb-4">
              An introduction to the concept of net-zero emissions and why it is crucial for our planet.
            </p>
            <Link href="/teachers/lesson-plan-1">
              <div className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-center">
                View Lesson Plan
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <img src="/icons/lesson-plan-2.svg" alt="Lesson Plan 2" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Lesson Plan 2</h3>
            <p className="text-gray-700 mb-4">
              A hands-on activity to teach students about renewable energy sources and their benefits.
            </p>
            <Link href="/teachers/lesson-plan-2">
              <div className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer text-center">
                View Lesson Plan
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <img src="/icons/lesson-plan-3.svg" alt="Lesson Plan 3" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Lesson Plan 3</h3>
            <p className="text-gray-700 mb-4">
              An exploration of sustainable living practices and how students can make a difference.
            </p>
            <Link href="/teachers/lesson-plan-3">
              <div className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer text-center">
                View Lesson Plan
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
