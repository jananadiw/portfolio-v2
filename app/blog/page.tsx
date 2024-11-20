"use client";

import React from "react";
import { inter } from "../styles/font";

const Blog: React.FC = () => {
  return (
    <div
      className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24 scroll-smooth font-base ${inter.className} text-test1 text-lg md:text-xl`}
    >
      <p>Test blog</p>
    </div>
  );
};

export default Blog;
