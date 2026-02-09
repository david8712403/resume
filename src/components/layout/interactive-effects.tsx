"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface ClickText {
  id: number;
  x: number;
  y: number;
}

const RIPPLE_DURATION_MS = 900;
const CLICK_TEXT_CONTENT = "> click";
const CLICK_TEXT_DURATION_MS = 760;

export function InteractiveEffects() {
  const prefersReducedMotion = useReducedMotion();
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [clickTexts, setClickTexts] = useState<ClickText[]>([]);
  const idCounterRef = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const root = document.documentElement;
    let rafId = 0;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animateGlow = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      root.style.setProperty("--pointer-x", `${currentX}px`);
      root.style.setProperty("--pointer-y", `${currentY}px`);

      rafId = window.requestAnimationFrame(animateGlow);
    };

    rafId = window.requestAnimationFrame(animateGlow);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      root.style.removeProperty("--pointer-x");
      root.style.removeProperty("--pointer-y");
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      const id = ++idCounterRef.current;
      const viewportRadius = Math.max(window.innerWidth, window.innerHeight);
      const size = Math.max(220, Math.min(420, viewportRadius * 0.22));

      setRipples((prev) => [...prev.slice(-5), { id, x: event.clientX, y: event.clientY, size }]);
      setClickTexts((prev) => [...prev.slice(-5), { id, x: event.clientX, y: event.clientY }]);

      window.setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      }, RIPPLE_DURATION_MS);

      window.setTimeout(() => {
        setClickTexts((prev) => prev.filter((item) => item.id !== id));
      }, CLICK_TEXT_DURATION_MS);
    };

    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [prefersReducedMotion]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(340px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(196, 181, 253, 0.19), transparent 72%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(220px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(216, 180, 254, 0.2), transparent 72%)",
          filter: "blur(16px)",
        }}
      />

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="interactive-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}

      {clickTexts.map((text) => (
        <span
          key={text.id}
          className="interactive-click-text"
          style={{
            left: text.x,
            top: text.y,
          }}
        >
          {CLICK_TEXT_CONTENT}
        </span>
      ))}
    </div>
  );
}
