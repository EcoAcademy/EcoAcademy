'use client';
import React, { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const top10Countries = [
  "United States", "China", "India", "Brazil", "Russia", "Japan", "Germany", 
  "United Kingdom", "France", "Italy"
];

const mostPopulatedCountries = [
  "China", "India", "United States", "Indonesia", "Pakistan", "Brazil", "Nigeria", 
  "Bangladesh", "Russia", "Mexico"
];

const combinedCountries = Array.from(new Set([...top10Countries, ...mostPopulatedCountries, "Australia"])).sort();

const AddChildPage: NextPage = () => {
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [childGrade, setChildGrade] = useState('');
  const [childGender, setChildGender] = useState('');
  const [childCountry, setChildCountry] = useState('');
  const [childSchool, setChildSchool] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic to handle form submission, e.g., send data to an API
    alert(`Child added: 
      Name: ${childName}, 
      Age: ${childAge}, 
      Grade: ${childGrade}, 
      Gender: ${childGender}, 
      Country: ${childCountry},
      School: ${childSchool}`);
    setChildName('');
    setChildAge('');
    setChildGrade('');
    setChildGender('');
    setChildCountry('');
    setChildSchool('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">Add a Child</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="childName" className="block text-gray-700 font-semibold mb-2">Child&apos;s Name</label>
              <input
                type="text"
                id="childName"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="childAge" className="block text-gray-700 font-semibold mb-2">Child&apos;s Age</label>
              <input
                type="number"
                id="childAge"
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="childGrade" className="block text-gray-700 font-semibold mb-2">Child&apos;s Grade/Year</label>
              <input
                type="text"
                id="childGrade"
                value={childGrade}
                onChange={(e) => setChildGrade(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="childGender" className="block text-gray-700 font-semibold mb-2">Child&apos;s Gender</label>
              <select
                id="childGender"
                value={childGender}
                onChange={(e) => setChildGender(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="childCountry" className="block text-gray-700 font-semibold mb-2">Child&apos;s Country</label>
              <select
                id="childCountry"
                value={childCountry}
                onChange={(e) => setChildCountry(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="" disabled>Select country</option>
                {combinedCountries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="childSchool" className="block text-gray-700 font-semibold mb-2">Child&apos;s School</label>
              <input
                type="text"
                id="childSchool"
                value={childSchool}
                onChange={(e) => setChildSchool(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Child
            </button>
          </form>
        </div>
        <div className="text-center mt-8">
          <Link href="/parents" className="text-orange-500 hover:text-orange-700 font-semibold">
            Back to Parents Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddChildPage;
