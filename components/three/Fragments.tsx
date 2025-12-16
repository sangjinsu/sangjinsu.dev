"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";
import { StateParams } from "@/hooks/useAnimationState";

interface FragmentConfig {
  id: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitTilt: number;
  phase: number;
  scale: number;
}

interface FragmentsProps {
  params: StateParams;
}

export default function Fragments({ params }: FragmentsProps) {
  const groupRef = useRef<Group>(null);
  const fragmentRefs = useRef<(Mesh | null)[]>([]);

  const fragmentConfigs: FragmentConfig[] = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      orbitRadius: 1.5 + Math.random() * 0.5,
      orbitSpeed: 0.3 + Math.random() * 0.2,
      orbitTilt: (Math.random() - 0.5) * Math.PI * 0.3,
      phase: (i / 6) * Math.PI * 2,
      scale: 0.05 + Math.random() * 0.05,
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    fragmentRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const config = fragmentConfigs[i];
      const radius = config.orbitRadius * params.fragmentOrbitScale;

      mesh.position.x =
        Math.cos(time * config.orbitSpeed + config.phase) * radius;
      mesh.position.z =
        Math.sin(time * config.orbitSpeed + config.phase) * radius;
      mesh.position.y =
        Math.sin(time * config.orbitSpeed * 0.5 + config.phase) *
        config.orbitTilt;

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;
    });
  });

  return (
    <group ref={groupRef}>
      {fragmentConfigs.map((config, i) => (
        <mesh
          key={config.id}
          ref={(el) => {
            fragmentRefs.current[i] = el;
          }}
          scale={config.scale}
        >
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.3}
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}
