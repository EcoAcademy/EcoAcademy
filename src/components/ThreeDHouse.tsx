import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useDrop } from 'react-dnd';
import { useState, useRef } from 'react';
import * as THREE from 'three';

const ThreeDHouse = ({ onDrop, droppedItems }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: 'item',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const canvas = dropRef.current;
      if (canvas) {
        const boundingRect = canvas.getBoundingClientRect();
        const x = (offset.x - boundingRect.left) / boundingRect.width * 2 - 1;
        const y = -(offset.y - boundingRect.top) / boundingRect.height * 2 + 1;
        const vector = new THREE.Vector3(x, y, 0.5);
        vector.unproject(camera);
        const ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        const intersects = ray.intersectObject(houseBase);
        if (intersects.length > 0) {
          const position = intersects[0].point;
          onDrop(item.id, [position.x, position.y, position.z]);
        }
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const camera = useRef();
  const houseBase = useRef();

  return (
    <div ref={dropRef} style={{ position: 'relative' }}>
      <Canvas style={{ height: '400px', width: '100%' }} camera={{ position: [0, 5, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        
        {/* House Base */}
        <mesh ref={houseBase} position={[0, 0, 0]}>
          <boxGeometry args={[4, 2.5, 4]} />
          <meshStandardMaterial color={'#DFAEAE'} />
        </mesh>

        {/* Roof */}
        <mesh position={[0, 2.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <polyhedronGeometry
            args={[
              // Vertices
              [
                [0, 0, 0],
                [1, 0, 0],
                [0.5, Math.sqrt(3) / 2, 0],
                [0.5, Math.sqrt(3) / 6, Math.sqrt(2 / 3)],
                [0.5, Math.sqrt(3) / 6, -Math.sqrt(2 / 3)],
              ],
              // Faces
              [
                [0, 1, 2],
                [0, 2, 3],
                [0, 3, 4],
                [1, 2, 3],
                [1, 3, 4],
                [2, 4, 3],
              ],
            ]}
          />
          <meshStandardMaterial color={'#ff8c00'} />
        </mesh>

        {/* Windows */}
        <mesh position={[-1.2, 0.5, 2.01]}>
          <boxGeometry args={[1, 1, 0.1]} />
          <meshStandardMaterial color={'#87ceeb'} />
        </mesh>
        <mesh position={[1.2, 0.5, 2.01]}>
          <boxGeometry args={[1, 1, 0.1]} />
          <meshStandardMaterial color={'#87ceeb'} />
        </mesh>

        {/* Door */}
        <mesh position={[0, 0.4, 2.01]}>
          <boxGeometry args={[1, 1.5, 0.1]} />
          <meshStandardMaterial color={'#A52A2A'} />
        </mesh>

        {/* Front Porch */}
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[4, 0.1, 5]} />
          <meshStandardMaterial color={'#A52A2A'} />
        </mesh>

        {/* Front Yard */}
        <mesh position={[0, -0.5, -4]}>
          <boxGeometry args={[4, 0.1, 4]} />
          <meshStandardMaterial color={'#228B22'} />
        </mesh>

        {/* Display dropped items */}
        {droppedItems.map((item, index) => (
          <mesh key={index} position={item.position}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color={'#00ff00'} />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
};

export default ThreeDHouse;
