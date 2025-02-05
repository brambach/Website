"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import clsx from "clsx";
import { Environment, SpotLight, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
      <Suspense fallback={null}>
        {/* Environment with a studio preset for high-quality reflections */}
        <Environment preset="studio"/>

        {/* Post-processing for enhanced visuals */}
        <EffectComposer>
          <ToneMapping mode={1} />
          <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.5} intensity={0.015} />
        </EffectComposer>

        {/* Enable camera control */}
        <OrbitControls enableZoom={false} />

        {children}
      </Suspense>
    </Canvas>
  );
};

export default RenderModel;
