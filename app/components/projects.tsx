import React, { useEffect, useState, use, useCallback } from "react";
import Image from "next/image";
import { outfit } from "../styles/font";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Project } from "../interfaces/index";
import { Loading } from "../components/loading";
import ArticlesComponent from "../components/articles";
import { motion } from "framer-motion";

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
      return data as Project[]; // Assuming your data is an array of projects
    } catch (error) {}
    setLoading(false);
    return [] as Project[];
  }, []);

  useEffect(() => {
    getData().then((data) => setProjects(data));
  }, []);

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
            <motion.div
              className="group p-4 rounded-lg transition hover:bg-test5 hover:drop-shadow-2xl flex mb-10"
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            >
              <div className="w-1/4">
                <Image
                  width={100}
                  height={113}
                  alt="thumbnail"
                  src={`/images/${project.image}`}
                  className="rounded transition border-gray-500 group-hover:border-gray-500 sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
              </div>
              <div
                className={`${outfit.className} w-3/4 ml-4 text-lg group-hover:text-orange-600`}
              >
                <h3>{project.name}</h3>
                <p className="text-test1 mt-2">{project.detail}</p>
                <div
                  className={`mt-6 flex flex-wrap gap-4 ${outfit.className} text-sm`}
                >
                  {project.stack?.map((tech: string, i: number) => (
                    <div
                      key={i}
                      className="relative flex select-none items-center whitespace-nowrap rounded-lg bg-slate-600 py-0.5 px-2 text-sm text-green-100"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        ))
      )}
      <motion.div
        className="flex gap-2 inline-block font-bold items-center hover:text-orange-300"
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      >
        <p className={`text-lg font-extrabold ${outfit.className}`}>
          <Link
            href="https://github.com/jananadiw"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Github Profile
          </Link>
        </p>
        <ArrowUpRightIcon className="h-4 w-4 text-test" />
      </motion.div>
      <div className="mt-16">
        <ArticlesComponent />
      </div>
    </section>
  );
}
