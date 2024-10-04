import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ModelBuilder = ({ path, animationSpeed = 1, ...props }) => {
  const { scene, animations } = useGLTF(path);
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.setEffectiveTimeScale(animationSpeed);
        action.play();
      });
    }
  }, [scene, animations, animationSpeed]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return scene ? <primitive object={scene} {...props} /> : null;
};

export default ModelBuilder;
