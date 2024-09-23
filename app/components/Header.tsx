// components/Header.tsx
import React, { useEffect, useState } from "react";
import { outfit } from "../styles/font";
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
          className={`text-5xl font-bold sm:text-5xl lg:text-6xl text-red-400 ${outfit.className}`}
        >
          Hey!
        </h1>
        <h2
          className={`mt-3 text-2xl font-medium text-test2 sm:text-4xl ${outfit.className}`}
        >
          I&apos;m Jananadi
        </h2>
        <p
          className={`mt-2 max-w-xs leading-normal text-test1 text-xl ${outfit.className}`}
        >
          Passionate about building dynamic, user-centric web experiences that
          engage and include everyone.
        </p>
        <NavBar activeLink={activeLink} handleLinkClick={handleLinkClick} />
      </div>
      <SocialIcons />
    </div>
  );
}
