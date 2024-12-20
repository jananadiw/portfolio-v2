import React from "react";
import { inter, noto_serif } from "../styles/font";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { WorkData, ProjectData } from "../types";
import ViewMore from "./ViewMore";
import ProjectDetail from "./ProjectDetail";

export default function WorkComponent({
  experience,
}: {
  experience: WorkData[];
}) {
  return (
    <section
      id="work"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      {experience.map((item: any, index: number) => (
        <div key={index} className="group p-2 flex">
          <div>
            <div className={`text-test1 text-lg ${inter.className}`}>
              <Link
                href={`${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3
                  className={`${noto_serif.className} text-red-400/80 text-xl font-base`}
                >
                  {item.title} - {item.workplace}
                </h3>
                <p className="mt-1 text-base">{item.time}</p>
              </Link>
              <p className="mt-4 text-test1">{item.detail}</p>
              <div
                className={`mt-4 gap-3 ${inter.className} text-sm text-slate-100`}
              >
                {item.projects.map((project: ProjectData, i: number) => (
                  <ProjectDetail project={project} index={index} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <ViewMore text={"See Detailed Resume"} type={"work"} />
    </section>
  );
}
