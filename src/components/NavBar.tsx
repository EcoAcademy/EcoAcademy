'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface SearchResult {
  id: number;
  name: string;
  description: string;
}

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'teacher' | 'parent' | null>(null);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [resultsVisible, setResultsVisible] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isDashboardPage = pathname.startsWith('/students-dashboard') ||
                            pathname.startsWith('/teachers-dashboard') ||
                            pathname.startsWith('/parents-dashboard');

    setIsLoggedIn(isDashboardPage);
  }, [pathname]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery.trim()) {
        setLoading(true);
        const results = performSearch(searchQuery);
        setSearchResults(results);
        setLoading(false);
        setResultsVisible(true);
      } else {
        setSearchResults([]);
        setResultsVisible(false);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const performSearch = (query: string): SearchResult[] => {
    const data: SearchResult[] = [
      { id: 1, name: 'Green Games', description: 'Games for kids to learn about sustainability' },
      { id: 2, name: 'Project-Based Learning', description: 'Hands-on projects designed to enhance practical skills and real-world applications.' },
      { id: 3, name: 'Teacher Training Programs', description: 'Comprehensive training programs for educators to improve teaching methodologies.' },
      { id: 4, name: 'Parent Engagement Workshops', description: 'Workshops aimed at empowering parents to support their children’s education effectively.' },
      { id: 5, name: 'Student Success Stories', description: 'Highlighting achievements of students who have excelled through EcoAcademy’s programs.' },
    ];

    return data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleLogin = () => router.push('/login');
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    router.push('/');
  };

  const handleLoginSuccess = (role: 'student' | 'teacher' | 'parent') => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  return (
    <div className="relative">
      <nav className="bg-green-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/ecoacademy_logo.png"
              alt="EcoAcademy Logo"
              width={90}
              height={90}
              className="mr-3"
            />
            <Link href="/" className="text-green-400 text-3xl font-bold hover:text-green-500">
              EcoAcademy
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/students/play" className="text-green-400 hover:text-green-500 font-medium">Play</Link>
            <Link href="/students" className="text-green-400 hover:text-green-500 font-medium">Students</Link>
            <Link href="/teachers" className="text-green-400 hover:text-green-500 font-medium">Teachers</Link>
            <Link href="/parents" className="text-green-400 hover:text-green-500 font-medium">Parents</Link>
            <Link href="/about" className="text-green-400 hover:text-green-500 font-medium">About Us</Link>
          </div>
          <div className="md:flex items-center space-x-4">
            <form onSubmit={(e) => e.preventDefault()} className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-100 border border-gray-300"
                aria-label="Search"
              />
              <button
                type="button"
                onClick={() => setSearchQuery(searchQuery)}
                className="bg-white text-orange-500 px-4 py-2 rounded-full ml-2 hover:bg-gray-200 transition-colors duration-300"
              >
                Search
              </button>
            </form>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-white text-orange-500 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                aria-label="Logout"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="bg-white text-orange-500 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                  aria-label="Login"
                >
                  Login
                </button>
                <Link href="/signup">
                  <button
                    className="bg-white text-orange-500 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Sign Up"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
            <Link href="/students/play" className="text-white hover:text-gray-200 font-medium">Play</Link>
            <Link href="/students" className="text-white hover:text-gray-200 font-medium">Students</Link>
            <Link href="/teachers" className="text-white hover:text-gray-200 font-medium">Teachers</Link>
            <Link href="/parents" className="text-white hover:text-gray-200 font-medium">Parents</Link>
            <Link href="/about" className="text-green-400 hover:text-green-500 font-medium">About Us</Link>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center mt-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300 bg-gray-100 border border-gray-300"
                aria-label="Search"
              />
              <button
                type="button"
                onClick={() => setSearchQuery(searchQuery)}
                className="bg- text-green-500 px-4 py-2 rounded-full ml-2 hover:bg-gray-200 transition-colors duration-300"
              >
                Search
              </button>
            </form>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-black text-green-500 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                aria-label="Logout"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="bg-black text-green-500 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                  aria-label="Login"
                >
                  Login
                </button>
                <Link href="/signup">
                  <button
                    className="bg-black text-green-500 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Sign Up"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        )}
      </nav>

      {/* Search results */}
      {searchQuery && resultsVisible && (
        <div className="fixed top-16 right-0 bg-white p-4 rounded-lg shadow-lg w-80 max-h-screen overflow-y-auto z-50">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-bold">Search Results</h1>
            <button
              onClick={() => setResultsVisible(false)}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Hide results"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {searchResults.length ? (
                searchResults.map((result) => (
                  <li key={result.id} className="mb-2">
                    <Link href={`/details/${result.id}`} className="block p-2 border-b border-gray-300 hover:bg-gray-100 rounded">
                      <h2 className="font-semibold">{result.name}</h2>
                      <p>{result.description}</p>
                    </Link>
                  </li>
                ))
              ) : (
                <p>No results found.</p>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
