'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faPlus } from '@fortawesome/free-solid-svg-icons';

type Project = {
  id: number;
  name: string;
  description: string;
};

export default function StudentProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = () => {
    if (newProjectName.trim() !== '') {
      const newProject: Project = {
        id: projects.length + 1,
        name: newProjectName,
        description: '',
      };
      setProjects([...projects, newProject]);
      setNewProjectName('');
    }
  };

  const handleCreateNew = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/play'; // Navigate to '/play'
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Projects</h1>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              placeholder="Enter new project name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddProject}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ml-2"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          {projects.length === 0 ? (
            <div className="text-center text-gray-600 mb-4">
              You don&apos;t have any projects.
            </div>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-200 p-4 rounded-md mb-2 flex items-center justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold">{project.name}</h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  <FontAwesomeIcon icon={faFolderOpen} />
                </button>
              </div>
            ))
          )}
          <button
            onClick={handleCreateNew}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
          >
            Create New
          </button>
        </div>
      </div>
    </div>
  );
}
