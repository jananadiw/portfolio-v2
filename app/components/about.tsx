import React, { useEffect, useState } from "react";
import { inter, youngSerif } from "../font";

export default function AboutComponent() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24 scroll-smooth"
    >
      <p className={`text-test1 ${inter.className}`}></p>
      <br />
      <p className={`text-test1 ${inter.className}`}>
        For the past 10 years, I lived in South Korea as a student and also as
        an expat. Recently I moved to Malta, Europe to explore and fully
        experience the life as a digital nomad.
      </p>
      <br />
      <p className={`text-test1 ${inter.className}`}>
        Currently, I'm working as a full-stack developer building web
        applications in the industry of Crypto/Blockchain. Previously, I worked
        in Travel/Hospitality - Tech, R&D as a back-end developer in
        IoT/Safety-Tech industry, building APIs & Web Services.
      </p>
      <br />
      <p className={`text-test1 ${inter.className}`}>
        When I'm not a programmer, I create digital art, travel, go on hikes, or
        sometimes write Medium articles.
      </p>
    </section>
  );
}
