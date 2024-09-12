import React, { useEffect, useState, use, useCallback } from "react";
import Image from "next/image";
import { outfit } from "../styles/font";
import Link from "next/link";
import { Article } from "../types";
import { Loading } from "./loading";
import { motion } from "framer-motion";

export default function ArticlesComponent() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://json-portfolio-data.vercel.app/articles"
      );

      const data = await response.json();
      setLoading(false);
      return data as Article[]; // Assuming your data is an array of projects
    } catch (error) {}
    setLoading(false);
    return [] as Article[];
  }, []);

  useEffect(() => {
    getData().then((data) => setArticles(data));
  }, []);

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      {loading ? (
        <Loading componentName="articles" />
      ) : (
        articles.map((article: any, index: number) => (
          <Link
            key={article.id}
            target="_blank"
            rel="noreferrer noopener"
            href={`${article.url}`}
          >
            <div className="group p-4 rounded-lg transition hover:bg-test5 hover:drop-shadow-2xl flex mb-10">
              <motion.div
                className="flex w-full p-4"
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              >
                <div className="w-1/4">
                  <Image
                    width={100}
                    height={113}
                    alt="thumbnail"
                    src={`/images/${article.image}`}
                    className="rounded transition border-gray-500 group-hover:border-gray-500 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  />
                </div>
                <div className={`${outfit.className} w-3/4 ml-4 text-lg`}>
                  <h3>{article.year}</h3>
                  <p className="text-test1 mt-2">{article.headline}</p>
                </div>
              </motion.div>
            </div>
          </Link>
        ))
      )}
    </section>
  );
}
