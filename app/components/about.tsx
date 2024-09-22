import React, { useEffect, useState, useCallback } from "react";
import { outfit } from "../styles/font";
import { AboutData } from "../types";
import { Loading } from "../components/loading";

export default function About() {
  const about = {
    past: "Over the past decade, I've had the opportunity to live in South Korea, both as a student and an expat. Recently, I made the exciting move to Malta, Europe, to embrace the lifestyle of a digital nomad.",
    present:
      "I've worked as a full-stack developer, specializing in building web applications in the Crypto/Blockchain industry. Previously, I gained experience in the Travel/Hospitality-Tech, R&D sector as a back-end developer in the IoT/Safety-Tech field, where I focused on building APIs & Web Services.",
    outofwork:
      "Outside my work as a programmer, I enjoy creating digital art, traveling, going on hikes, and occasionally writing articles on Medium.",
  };

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24 scroll-smooth"
    >
      <p
        className={`text-test1 ${outfit.className} text-lg text-slate-400 md:text-xl`}
      >
        {about.past}
      </p>
      <br />
      <p
        className={`text-test1 ${outfit.className} text-lg text-slate-400 md:text-xl`}
      >
        {about.present}
      </p>
      <br />
      <p
        className={`text-test1 ${outfit.className} text-lg text-slate-400 md:text-xl`}
      >
        {about.outofwork}
      </p>
    </section>
  );
}
