import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import model from '../../3Dassets/plantBud.glb';

export default function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useLoader(GLTFLoader, model)
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={[0.02, 0.02, 0.02]} position={[0, -10, 0]}>
          <mesh geometry={nodes.Scene001.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Scene001_1.geometry} material={materials['Material.001']} />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('/plantBud.glb')