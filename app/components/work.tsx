import React, { useEffect, useState } from "react";
import { inter, youngSerif } from "../font";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { use } from "react";

export function getData() {
  const res = fetch("https://json-portfolio-data.vercel.app/experience").then(
    (response) => response.json()
  );

  return res;
}

export default function WorkComponent() {
  const experience = use(getData());

  console.log("experience", experience);

  return (
    // <section
    //   id="work"
    //   className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    // >
    //   <div className="p-4 rounded-md transition hover:bg-test5 hover:drop-shadow flex ">
    //     {/* <div className="w-1/4">Jan - Aug 2023</div> */}
    //     <div className="w-1/4">{data.time}</div>
    //     <div className={`text-test1 ${inter.className} w-3/4 ml-4`}>
    //       <h3>Front End Engineer - Tokamak Network</h3>
    //       <p className="mt-4">
    //         Worked with a team of designers, project managers to and built user
    //         interfaces for blockchain applications in a DeFi environment.
    //       </p>
    //       <div
    //         className={`mt-4 flex flex-row gap-4 ${youngSerif.className} text-sm font-semibold`}
    //       >
    //         <div className="flex flex-row hover:text-test4">
    //           <PaperClipIcon className="h-4 w-4 mr-1" />
    //           <Link
    //             href="https://tonstarter.tokamak.network/launch"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             Tonstarter
    //           </Link>
    //         </div>
    //         <div>
    //           <Link
    //             href="https://tokamak.network/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             L2 Mainnet
    //           </Link>
    //         </div>
    //         <Link
    //           href="https://titan.tokamak.network/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Titan
    //         </Link>
    //         <Link
    //           href="https://bridge.tokamak.network/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Bridge
    //         </Link>
    //       </div>
    //       <div className="mt-4">
    //         <button
    //           type="button"
    //           className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //         >
    //           Javascript
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <br />
    //   <div className="p-4 rounded-md transition hover:bg-test5 hover:drop-shadow flex ">
    //     <div className="w-1/4">2020 - 2023</div>
    //     <div className={`text-test1 ${inter.className} w-3/4 ml-4`}>
    //       <h3>Front End Engineer - ONDA</h3>
    //       <p className="mt-4">
    //         Implemented a major features such as Cost management, Night Audit,
    //         Rate adjustment, Reservations management features etc. for property
    //         management systems (ONDA Wave), ONDA PMS.
    //       </p>
    //       <div className="mt-4 flex flex-row gap-4 text-sm">
    //         <Link
    //           href="https://www.onda.me/ondahub"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           ONDA Wave
    //         </Link>
    //         <Link
    //           href="https://gsa-inquiries.onda.me/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           PO inquiry portal
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <br />
    //   <div className="p-4 rounded-md transition hover:bg-test5 hover:drop-shadow flex ">
    //     <div className="w-1/4">2018 - 2020</div>
    //     <div className={`text-test1 ${inter.className} w-3/4 ml-4`}>
    //       <h3>Back End Engineer - Corners</h3>
    //       <p className="mt-4">
    //         Implemented web services for an Intelligent Evacuation System. Web
    //         services were able to communicate between LoRa devices, and detect
    //         hight decibel sounds such as shooting incidents.
    //       </p>
    //       <div className="mt-4 flex flex-row gap-4 text-sm">
    //         <Link
    //           href="http://www.corners.co.kr/page/solution_02.php"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           InteleGuide
    //         </Link>
    //         <Link
    //           href="http://www.corners.co.kr/page/solution_03.php"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           IntelEvac
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <br />
    //   <div className="flex gap-2 inline-block items-center">
    //     <p className={`text-test1 text-sm ${inter.className}`}>
    //       <Link
    //         href="https://www.canvasconfetti.com/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         See Detailed Resume
    //       </Link>
    //     </p>
    //     <ArrowSmallRightIcon className="h-4 w-4 text-test" />
    //   </div>
    // </section>
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
