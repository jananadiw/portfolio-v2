import React, { useEffect, useState } from "react";
import Image from "next/image";
import { outfit } from "../styles/font";
import Link from "next/link";

export default function HeaderComponent() {
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

    // Add each section (with an Id) to be observed
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1
          className={`text-5xl font-bold sm:text-5x text-red-400 ${outfit.className}`}
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
        <nav className={`nav hidden lg:block ${outfit.className} text-xl`}>
          <ul className="mt-16 w-max">
            <li
              className={`${
                activeLink === "about" ? "text-[#d5b3b3]" : "text-test1"
              } transition-colors duration-300`}
            >
              <a
                className="group flex items-center py-1"
                href="#about"
                onClick={() => handleLinkClick("about")}
              >
                <p className="hover:text-[#f87171] transition-colors duration-300">
                  About
                </p>
              </a>
            </li>
            <li
              className={`${
                activeLink === "work" ? "text-[#d5b3b3]" : "text-test1"
              } transition-colors duration-300`}
            >
              <a
                className="group flex items-center py-1"
                href="#work"
                onClick={() => handleLinkClick("work")}
              >
                <p className="hover:text-[#f87171] transition-colors duration-300">
                  Work
                </p>
              </a>
            </li>
            <li
              className={`${
                activeLink === "projects" ? "text-[#d5b3b3]" : "text-test1"
              } transition-colors duration-300`}
            >
              <a
                className="group flex items-center py-1"
                href="#projects"
                onClick={() => handleLinkClick("projects")}
              >
                <p className="hover:text-[#f87171] transition-colors duration-300">
                  Projects
                </p>
              </a>
            </li>
            <li
              className={`${
                activeLink === "paintings" ? "text-[#d5b3b3]" : "text-test1"
              } transition-colors duration-300`}
            >
              <a
                className="group flex items-center py-1"
                href="#paintings"
                onClick={() => handleLinkClick("paintings")}
              >
                <p className="hover:text-[#f87171] transition-colors duration-300">
                  Artwork
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xs">
          <div className="icon-container">
            <Link
              href={"https://github.com/jananadiw"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={32} height={32} alt="test" src="icons/github.svg" />
            </Link>
          </div>
        </li>
        <li className="mr-5 text-xs">
          <div className="icon-container">
            <Link
              href={"https://www.linkedin.com/in/jananadiw/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={28}
                height={28}
                alt="test"
                src="icons/linkedIn.svg"
              />
            </Link>
          </div>
        </li>
        <li className="mr-5 text-xs">
          <div className="icon-container">
            <Link
              href={"https://twitter.com/jananadiw_"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={32}
                height={32}
                alt="test"
                src="icons/twitter.svg"
              />
            </Link>
          </div>
        </li>
        <li className="mr-5 text-xs">
          <div className="icon-container">
            <Link
              href={"https://www.instagram.com/jananadiw/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={32} height={32} alt="test" src="icons/ig.svg" />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
