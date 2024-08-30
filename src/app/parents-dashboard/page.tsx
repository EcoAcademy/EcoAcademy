"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ParentsPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check if router.query is defined
    if (router.query) {
      // Assuming the user's name is passed as a query parameter from the login page
      const name = router.query.name as string;
      if (name) {
        setUserName(name);
      }
    }
  }, [router.query]);

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-600">
          {userName ? `Welcome, ${userName}!` : "Welcome to the Parents Section"}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          At ArchAcademy, we believe that parents play a crucial role in their
          child's learning journey. Here, you can find resources and tools to
          help support your child's education and foster their curiosity about
          sustainability and net-zero.
        </p>
      </div>

      <nav className="mb-8 flex flex-col items-center space-y-4">
        <Link href="/parents/add-child">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-80 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg">
            Add a Child
          </button>
        </Link>
        <div className="flex justify-center space-x-4">
          <Link href="/parents/progress">
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500">
              Student Progress
            </button>
          </Link>
          <Link href="/parents-dashboard/resources">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
              Resources
            </button>
          </Link>
          <Link href="/parents/settings">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500">
              Settings
            </button>
          </Link>
          <Link href="/parents/support">
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500">
              Parental Controls
            </button>
          </Link>
          <Link href="/students/learn">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
              What Can You Learn
            </button>
          </Link>
        </div>
      </nav>

      <div className="bg-green-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-green-800">
          How You Can Support Your Child
        </h2>
        <p className="text-gray-700 mb-6">
          As a parent, you play a crucial role in your child's education. Here
          are some ways you can support your child's learning about net-zero and
          sustainability:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Encourage curiosity and ask questions about sustainability topics.</li>
          <li>Explore resources together and discuss what you've learned.</li>
          <li>Support hands-on projects that teach about renewable energy and conservation.</li>
          <li>Model sustainable practices at home, such as recycling and energy conservation.</li>
          <li>Stay informed about your child's progress and provide positive reinforcement.</li>
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
