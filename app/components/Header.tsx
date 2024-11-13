// components/Header.tsx
import React, { useEffect, useState } from "react";
import { inter, noto_serif } from "../styles/font";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";

export default function Header() {
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -50% 0px",
      },
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className={`text-4xl sm:text-3xl lg:text-4xl text-red-400/80 ${noto_serif.className}`}>
          Hi, I&apos;m Jananadi
        </h1>
        <p className={`${inter.className} mt-4 max-w-xs leading-normal text-test1 text-xl`}>
          I love building beautiful web experiences that engage and include everyone.
        </p>
        <NavBar activeLink={activeLink} handleLinkClick={handleLinkClick} />
      </div>
      <SocialIcons />
    </div>
  );
}
