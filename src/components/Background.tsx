"use client";

import { useRef, useCallback, useEffect, useState } from "react";

export default function Background() {
  const dotsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    if (dotsRef.current) {
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;
      dotsRef.current.style.transform = `translate(${dx * -12}px, ${dy * -12}px)`;
    }

    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${clientX - 300}px, ${clientY - 300}px)`;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (glowRef.current) {
      glowRef.current.classList.add("bg-grid__glow--visible");
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) {
      glowRef.current.classList.remove("bg-grid__glow--visible");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mounted, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  if (!mounted) return null;

  return (
    <div className="bg-grid" aria-hidden="true">
      <div className="bg-grid__dots" ref={dotsRef} />
      <div className="bg-grid__glow" ref={glowRef} />
    </div>
  );
}
