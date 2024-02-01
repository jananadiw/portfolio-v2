import React, { useEffect, useState } from "react";
import Image from "next/image";
import { inter, youngSerif, outfit, playfairDisplay } from "../styles/font";
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

    // add each section (with an Id) to be observed
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1
          className={`text-5xl font-bold  sm:text-5x text-orange-700 ${outfit.className}`}
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
          I create web experiences that are accessible and inclusive for all
        </p>
        <nav className={`nav hidden lg:block ${outfit.className} text-xl`}>
          <ul className="mt-16 w-max">
            <li className={activeLink === "about" ? "text-2xl text-test2" : ""}>
              <a className="group flex items-center py-1" href="#about">
                <p className="hover:text-test2 hover:text-xl text-test1 transition-size duration-300">
                  About
                </p>
              </a>
            </li>
            <li className={activeLink === "work" ? "text-2xl text-test2" : ""}>
              <a
                className="group flex items-center py-1 text-test1"
                href="#work"
              >
                <p className="hover:text-test2 text-test1 hover:text-xl transition-size duration-300">
                  Work
                </p>
              </a>
            </li>
            <li
              className={activeLink === "projects" ? "text-2xl text-test2" : ""}
            >
              <a className="group flex items-center py-1" href="#projects">
                <p className="hover:text-test2 text-test1 hover:text-xl transition-size duration-300">
                  Projects
                </p>
              </a>
            </li>
            <li
              className={
                activeLink === "paintings" ? "text-2xl text-test2" : ""
              }
            >
              <a className="group flex items-center py-1" href="#paintings">
                <p className="hover:text-test2 text-test1 hover:text-xl transition-size duration-300">
                  Paintings
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
                src="icons/linkedin.svg"
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
