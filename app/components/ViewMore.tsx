import React from "react";
import { inter } from "../styles/font";
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
      className="flex gap-2 inline-block text-test1 font-bold items-center hover:text-red-300"
      whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
    >
      <p className={`text-xl font-bold ${inter.className}`}>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </Link>
      </p>
      <ArrowUpRightIcon className="h-4 w-4 text-red-300" />
    </motion.div>
  );
}
