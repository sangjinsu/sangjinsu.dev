"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, IcosahedronGeometry } from "three";
import { createNoise3D } from "simplex-noise";
import { AnimationState, StateParams } from "@/hooks/useAnimationState";

interface CoreProps {
  state: AnimationState;
  params: StateParams;
  setThinking: () => void;
  setIdle: () => void;
  setDecision: () => void;
}

const CORE_COLORS: Record<AnimationState, string> = {
  idle: "#1a1a2e",
  thinking: "#2d2d3a",
  decision: "#3b82f6",
};

export default function Core({
  state,
  params,
  setThinking,
  setIdle,
  setDecision,
}: CoreProps) {
  const meshRef = useRef<Mesh>(null);
  const noise3D = useMemo(() => createNoise3D(), []);

  const originalPositions = useMemo(() => {
    const geo = new IcosahedronGeometry(1, 4);
    return geo.attributes.position.array.slice();
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += params.coreRotationSpeed * delta * 60;
    meshRef.current.rotation.x += params.coreRotationSpeed * 0.5 * delta * 60;

    const positions = meshRef.current.geometry.attributes.position;
    const time = performance.now() * 0.0001;

    for (let i = 0; i < positions.count; i++) {
      const i3 = i * 3;
      const x = originalPositions[i3];
      const y = originalPositions[i3 + 1];
      const z = originalPositions[i3 + 2];

      const noiseValue = noise3D(x + time, y + time, z + time) * 0.1;
      const length = Math.sqrt(x * x + y * y + z * z);
      const scale = 1 + noiseValue;

      positions.array[i3] = (x / length) * scale;
      positions.array[i3 + 1] = (y / length) * scale;
      positions.array[i3 + 2] = (z / length) * scale;
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={setThinking}
      onPointerOut={setIdle}
      onClick={setDecision}
    >
      <icosahedronGeometry args={[1, 4]} />
      <meshStandardMaterial
        color={CORE_COLORS[state]}
        emissive={CORE_COLORS[state]}
        emissiveIntensity={params.emissiveIntensity}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}
