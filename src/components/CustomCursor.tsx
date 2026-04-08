"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -50, y: -50 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x - 6,
        top: pos.y - 6,
        width: 12,
        height: 12,
        backgroundColor: "#ffffff",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
