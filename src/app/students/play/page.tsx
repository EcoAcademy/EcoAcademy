'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PlayPage: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const projects = [
    {
      name: "1-story House",
      imageSrc: "/58377-768.jpg",
      link: "game/one-story",
    },
    {
      name: "2-story House",
      imageSrc: "/2-storyhouse.jpg",
      link: "game/two-story",
    },
    {
      name: "Apartment",
      imageSrc: "/e290c270.webp",
      link: "game/apartment",
    },
  ];

  const miniGames = [
    {
      name: "Recycling Challenge",
      imageSrc: "/s-l1200.webp",
      link: "/game/Minigame1",
    },
    {
      name: "Energy Efficiency Maze",
      imageSrc: "/unknown",
      link: "/game/Minigame2",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Create a New Project Here!</h1>
      <p className="text-gray-700 mb-12 text-center">Select a property type to start redesigning it into a net-zero home:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition-transform transform ${hovered === project.name ? 'scale-105' : 'scale-100'}`}
            onMouseEnter={() => setHovered(project.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="w-full h-40 mb-4 relative">
              <Image
                src={project.imageSrc}
                alt={`${project.name} Thumbnail`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">{project.name}</h3>
            <Link href={project.link}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                Play Now
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Mini-Games Section */}
      <div className="mt-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Explore Mini-Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {miniGames.map((game) => (
            <div
              key={game.name}
              className={`bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition-transform transform ${hovered === game.name ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setHovered(game.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="w-full h-40 mb-4 relative">
                <Image
                  src={game.imageSrc}
                  alt={`${game.name} Thumbnail`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{game.name}</h3>
              <Link href={game.link}>
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  Play Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayPage;
