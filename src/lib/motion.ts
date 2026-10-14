"use client";

import { useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function reducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Matches the motion tokens in globals.css. */
export const hoverEase = [0, 0, 0.2, 1] as const;

export const hoverDuration = 0.15;

export const panelDuration = 0.28;

export const panelTransition = {
  duration: panelDuration,
  ease: hoverEase,
};

/** Settle spring: short, low bounce, comes to rest. */
export const settleSpring = {
  type: "spring" as const,
  duration: 0.45,
  bounce: 0.18,
};

/** True when the person has asked for reduced motion. The press and step still finish, with no travel. */
export function usePrefersReducedMotion() {
  const fromMotion = useReducedMotion();
  const fromMedia = useSyncExternalStore(subscribeToReducedMotion, reducedMotionSnapshot, () => false);
  return Boolean(fromMotion) || fromMedia;
}
