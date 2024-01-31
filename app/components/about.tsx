import React, { useEffect, useState, useCallback } from "react";
import { inter, youngSerif, outfit } from "../styles/font";
import { AboutData } from "../interfaces";
import { Loading } from "../components/Loading";

export default function AboutComponent() {
  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState<AboutData>({
    past: "",
    present: "",
    outofwork: "",
  });

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://json-portfolio-data.vercel.app/about"
      );
      const data = await response.json();
      setLoading(false); // Set loading to false when data is done loading
      return data as AboutData;
    } catch (error) {
      setLoading(false); // Set loading to false in case of error
      return {} as AboutData;
    }
  }, []);

  useEffect(() => {
    getData().then((data) => setAbout(data));
  }, [getData]);

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24 scroll-smooth"
    >
      {loading ? (
        <Loading componentName={"about"} />
      ) : (
        <>
          <p
            className={`text-test1 ${outfit.className} text-lg text-slate-400`}
          ></p>
          <br />
          <p
            className={`text-test1 ${outfit.className} text-lg text-slate-400`}
          >
            {about.past}
          </p>
          <br />
          <p
            className={`text-test1 ${outfit.className} text-lg text-slate-400`}
          >
            {about.present}
          </p>
          <br />
          <p
            className={`text-test1 ${outfit.className} text-lg text-slate-400`}
          >
            {about.outofwork}
          </p>
        </>
      )}
    </section>
  );
}
