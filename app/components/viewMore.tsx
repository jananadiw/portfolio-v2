import React from "react";
import { inter, youngSerif, outfit } from "../styles/font";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type ViewProps = {
  text: string;
  type: string;
};

export default function ViewMore(props: ViewProps) {
  const { text, type } = props;

  const link =
    type === "work"
      ? "/resume.pdf"
      : type === "projects"
      ? "https://github.com/jananadiw"
      : "https://www.canvasconfetti.art/";

  return (
    <motion.div
      className="flex gap-2 inline-block font-bold items-center hover:text-red-300"
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
    >
      <p className={`text-xl font-extrabold ${outfit.className}`}>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </Link>
      </p>
      <ArrowUpRightIcon className="h-4 w-4 text-red-300" />
    </motion.div>
  );
}
