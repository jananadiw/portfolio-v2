import React, { useEffect, useState, use, useCallback } from "react";
import Image from "next/image";
import { outfit } from "../styles/font";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { Project } from "../interfaces/index";
import { Loading } from "../components/Loading";

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
          <div
            key={index}
            className="p-4 rounded-md transition hover:bg-test5 hover:drop-shadow flex mb-10"
          >
            <div className="w-1/4">
              <Image
                width={100}
                height={113}
                alt="thumbnail"
                src={project.image}
              />
            </div>
            <div className={`${outfit.className} w-3/4 ml-4 text-lg`}>
              <h3>{project.name}</h3>
              <p className="text-test1 mt-2">{project.detail}</p>
            </div>
          </div>
        ))
      )}
      <div className="flex gap-2 inline-block items-center">
        <p className={`text-lg font-extrabold	 ${outfit.className} `}>
          <Link
            href="https://github.com/jananadiw"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Github Profile{" "}
          </Link>
        </p>
        <ArrowSmallRightIcon className="h-4 w-4 text-test" />
      </div>
    </section>
  );
}
