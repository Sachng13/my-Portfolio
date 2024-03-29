"use client"

import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from "@/components/Loader"

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={3}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

 const BallCanvas = ({ icon }) => {
    useEffect(()=>{
        console.log(icon)
    },[])
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} position0={0} />
        <Ball imgUrl={icon.src} />
      </Suspense>
{/*       <Preload all /> */}
    </Canvas>
  );
};

export default BallCanvas
