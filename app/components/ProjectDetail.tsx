import React from "react";
import Image from "next/image";
import { inter } from "../styles/font";
import Link from "next/link";
import { ProjectData } from "../types";
import { motion } from "framer-motion";

export default function ProjectDetail({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  return (
    <Link
      key={index}
      target="_blank"
      rel="noreferrer noopener"
      href={`${project.url}`}
    >
      <div className="group p-4 rounded-lg transition hover:bg-test5 hover:drop-shadow-2xl flex mb-4">
        <motion.div
          className="flex w-full p-4"
          whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
        >
          <div
            className={`${inter.className} text-lg group-hover:text-red-300`}
          >
            <h3 className="text-xl">{project.name}</h3>
            <p className="text-test1 mt-2">{project.detail}</p>
            <div className="">
              <Image
                width={500}
                height={400}
                alt="thumbnail"
                loading="lazy"
                src={`/images/${project.preview}`}
                style={{ pointerEvents: "none" }}
                className="rounded transition border-gray-500 group-hover:border-gray-500 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
            <div
              className={`mt-4 flex flex-wrap gap-2 ${inter.className} text-sm`}
            >
              {project.stack?.map((tech: string, i: number) => (
                <div
                  key={i}
                  className="relative flex select-none items-center whitespace-nowrap rounded-lg bg-slate-900 py-0.5 px-2 text-sm text-test1"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
