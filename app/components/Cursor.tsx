"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  // mouse
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const cursorSize = 20;
  // smooth mouse
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, smoothOptions);
  const cursorYSpring = useSpring(cursorY, smoothOptions);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX - cursorSize / 2);
      cursorY.set(clientY - cursorSize / 2);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="cursor"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
      }}
    />
  );
}
