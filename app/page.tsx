"use client";

import AboutComponent from "./components/about";
import WorkComponent from "./components/work";
import ProjectsComponent from "./components/projects";
import PaintingsComponent from "./components/paintings";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 text-white">
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
