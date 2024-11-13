"use client";

import About from "@/components/About";
import DataProvider from "@/components/DataProvider";
import Paintings from "@/components/Paintings";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import Cursor from "@/components/Cursor";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Background>
          <Cursor />
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
          </div>
        </Background>
      </motion.div>
    </AnimatePresence>
  );
}
