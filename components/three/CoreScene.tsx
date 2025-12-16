"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import Core from "./Core";
import Fragments from "./Fragments";
import InnerPulse from "./InnerPulse";
import Effects from "./Effects";
import { useAnimationState } from "@/hooks/useAnimationState";

export default function CoreScene() {
  const animationState = useAnimationState();

  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />

          <Core
            state={animationState.state}
            params={animationState.params}
            setThinking={animationState.setThinking}
            setIdle={animationState.setIdle}
            setDecision={animationState.setDecision}
          />
          <InnerPulse params={animationState.params} />
          <Fragments params={animationState.params} />

          <Effects bloomIntensity={animationState.params.bloomIntensity} />

          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
