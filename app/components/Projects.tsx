import React from "react";
import Image from "next/image";
import { outfit } from "../styles/font";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { ProjectData } from "../types";
import { motion } from "framer-motion";
import ViewMore from "./ViewMore";
import ProjectDetail from "./ProjectDetail";

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
        <ProjectDetail project={project} index={index} key={index} />
      ))}
      <ViewMore text={"See GitHub Profile"} type={"projects"} />
    </section>
  );
}
