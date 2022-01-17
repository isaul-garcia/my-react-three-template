import React, {  Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import PlantModel from "./PlantModel"

const CameraController = () => {
   const { camera, gl } = useThree();
   useEffect(
      () => {
         const controls = new OrbitControls(camera, gl.domElement);
         controls.minDistance = 3;
         controls.maxDistance = 20;
         controls.maxPolarAngle = Math.PI/2;
         controls.enablePan = false;
         controls.enableZoom = false;
         return () => {
           controls.dispose();
         };
      },
      [camera, gl]
   );
   return null;
};

function MyCanvas()  {
    return (
      <>
        <Canvas orthographic dpr={[0.1, 0.8]} camera={{ zoom: 10, position: [1, 10, 20] }} >
          <CameraController />
          <ambientLight intensity={0.5} />
          <spotLight intensity={0.4} position={[5,20,20]}/>
          <spotLight intensity={0.4} position={[-50,50,-50]}/>
          <spotLight intensity={0.4} position={[-50,50,-50]}/>
          <Suspense fallback={null}>
            <PlantModel />
          </Suspense>
        </Canvas>
      </>
    );
  }
  
export default MyCanvas