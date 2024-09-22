"use client";

import { useEffect, useState } from "react";
import Work from "./Work";
import Projects from "./Projects";
import Article from "./Articles";
import Loading from "./Loading";

export default function DataProvider() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <Loading componentName="work" />;

  return (
    <>
      <Work experience={data.experience} />
      <Projects projects={data.project} />
      <Article articles={data.articles} />
    </>
  );
}
