import React, { useEffect, useState, use, useCallback } from "react";
import Image from "next/image";
import { inter, youngSerif } from "../font";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import mediumThumbnail from "../../public/images/article.jpg";
import { Project } from "../interfaces/index";

export default function ProjectsComponent() {
  const getData = useCallback(async () => {
    const response = await fetch(
      "https://json-portfolio-data.vercel.app/project"
    );

    const data = await response.json();

    return data as Project[]; // Assuming your data is an array of projects
  }, []);

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getData().then((data) => setProjects(data));
  }, []);

  console.log("projects", projects);

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      {projects.map((project: any, index: number) => (
        <div
          key={index}
          className="p-4 rounded-md transition hover:bg-test5 hover:drop-shadow flex"
        >
          <div className="w-1/4">
            <Image
              width={100}
              height={113}
              alt="thumbnail"
              src={"images/grainy.svg"}
            />
          </div>
          <div className={`text-test1 ${inter.className} w-3/4 ml-4`}>
            <h3>{project.name}</h3>
            <p className="mt-2">{project.detail}</p>
          </div>
        </div>
      ))}
      <br />
      <div className="flex gap-2 inline-block items-center">
        <p className={`text-test1 text-sm ${inter.className}`}>
          <Link
            href="https://www.canvasconfetti.com/"
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
