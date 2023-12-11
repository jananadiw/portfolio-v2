import React, { useEffect, useState, useCallback } from "react";
import { inter, youngSerif } from "../font";
import { AboutData } from "../interfaces";
import { Suspense } from "react";
import Loading from "../components/loading";

export default function AboutComponent() {
  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://json-portfolio-data.vercel.app/about"
      );
      const data = await response.json();
      return data as AboutData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return {} as AboutData;
    }
  }, []);

  const [about, setAbout] = useState<AboutData>({
    past: "",
    present: "",
    outofwork: "",
  });

  useEffect(() => {
    getData().then((data) => setAbout(data));
  }, [getData]);

  console.log(about);
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24 scroll-smooth"
    >
      <Suspense fallback={<Loading />}>
        <p className={`text-test1 ${inter.className}`}></p>
        <br />
        <p className={`text-test1 ${inter.className}`}>{about.past}</p>
        <br />
        <p className={`text-test1 ${inter.className}`}>{about.present}</p>
        <br />
        <p className={`text-test1 ${inter.className}`}>{about.outofwork}</p>
      </Suspense>
    </section>
  );
}
