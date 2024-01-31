import React, { useEffect, useState } from "react";
import Image from "next/image";
import { inter, youngSerif, outfit } from "../styles/font";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function PaintingsComponent() {
  return (
    <section
      id="paintings"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="rounded-xl overflow-hidden">
          <Image
            width={300}
            height={400}
            src={
              "https://janawcontent.s3.ap-northeast-2.amazonaws.com/girl.jpg"
            }
            alt="artwork"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            width={300}
            height={400}
            src={
              "https://janawcontent.s3.ap-northeast-2.amazonaws.com/mermaid.jpg"
            }
            alt="artwork2"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            src={
              "https://janawcontent.s3.ap-northeast-2.amazonaws.com/workday.jpg"
            }
            alt="artwork3"
            width={300}
            height={400}
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            width={300}
            height={400}
            src={
              "https://janawcontent.s3.ap-northeast-2.amazonaws.com/hike.jpg"
            }
            alt="artwork1"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="mt-10 flex gap-2 inline-block items-center hover:text-orange-600">
        <p className={`text-lg ${outfit.className}`}>
          <Link
            href="https://www.canvasconfetti.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More Paintings
          </Link>
        </p>
        <ArrowUpRightIcon className="h-4 w-4 text-test" />
      </div>
    </section>
  );
}
