import React, { useEffect, useState, useCallback } from "react";
import { inter } from "../styles/font";

export default function About() {
  const about = {
    past: "Over the past decade, I've had the opportunity to live in South Korea, both as a student and an expat. Recently, I made the exciting move to Malta, Europe, to embrace the lifestyle of a digital nomad.",
    present:
      "I've worked as a full-stack developer, specializing in building web applications in the Crypto/Blockchain industry. Previously, I gained experience in the Travel/Hospitality-Tech, R&D sector as a back-end developer in the IoT/Safety-Tech field, where I focused on building APIs & Web Services.",
    outofwork:
      "Outside my work as a programmer, I enjoy creating digital art, traveling, going on hikes, and occasionally writing about what I learn and experiment.",
  };

  return (
    <section
      id="about"
      className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24 scroll-smooth font-base ${inter.className} text-test1 text-lg md:text-xl`}
    >
      <p>{about.past}</p>
      <br />
      <p>{about.present}</p>
      <br />
      <p>{about.outofwork}</p>
    </section>
  );
}
