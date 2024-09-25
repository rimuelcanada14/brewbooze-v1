import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { USDZLoader } from 'three/examples/jsm/loaders/USDZLoader';
import { useFrame } from '@react-three/fiber';

const Shake = () => {
  let modelRef = React.useRef();

  useEffect(() => {
    const loader = new USDZLoader();
    loader.load('/GinFall.usdz', (model) => {
      modelRef.current.add(model);
    });
  }, []);

  return (
    <div className="loc-modal-content" style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <Canvas
        camera={{ position: [0, 0, 5], up: [0, 1, 0], near: 0.1, far: 1000 }}
        style={{ height: '100%', width: '100%', zIndex: 1, marginTop: '10em' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        
        <group ref={modelRef} /> {/* Create a group to hold the loaded model */}
        
        <OrbitControls
          enableZoom={true}
          minDistance={5}
          maxDistance={20}
          enablePan={true}
          target={[0, 1, 0]}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Shake;
