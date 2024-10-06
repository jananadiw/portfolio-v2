import React from "react";
import Image from "next/image";
import { inter } from "../styles/font";
import Link from "next/link";
import { ArticleData } from "../types";
import { motion } from "framer-motion";

export default function ArticleComponent({
  articles,
}: {
  articles: ArticleData[];
}) {
  return (
    <section
      id="projects"
      className="mb-10 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      {articles.map((article: any, index: number) => (
        <Link
          key={article.id}
          target="_blank"
          rel="noreferrer noopener"
          href={`${article.url}`}
        >
          <div className="group p-3 rounded-lg transition hover:bg-test5 hover:drop-shadow-2xl flex mb-4">
            <motion.div
              className="flex w-full p-3"
              whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
            >
              <div className="w-1/4">
                <Image
                  width={100}
                  height={113}
                  alt="thumbnail"
                  loading="lazy"
                  src={`/images/${article.image}`}
                  className="rounded transition border-gray-500 group-hover:border-gray-500 sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
              </div>
              <div className={`${inter.className} w-3/4 ml-4 text-lg`}>
                <h3>{article.year}</h3>
                <p className="text-test1 mt-2">{article.headline}</p>
              </div>
            </motion.div>
          </div>
        </Link>
      ))}
    </section>
  );
}
