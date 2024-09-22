import React from "react";
import Image from "next/image";
import { outfit } from "../styles/font";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { ProjectData } from "../types";
import { motion } from "framer-motion";
import ViewMore from "./ViewMore";

export default function ProjectsComponent({
  projects,
}: {
  projects: ProjectData[];
}) {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      {projects.map((project: any, index: number) => (
        <Link
          key={index}
          target="_blank"
          rel="noreferrer noopener"
          href={`${project.url}`}
        >
          <div className="group p-4 rounded-lg transition hover:bg-test5 hover:drop-shadow-2xl flex mb-10">
            <motion.div
              className="flex w-full p-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            >
              <div
                className={`${outfit.className} ml-4 text-lg group-hover:text-red-300`}
              >
                <h3>{project.name}</h3>
                <p className="text-test1 mt-2">{project.detail}</p>
                <div className="">
                  <Image
                    width={500}
                    height={400}
                    alt="thumbnail"
                    src={`/images/${project.image}`}
                    className="rounded transition border-gray-500 group-hover:border-gray-500 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  />
                </div>
                <div
                  className={`mt-6 flex flex-wrap gap-4 ${outfit.className} text-sm`}
                >
                  {project.stack?.map((tech: string, i: number) => (
                    <div
                      key={i}
                      className="relative flex select-none items-center whitespace-nowrap rounded-lg bg-cyan-900 py-0.5 px-2 text-base text-green-100"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Link>
      ))}
      <ViewMore text={"See GitHub Profile"} type={"projects"} />
    </section>
  );
}
