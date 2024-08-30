'use client';

import Link from 'next/link';
import React, { useState } from 'react';

interface Classroom {
  id: number;
  name: string;
  students: number;
}

export default function YourClassroomPage() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [newClassroom, setNewClassroom] = useState('');
  const [newStudent, setNewStudent] = useState('');
  const [error, setError] = useState('');

  const handleAddClassroom = () => {
    const trimmedName = newClassroom.trim();
    if (trimmedName) {
      const newId = classrooms.length + 1;
      setClassrooms([...classrooms, { id: newId, name: trimmedName, students: 0 }]);
      setNewClassroom('');
    } else {
      setError('Please enter a valid classroom name.');
    }
  };

  const handleAddStudent = (classroomId: number) => {
    const trimmedName = newStudent.trim();
    if (trimmedName) {
      setClassrooms(
        classrooms.map((classroom) =>
          classroom.id === classroomId
            ? { ...classroom, students: classroom.students + 1 }
            : classroom
        )
      );
      setNewStudent('');
    } else {
      setError('Please enter a valid student name.');
    }
  };

  const handleDeleteClassroom = (classroomId: number) => {
    if (window.confirm('Are you sure you want to delete this classroom?')) {
      setClassrooms(classrooms.filter((classroom) => classroom.id !== classroomId));
    }
  };

  const sortedClassrooms = [...classrooms].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Your Classroom</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Manage your classrooms and access resources for teaching net-zero and sustainability.
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Classrooms</h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-4 mr-4 w-full"
            placeholder="Enter new classroom name"
            value={newClassroom}
            onChange={(e) => setNewClassroom(e.target.value)}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleAddClassroom}
          >
            Add Classroom
          </button>
        </div>
        {sortedClassrooms.length > 0 ? (
          <ul className="space-y-4">
            {sortedClassrooms.map((classroom) => (
              <li
                key={classroom.id}
                className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{classroom.name}</h3>
                  <p className="text-gray-700">Students: {classroom.students}</p>
                </div>
                <div className="flex space-x-4">
                  <Link href={`/teachers/classroom/${classroom.id}`}>
                    <div className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                      View Classroom
                    </div>
                  </Link>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md py-2 px-4 mr-2"
                      placeholder="Add student"
                      value={newStudent}
                      onChange={(e) => setNewStudent(e.target.value)}
                    />
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      onClick={() => handleAddStudent(classroom.id)}
                    >
                      Add
                    </button>
                  </div>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => handleDeleteClassroom(classroom.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No classrooms added yet.</p>
        )}
      </div>
    </div>
  );
}
