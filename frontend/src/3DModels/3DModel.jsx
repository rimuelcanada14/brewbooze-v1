import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelBuilder from './ModelBuilder.jsx';

const Model3d = () => {
  return (
    <div className="loc-modal-Model3d">
        <Canvas
          camera={{ position: [0, 0, 5], up: [0, 1, 0], near: 0.1, far: 1000 }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[1, 1, 1]} />
          
          <ModelBuilder path="/Model3d.glb" position={[0, 0, 0]} />
          
          <OrbitControls
            enableZoom={true}
            minDistance={20}
            maxDistance={30}
            enablePan={true}
            target={[0, 1, 0]} 
            maxPolarAngle={Math.PI / 2} 
          />
        </Canvas>
    </div>
  );
};

export default Model3d;