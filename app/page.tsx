"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import About from "@/components/About";
import DataProvider from "@/components/DataProvider";
import Paintings from "@/components/Paintings";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (
      e: React.MouseEvent<Element, MouseEvent> | MouseEvent
    ) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY + window.scrollY - 16); // Adjust for scroll position
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 text-white">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <div className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <DataProvider />
          <Paintings />
          <Footer />
        </div>
      </div>
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </div>
  );
}
