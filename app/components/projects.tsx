import React, { useEffect, useState, use, useCallback } from "react";
import Image from "next/image";
import { outfit } from "../styles/font";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Project } from "../types";
import { Loading } from "./loading";
import ArticlesComponent from "./articles";
import { motion } from "framer-motion";
import ViewMore from "./viewMore";

export default function ProjectsComponent() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://json-portfolio-data.vercel.app/project"
      );

      const data = await response.json();
      setLoading(false);
      return data as Project[];
    } catch (error) {}
    setLoading(false);
    return [] as Project[];
  }, []);

  useEffect(() => {
    getData().then((data) => setProjects(data));
  }, [getData]);

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      {loading ? (
        <Loading componentName="projects" />
      ) : (
        projects.map((project: any, index: number) => (
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
                  className={`${outfit.className} text-lg group-hover:text-red-300`}
                >
                  <h3>{project.name}</h3>
                  <p className="text-test1 my-2">{project.detail}</p>
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
        ))
      )}
      <ViewMore text={"See GitHub Profile"} type={"projects"} />
      <div className="mt-16">
        <ArticlesComponent />
      </div>
    </section>
  );
}
