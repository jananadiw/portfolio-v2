import React, { useEffect, useState } from "react";
import Image from "next/image";
import { inter, youngSerif } from "../font";
import Link from "next/link";
import mediumThumbnail from "../../public/images/article.jpg";

export default function ProjectsComponent() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="p-4 rounded-md transition hover:bg-test5 hover:drop-shadow flex">
        <div className="w-1/4">
          <Image
            width={100}
            height={113}
            alt="thumbnail"
            src={"images/grainy.svg"}
          />
        </div>
        <div className={`text-test1 ${inter.className} w-3/4 ml-4`}>
          <h3>CanvasConfetti</h3>
          <p className="mt-2">
            This is a personal art portfolio site. Built with Javascript & Sass
            on VueJs. Used S3, Cloudfront for distribution and Github Actions
            for CI/CD.
          </p>
        </div>
      </div>
      <div className="p-4 rounded-md transition hover:bg-test5 hover:drop-shadow flex ">
        <div className="w-1/4">
          <Image
            width={100}
            height={113}
            alt="thumbnail"
            src={"images/grainy.svg"}
          />
        </div>
        <div className={`text-test1 ${inter.className} w-3/4 ml-4`}>
          <h3>CanvasConfetti Admin</h3>
          <p className="mt-2">
            Admin tool for uploading artwork for art portfolio site. Build using
            NestJs for the back-end and ReactJs on the front. The objects would
            save in an S3 bucket while saving the object url on a database.
          </p>
        </div>
      </div>
      <div className="p-4 rounded-md transition hover:bg-test5 hover:drop-shadow flex ">
        <div className="w-1/4">
          <Image
            width={100}
            height={113}
            alt="thumbnail"
            src={"images/grainy.svg"}
          />
        </div>
        <div className={`text-test1 ${inter.className} w-3/4 ml-4`}>
          <Link href="https://jananadiw.medium.com/deploy-a-static-vue-nuxt-js-website-with-aws-s3-4944570ccac6">
            Optimizing Web Deployments: Harnessing AWS S3 for Vue and Nuxt.js
            Static Websites
          </Link>
          <p className="mt-1 text-sm">2021</p>
        </div>
      </div>
      <br />
    </section>
  );
}
