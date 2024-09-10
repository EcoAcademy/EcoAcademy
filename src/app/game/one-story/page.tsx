'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolarPanel, faTree, faWater, faLeaf, faRecycle, faWind, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ThreeDHouse from '../../../components/ThreeDHouse';

library.add(faSolarPanel, faTree, faWater, faLeaf, faRecycle, faWind);

// Define a type for icon names
type IconName = 'solar-panel' | 'tree' | 'water' | 'leaf' | 'recycle' | 'wind';

// Map icon names to FontAwesome icons
const iconMap: Record<IconName, IconDefinition> = {
  'solar-panel': faSolarPanel,
  'tree': faTree,
  'water': faWater,
  'leaf': faLeaf,
  'recycle': faRecycle,
  'wind': faWind,
};

const items = [
  { id: 1, name: 'Solar Panel', icon: 'solar-panel' as IconName, points: 10 },
  { id: 2, name: 'Tree', icon: 'tree' as IconName, points: 5 },
  { id: 3, name: 'Rainwater Collector', icon: 'water' as IconName, points: 7 },
  { id: 4, name: 'Compost Bin', icon: 'leaf' as IconName, points: 8 },
  { id: 5, name: 'Recycling Bin', icon: 'recycle' as IconName, points: 6 },
  { id: 6, name: 'Wind Turbine', icon: 'wind' as IconName, points: 15 },
];

const DraggableItem = ({ item }: { item: typeof items[0] }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'item',
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef as unknown as React.Ref<HTMLDivElement>}
      style={{
        cursor: 'pointer',
        opacity: isDragging ? 0.5 : 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        border: '2px solid #FF9800',
        borderRadius: '8px',
        backgroundColor: '#F1F8E9',
        transition: 'transform 0.2s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <FontAwesomeIcon icon={iconMap[item.icon]} size="3x" />
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{item.name}</p>
      <p style={{ marginTop: '5px', color: '#757575' }}>+{item.points} points</p>
    </div>
  );
};

const SustainableHouseGame = () => {
  const [sustainabilityPoints, setSustainabilityPoints] = useState(0);
  const [usedItems, setUsedItems] = useState<number[]>([]);
  const [win, setWin] = useState(false);
  const [droppedItems, setDroppedItems] = useState<typeof items>([]);

  const handleDrop = (itemId: number) => {
    const item = items.find(item => item.id === itemId);
    if (item) {
      setSustainabilityPoints(prevPoints => {
        const newPoints = prevPoints + item.points;
        if (newPoints >= 50) setWin(true);
        return newPoints;
      });
      setDroppedItems(prevDropped => [...prevDropped, item]);
    }
  };

  const resetGame = () => {
    setSustainabilityPoints(0);
    setUsedItems([]);
    setWin(false);
    setDroppedItems([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h1 style={{ marginBottom: '20px', color: '#4CAF50', fontSize: '2.5em' }}>Sustainable House Game</h1>
        <div style={{ marginBottom: '20px', textAlign: 'center', width: '100%' }}>
          <ThreeDHouse onDrop={handleDrop} droppedItems={droppedItems} />
          <p style={{ fontSize: '1.5em', margin: '10px 0' }}>Sustainability Points: {sustainabilityPoints}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
          {items.map(item => (
            <DraggableItem key={item.id} item={item} />
          ))}
        </div>
        {win && (
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            backgroundColor: 'white', padding: '20px', border: '2px solid #4CAF50', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h2>Congratulations!</h2>
            <p>You made the house sustainable with {sustainabilityPoints} points!</p>
            <button onClick={resetGame} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

const DynamicSustainableHouseGame = dynamic(() => Promise.resolve(SustainableHouseGame), { ssr: false });

export default DynamicSustainableHouseGame;
