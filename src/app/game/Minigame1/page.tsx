'use client';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag, useDrop } from 'react-dnd';

type WasteType = 'recycle' | 'organic' | 'trash';

interface ItemType {
  id: number;
  name: string;
  type: WasteType;
}

const initialItems: ItemType[] = [
  { id: 1, name: 'Apple Core', type: 'organic' },
  { id: 2, name: 'Plastic Bottle', type: 'recycle' },
  { id: 3, name: 'Paper', type: 'recycle' },
  { id: 4, name: 'Banana Peel', type: 'organic' },
  { id: 5, name: 'Styrofoam Cup', type: 'trash' }
];

const Item: React.FC<{ item: ItemType }> = ({ item }) => {
  const [, dragRef] = useDrag({
    type: 'item',
    item: { id: item.id, type: item.type }
  });

  return (
    <div
      ref={dragRef}
      style={{
        border: '2px solid #4CAF50',
        padding: '10px',
        margin: '8px',
        borderRadius: '8px',
        backgroundColor: '#F1F8E9',
        cursor: 'grab',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
      }}
      onDragStart={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onDragEnd={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {item.name}
    </div>
  );
};

const Bin: React.FC<{ type: WasteType; onDrop: (item: ItemType, correct: boolean) => void }> = ({ type, onDrop }) => {
  const [, dropRef] = useDrop({
    accept: 'item',
    drop: (item: ItemType) => onDrop(item, item.type === type),
    canDrop: (item: ItemType) => item.type === type,
  });

  const binColors = {
    recycle: '#2196F3',
    organic: '#4CAF50',
    trash: '#FF5722',
  };

  return (
    <div
      ref={dropRef}
      style={{
        border: `3px solid ${binColors[type]}`,
        padding: '20px',
        margin: '16px',
        borderRadius: '12px',
        backgroundColor: '#FAFAFA',
        textAlign: 'center',
        minWidth: '150px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)} Bin
    </div>
  );
};

const RecyclingChallenge = () => {
  const [items, setItems] = useState(initialItems);
  const [incorrectItems, setIncorrectItems] = useState<number[]>([]);
  const [sortedCorrectly, setSortedCorrectly] = useState(false);

  const handleDrop = (item: ItemType, correct: boolean) => {
    if (correct) {
      setItems(prevItems => prevItems.filter(i => i.id !== item.id));
    } else {
      setIncorrectItems(prevItems => [...prevItems, item.id]);
    }
  };

  const handleReset = () => {
    setItems(initialItems);
    setIncorrectItems([]);
    setSortedCorrectly(false);
  };

  if (items.length === 0 && !sortedCorrectly) {
    setSortedCorrectly(true);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h1 style={{ marginBottom: '20px', color: '#4CAF50', fontSize: '2.5em' }}>Recycling Challenge</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          {items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <Bin type="recycle" onDrop={handleDrop} />
          <Bin type="organic" onDrop={handleDrop} />
          <Bin type="trash" onDrop={handleDrop} />
        </div>
        {incorrectItems.length > 0 && (
          <div style={{ color: 'red', marginTop: '20px' }}>
            Some items were placed incorrectly! Try again.
          </div>
        )}
        {sortedCorrectly && (
          <div style={{ color: 'green', marginTop: '20px' }}>
            Congratulations! You sorted all items correctly.
            <button onClick={handleReset} style={{ marginLeft: '20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: '#FFF', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default RecyclingChallenge;
