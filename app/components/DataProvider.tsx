"use client";

import { useEffect, useState } from "react";
import Experience from "./Experience";
import SideOn from "./SideOn";
import WritingAbout from "./WritingAbout";
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
      <Experience experience={data.experience} />
      <SideOn projects={data.projects} />
      <WritingAbout articles={data.articles} />
    </>
  );
}
