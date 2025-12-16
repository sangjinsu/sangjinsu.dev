"use client";

import { useState, useCallback, useMemo } from "react";

export type AnimationState = "idle" | "thinking" | "decision";

export interface StateParams {
  coreRotationSpeed: number;
  fragmentOrbitScale: number;
  pulseIntensity: number;
  emissiveIntensity: number;
  bloomIntensity: number;
}

const STATE_PARAMS: Record<AnimationState, StateParams> = {
  idle: {
    coreRotationSpeed: 0.001,
    fragmentOrbitScale: 1.0,
    pulseIntensity: 0.1,
    emissiveIntensity: 0.05,
    bloomIntensity: 0.3,
  },
  thinking: {
    coreRotationSpeed: 0.0005,
    fragmentOrbitScale: 0.6,
    pulseIntensity: 0.5,
    emissiveIntensity: 0.2,
    bloomIntensity: 0.6,
  },
  decision: {
    coreRotationSpeed: 0.002,
    fragmentOrbitScale: 0.3,
    pulseIntensity: 1.0,
    emissiveIntensity: 0.5,
    bloomIntensity: 1.0,
  },
};

export interface AnimationStateReturn {
  state: AnimationState;
  params: StateParams;
  setThinking: () => void;
  setIdle: () => void;
  setDecision: () => void;
}

export function useAnimationState(): AnimationStateReturn {
  const [state, setState] = useState<AnimationState>("idle");

  const params = useMemo(() => STATE_PARAMS[state], [state]);

  const setThinking = useCallback(() => setState("thinking"), []);
  const setIdle = useCallback(() => setState("idle"), []);
  const setDecision = useCallback(() => {
    setState("decision");
    setTimeout(() => setState("idle"), 1000);
  }, []);

  return { state, params, setThinking, setIdle, setDecision };
}
