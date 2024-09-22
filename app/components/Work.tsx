import React from "react";
import { inter, youngSerif, outfit } from "../styles/font";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { WorkData } from "../types";
import { motion } from "framer-motion";
import ViewMore from "./ViewMore";
import Image from "next/image";

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
        <div key={index} className="group p-2 flex mb-12">
          <div>
            <div className={`text-test1 text-lg ${outfit.className} ml-4`}>
              <Link
                href={`${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-red-300 text-xl font-semibold">
                  {item.title} - {item.workplace}
                </h3>
              </Link>
              <p className="mt-4 text-test1">{item.detail}</p>
              <div
                className={`mt-4  gap-3 ${outfit.className} text-sm text-slate-100`}
              >
                {item.projects.map((project: any, i: number) => (
                  <div key={i} className=" items-center text-teal-300">
                    <div className="w-full my-4">
                      <Image
                        width={500}
                        height={400}
                        alt="thumbnail"
                        src={`/images/${project.preview}`}
                        className="rounded transition border-gray-500 group-hover:border-gray-500 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      />
                    </div>
                    <div className="flex">
                      <PaperClipIcon className="h-4 w-4 mr-1" />
                      <Link
                        href={`${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                      </Link>
                    </div>

                    <div
                      className={`mt-6 flex flex-wrap gap-4 ${outfit.className} text-sm`}
                    >
                      {project.stack.map((tech: string, i: number) => (
                        <div
                          key={i}
                          className="relative flex select-none items-center whitespace-nowrap rounded-lg bg-cyan-900 py-0.5 px-2 text-base text-green-100"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
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
