"use client";

import AboutComponent from "./components/About";
import WorkComponent from "./components/Work";
import ProjectsComponent from "./components/Projects";
import PaintingsComponent from "./components/Paintings";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 font-mono text-white">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <HeaderComponent />
        <div className="pt-24 lg:w-1/2 lg:py-24">
          <AboutComponent />
          <WorkComponent />
          <ProjectsComponent />
          <PaintingsComponent />
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}
