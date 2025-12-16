"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PointLight } from "three";
import { StateParams } from "@/hooks/useAnimationState";

interface InnerPulseProps {
  params: StateParams;
}

export default function InnerPulse({ params }: InnerPulseProps) {
  const lightRef = useRef<PointLight>(null);

  useFrame((state) => {
    if (!lightRef.current) return;
    const time = state.clock.elapsedTime;
    const pulse = (Math.sin(time * 2) * 0.5 + 0.5) * params.pulseIntensity;
    lightRef.current.intensity = pulse;
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 0]}
      color="#3b82f6"
      intensity={0.1}
      distance={3}
      decay={2}
    />
  );
}
