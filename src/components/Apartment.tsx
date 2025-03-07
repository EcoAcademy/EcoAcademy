import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useDrop } from 'react-dnd';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';

// Define the type for the dropped item
interface DroppedItem {
  id: string;
  position: [number, number, number];
}

// Define the prop types for the Apartment component
interface ApartmentProps {
  onDrop: (itemId: string, position: [number, number, number]) => void;
  droppedItems: DroppedItem[];
}

const Apartment = ({ onDrop, droppedItems }: ApartmentProps) => {
  // Create refs
  const canvasRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const buildingBaseRef = useRef<Mesh>(null);
        
  // Use dropRef for react-dnd target
  const [{ isOver }, dropRef] = useDrop({
    accept: 'item',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset() || { x: 0, y: 0 };
      const canvasElement = canvasRef.current?.querySelector('canvas');
      const camera = cameraRef.current;
      const buildingBase = buildingBaseRef.current;

      if (canvasElement && camera && buildingBase) {
        const boundingRect = canvasElement.getBoundingClientRect();
        const x = (offset.x - boundingRect.left) / boundingRect.width * 2 - 1;
        const y = -(offset.y - boundingRect.top) / boundingRect.height * 2 + 1;
        const vector = new THREE.Vector3(x, y, 0.5);
        vector.unproject(camera);
        const ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        const intersects = ray.intersectObject(buildingBase);
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

  // Callback ref function for canvas
  const setRef = (node: HTMLDivElement | null) => {
    if (node) {
      dropRef(node);
      canvasRef.current = node;
    }
  };

  // Handle updates to refs in useEffect
  useEffect(() => {
    const canvasElement = canvasRef.current?.querySelector('canvas');
    const camera = cameraRef.current;
    const buildingBase = buildingBaseRef.current;

    if (canvasElement && camera && buildingBase) {
      // Perform any operations needed with refs here
    }
  }, [canvasRef.current, cameraRef.current, buildingBaseRef.current]);

  return (
    <div ref={setRef} style={{ position: 'relative' }}>
      <Canvas style={{ height: '400px', width: '100%' }} camera={{ position: [0, 10, 20], fov: 75 }} ref={cameraRef}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />

        {/* Building Base */}
        <mesh ref={buildingBaseRef} position={[0, 0, 0]}>
          <boxGeometry args={[6, 10, 6]} />
          <meshStandardMaterial color={'#DFAEAE'} />
        </mesh>

        {/* Roof */}
        <mesh position={[0, 10.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
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
        <mesh position={[-2, 2.5, 3.01]}>
          <boxGeometry args={[1, 1, 0.1]} />
          <meshStandardMaterial color={'#87ceeb'} />
        </mesh>
        <mesh position={[2, 2.5, 3.01]}>
          <boxGeometry args={[1, 1, 0.1]} />
          <meshStandardMaterial color={'#87ceeb'} />
        </mesh>

        {/* Door */}
        <mesh position={[0, 0.4, 3.01]}>
          <boxGeometry args={[1, 1.5, 0.1]} />
          <meshStandardMaterial color={'#A52A2A'} />
        </mesh>

        {/* Front Yard */}
        <mesh position={[0, -0.5, -6]}>
          <boxGeometry args={[6, 0.1, 6]} />
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

export default Apartment;
