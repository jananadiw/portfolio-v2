import React, { useEffect, useState, useCallback } from "react";
import { inter, youngSerif, outfit } from "../styles/font";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Work } from "../interfaces/index";
import { Loading } from "../components/loading";

export default function WorkComponent() {
  const [loading, setLoading] = useState(true);
  const [experience, setExperience] = useState<Work[]>([]);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://json-portfolio-data.vercel.app/experience"
      );
      const data = await response.json();
      setLoading(false);
      return data as Work[];
    } catch (error) {
      setLoading(false);
      return {} as Work[];
    }
  }, []);

  useEffect(() => {
    getData().then((data) => setExperience(data));
  }, []);

  return (
    <section
      id="work"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      {loading ? (
        <Loading componentName={"work"} />
      ) : (
        experience.map((item: any, index: number) => (
          <Link
            key={index}
            target="_blank"
            rel="noreferrer noopener"
            href={`${item.url}`}
          >
            <div className="group p-4 rounded-lg transition hover:bg-test5 hover:drop-shadow-2xl flex mb-10">
              <div
                className={`w-1/4 text-slate-300 text-md ${outfit.className}`}
              >
                {item.time}
              </div>
              <div
                className={`text-test1 text-lg ${outfit.className} w-3/4 ml-4`}
              >
                <h3 className="text-slate-300 group-hover:text-orange-600">
                  {item.title} - {item.workplace}
                </h3>
                <p className="mt-4 text-test1">{item.detail}</p>
                <div
                  className={`mt-4 flex flex-row gap-4 ${outfit.className} text-sm text-slate-100`}
                >
                  {item.projects.map((project: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-center group-hover:text-orange-300"
                    >
                      <>
                        <PaperClipIcon className="h-4 w-4 mr-1" />
                        <Link
                          href={`${project.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.name}
                        </Link>
                      </>
                    </div>
                  ))}
                </div>
                <div
                  className={`mt-6 flex flex-wrap gap-4 ${outfit.className} text-sm`}
                >
                  {item.stack.map((tech: string, i: number) => (
                    <div
                      key={i}
                      className="relative flex select-none items-center whitespace-nowrap rounded-lg bg-slate-600 py-0.5 px-2 text-sm text-green-100"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
      <div className="flex gap-2 inline-block items-center hover:text-orange-300">
        <p className={`text-xl font-extrabold	${outfit.className}`}>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            See Detailed Resume
          </Link>
        </p>
        <ArrowUpRightIcon className="h-4 w-4 text-test" />
      </div>
    </section>
  );
}
