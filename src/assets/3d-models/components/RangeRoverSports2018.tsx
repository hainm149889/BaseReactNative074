/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import {useGLTF} from '@react-three/drei/native';
import React from 'react';
import * as THREE from 'three';
import {GLTF} from 'three-stdlib';
import {Models3D} from '..';

type GLTFResult = GLTF & {
  nodes: {
    FL_Wheel: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane009_1: THREE.Mesh;
    Plane009_2: THREE.Mesh;
    Plane009_3: THREE.Mesh;
    Plane009_4: THREE.Mesh;
    Plane009_5: THREE.Mesh;
    Plane009_6: THREE.Mesh;
    Plane009_7: THREE.Mesh;
    Plane009_8: THREE.Mesh;
    Plane009_9: THREE.Mesh;
    Plane009_10: THREE.Mesh;
    Plane009_11: THREE.Mesh;
    Plane009_12: THREE.Mesh;
    Plane009_13: THREE.Mesh;
    BL_Wheel: THREE.Mesh;
    BR_Wheel: THREE.Mesh;
    FR_Wheel: THREE.Mesh;
    Plane019: THREE.Mesh;
    Plane019_1: THREE.Mesh;
    Plane019_2: THREE.Mesh;
    Plane021: THREE.Mesh;
    Plane021_1: THREE.Mesh;
    Plane021_2: THREE.Mesh;
  };
  materials: {
    Tyre: THREE.MeshPhysicalMaterial;
    ['Car Paint ']: THREE.MeshPhysicalMaterial;
    ['Plastic ']: THREE.MeshPhysicalMaterial;
    Glass: THREE.MeshStandardMaterial;
    ['Red Metal']: THREE.MeshPhysicalMaterial;
    Metalic: THREE.MeshPhysicalMaterial;
    Carbon: THREE.MeshStandardMaterial;
    Mirror: THREE.MeshPhysicalMaterial;
    ['Yellow Glass']: THREE.MeshPhysicalMaterial;
    ['Black Metal ']: THREE.MeshPhysicalMaterial;
    ['Head Light']: THREE.MeshPhysicalMaterial;
    ['Tail Light']: THREE.MeshPhysicalMaterial;
    ['Reflectors ']: THREE.MeshStandardMaterial;
    ['Trasnsparent Glass']: THREE.MeshPhysicalMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const {nodes, materials} = useGLTF(
    Models3D.range_rover_sports_2018,
  ) as GLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      position={[0, -1, -1]}
      scale={1}
      rotation={[0.123, -Math.PI / 1.5, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_Wheel.geometry}
        material={materials.Tyre}
        position={[1.607, 0.428, -1.171]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.621}
      />
      <group
        position={[0.922, 0.864, -0.334]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.621}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials['Car Paint ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_1.geometry}
          material={materials['Plastic ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_2.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_3.geometry}
          material={materials['Red Metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_4.geometry}
          material={materials.Metalic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_5.geometry}
          material={materials.Carbon}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_6.geometry}
          material={materials.Mirror}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_7.geometry}
          material={materials['Yellow Glass']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_8.geometry}
          material={materials['Black Metal ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_9.geometry}
          material={materials['Head Light']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_10.geometry}
          material={materials.Tyre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_11.geometry}
          material={materials['Tail Light']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_12.geometry}
          material={materials['Reflectors ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_13.geometry}
          material={materials['Trasnsparent Glass']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BL_Wheel.geometry}
        material={materials.Tyre}
        position={[-1.33, 0.428, -1.171]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.621}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_Wheel.geometry}
        material={materials.Tyre}
        position={[-1.33, 0.428, 0.506]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.621}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_Wheel.geometry}
        material={materials.Tyre}
        position={[1.607, 0.428, 0.506]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.621}
      />
      <group
        position={[1.607, 0.428, 0.506]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.621}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials.Tyre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_1.geometry}
          material={materials.Metalic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_2.geometry}
          material={materials['Black Metal ']}
        />
      </group>
      <group
        position={[1.607, 0.428, -1.171]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.621}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials.Metalic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_1.geometry}
          material={materials['Black Metal ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_2.geometry}
          material={materials.Tyre}
        />
      </group>
    </group>
  );
}

useGLTF.preload(Models3D.range_rover_sports_2018);
