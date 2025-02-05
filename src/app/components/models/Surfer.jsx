"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MeshStandardMaterial } from 'three'

export default function Surfer(props) {
  const { nodes } = useGLTF('/models/silver_surfer.glb')
  const surferRef = useRef()

  useFrame((state) => {
    if (surferRef.current) {
      const t = state.clock.elapsedTime
      
      // Smooth vertical movement (up/down)
      surferRef.current.position.y = -0.5 + Math.sin(t * 1.2) * 0.2
      
      // Gentle side-to-side movement
      surferRef.current.position.x = Math.cos(t * 0.8) * 0.3
      
      // Slight rotation based on horizontal position
      surferRef.current.rotation.z = surferRef.current.position.x * 0.5
      
      // Subtle forward/backward tilt
      surferRef.current.rotation.x = Math.sin(t * 0.5) * 0.1
    }
  })

  // Shiny material remains the same
  const shinyMaterial = new MeshStandardMaterial({
    color: 0xB0B0B0,
    metalness: 1.1,
    roughness: 0.01,
  })

  return (
    <group {...props} dispose={null}>
      <group
        ref={surferRef}
        position={[0, -0.5, 0]}
        scale={[1.25, 1.25, 1.25]}
        rotation={[-.4, .4, -.2]}
      >
        {/* Meshes remain unchanged */}
        <group
          name="mesh_0_7"
          position={[0, -0.032, -0.093]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.017, 0.027, 0.006]}
        >
          <mesh geometry={nodes.Object_12.geometry} material={shinyMaterial} />
          <mesh geometry={nodes.Object_13.geometry} material={shinyMaterial} />
          <mesh geometry={nodes.Object_14.geometry} material={shinyMaterial} />
          <mesh geometry={nodes.Object_15.geometry} material={shinyMaterial} />
          <mesh geometry={nodes.Object_16.geometry} material={shinyMaterial} />
          <mesh geometry={nodes.Object_17.geometry} material={shinyMaterial} />
          <mesh geometry={nodes.Object_18.geometry} material={shinyMaterial} />
        </group>
        <mesh
          name="Object_4"
          geometry={nodes.Object_4.geometry}
          material={shinyMaterial}
          scale={0.01}
        />
        <mesh
          name="Object_6"
          geometry={nodes.Object_6.geometry}
          material={shinyMaterial}
          scale={0.01}
        />
        <mesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={shinyMaterial}
          scale={0.01}
        />
        <mesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={shinyMaterial}
          scale={0.01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/silver_surfer.glb')