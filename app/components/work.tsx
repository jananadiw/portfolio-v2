import React, { useEffect, useState, useCallback } from "react";
import { inter, youngSerif } from "../font";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Work } from "../interfaces/index";

export default function WorkComponent() {
  const getData = useCallback(async () => {
    const response = await fetch(
      "https://json-portfolio-data.vercel.app/experience"
    );
    const data = await response.json();
    return data as Work[]; // Assuming your data is an array of projects
  }, []);

  const [experience, setExperience] = useState<Work[]>([]);

  useEffect(() => {
    getData().then((data) => setExperience(data));
  }, []);

  console.log("experience", experience);

  return (
    <section
      id="work"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      {experience.map((item: any, index: number) => (
        <div
          key={index}
          className="p-4 rounded-md transition hover:bg-test5 hover:drop-shadow flex "
        >
          <div className="w-1/4">{item.time}</div>
          <div className={`text-test1 ${inter.className} w-3/4 ml-4`}>
            <h3>
              {item.title} - {item.workplace}
            </h3>
            <p className="mt-4">{item.detail}</p>
            <div
              className={`mt-4 flex flex-row gap-4 ${youngSerif.className} text-sm font-semibold`}
            >
              {item.projects.map((project: any, index: number) => (
                // <div key={index} className="flex flex-row hover:text-test4">
                <div key={index} className="flex items-center">
                  <>
                    <PaperClipIcon className="h-4 w-4 mr-1" />
                    <Link
                      href="https://tonstarter.tokamak.network/launch"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project}
                    </Link>
                  </>
                </div>
                // </div>
              ))}
            </div>
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
            See Detailed Resume{" "}
          </Link>
        </p>
        <ArrowSmallRightIcon className="h-4 w-4 text-test" />
      </div>
    </section>
  );
}
