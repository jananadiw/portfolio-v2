"use client";

import { useEffect, useState } from "react";
import Work from "./Work";
import Projects from "./Projects";
import Articles from "./Articles";
import Loading from "./Loading";
import { WorkData, ProjectData, ArticleData } from "../types";

interface Data {
  experience: WorkData[];
  projects: ProjectData[];
  articles: ArticleData[];
}

export default function DataProvider() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((fetchedData: Data) => setData(fetchedData));
  }, []);

  if (!data) return <Loading componentName="work" />;

  return (
    <>
      <Work experience={data.experience} />
      <Projects projects={data.projects} />
      <Articles articles={data.articles} />
    </>
  );
}
