import React, { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { USDZLoader } from 'three-usdz-loader';

const ModelBuilder = ({ path, position }) => {
  const groupRef = useRef();

  useEffect(() => {
    const loader = new USDZLoader();
    loader.load(path, (usdz) => {
      groupRef.current.add(usdz);
    });
  }, [path]);

  return <group ref={groupRef} position={position} />;
};

export default ModelBuilder;
