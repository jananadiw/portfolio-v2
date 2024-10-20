// components/Header.tsx
import React, { useEffect, useState } from "react";
import { inter } from "../styles/font";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";

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
      }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1
          className={`text-3xl font-semibold sm:text-3xl lg:text-4xl text-red-400 ${inter.className}`}
        >
          Hi, I&apos;m Jananadi
        </h1>
        <p
          className={`mt-2 max-w-xs leading-normal text-test1 text-xl ${inter.className}`}
        >
          I love building beautiful web experiences that engage and include
          everyone.
        </p>
        <NavBar activeLink={activeLink} handleLinkClick={handleLinkClick} />
      </div>
      <SocialIcons />
    </div>
  );
}
