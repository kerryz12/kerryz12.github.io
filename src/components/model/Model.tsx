/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 cube.gltf --types 
Author: tamminen (https://sketchfab.com/tamminen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mineral-cube-2f44574877094a53bc7f8e6ad5e31e5b
Title: Mineral Cube
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
  }
  materials: {
    dirt: THREE.MeshStandardMaterial
    crack: THREE.MeshPhysicalMaterial
  }
  //animations: GLTFAction[]
}

function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/cube.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.dirt} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.crack} />
    </group>
  )
}

useGLTF.preload('/cube.gltf')

export default Model;