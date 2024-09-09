import React, { useEffect, useState } from "react";
import Image from "next/image";
import { inter, youngSerif, outfit } from "../styles/font";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function PaintingsComponent() {
  return (
    <section
      id="paintings"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <motion.div
          className="rounded-xl overflow-hidden"
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        >
          <Image
            width={300}
            height={400}
            src={
              "https://janawcontent.s3.ap-northeast-2.amazonaws.com/1_Girl_and_her_coffee.jpg"
            }
            alt="artwork"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </motion.div>
        <motion.div
          className="rounded-xl overflow-hidden"
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        >
          <Image
            width={300}
            height={400}
            src={
              "https://janawcontent.s3.ap-northeast-2.amazonaws.com/6_Serenity_in_submersion.jpg"
            }
            alt="artwork2"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </motion.div>
        <motion.div
          className="rounded-xl overflow-hidden"
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        >
          <Image
            src={
              "https://janawcontent.s3.ap-northeast-2.amazonaws.com/8_Digital_reflections.jpg"
            }
            alt="artwork3"
            width={300}
            height={400}
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </motion.div>
        <motion.div
          className="rounded-xl overflow-hidden"
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        >
          <Image
            width={300}
            height={400}
            src={
              "https://janawcontent.s3.ap-northeast-2.amazonaws.com/2_Into_the_wild.jpg"
            }
            alt="artwork1"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </motion.div>
      </div>
      <motion.div
        className="mt-10 flex gap-2 inline-block font-bold items-center hover:text-orange-300"
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      >
        <p className={`text-lg ${outfit.className}`}>
          <Link
            href="https://www.canvasconfetti.art/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More Paintings
          </Link>
        </p>
        <ArrowUpRightIcon className="h-4 w-4 text-test" />
      </motion.div>
    </section>
  );
}
