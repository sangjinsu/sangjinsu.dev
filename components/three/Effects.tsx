"use client";

import { EffectComposer, Bloom } from "@react-three/postprocessing";

interface EffectsProps {
  bloomIntensity: number;
}

export default function Effects({ bloomIntensity }: EffectsProps) {
  return (
    <EffectComposer>
      <Bloom
        intensity={bloomIntensity}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.025}
        mipmapBlur
      />
    </EffectComposer>
  );
}
