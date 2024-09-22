import React, { memo } from "react";
import Image from "next/image";

// Move to a separate file (e.g., types.ts)
interface LoadingProps {
  componentName: "about" | "work" | "projects" | "articles";
}

// Constants for component names
const COMPONENT_NAMES = {
  ABOUT: "about",
  WORK: "work",
  PROJECTS: "projects",
  ARTICLES: "articles",
} as const;

const LoadingAbout = () => (
  <div className="animate-pulse">
    {[...Array(2)].map((_, index) => (
      <div key={index} className="flex-1 space-y-6 py-1 pb-4">
        <div className="h-4 bg-cyan-900 rounded"></div>
        <div className="space-y-3">
          <div className="h-4 bg-cyan-900 rounded"></div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-cyan-900 rounded"></div>
        </div>
        <div className="space-y-3 w-80">
          <div className="h-4 bg-cyan-900 rounded"></div>
        </div>
      </div>
    ))}
  </div>
);

const LoadingWork = () => (
  <div className="space-y-3 animate-pulse mt-24">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="grid grid-cols-3 gap-4 py-16">
        <div className="h-4 bg-cyan-900 rounded col-span-1"></div>
        <div className="h-4 bg-cyan-900 rounded col-span-2">
          <div className="space-y-3">
            <div className="h-4 bg-cyan-900 rounded"></div>
            <div className="h-4 bg-cyan-900 rounded"></div>
            <div className="h-4 bg-cyan-900 rounded"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const LoadingProjects = LoadingWork;

const LoadingArticles = () => (
  <div className="space-y-3 animate-pulse mt-24">
    {[...Array(2)].map((_, index) => (
      <div key={index} className="grid grid-cols-3 gap-4 py-16">
        <div className="h-4 bg-cyan-900 rounded col-span-1"></div>
        <div className="h-4 bg-cyan-900 rounded col-span-2">
          <div className="space-y-3">
            <div className="h-4 bg-cyan-900 rounded"></div>
            <div className="h-4 bg-cyan-900 rounded"></div>
            <div className="h-4 bg-cyan-900 rounded"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Loading: React.FC<LoadingProps> = memo(({ componentName }) => {
  switch (componentName) {
    case COMPONENT_NAMES.ABOUT:
      return <LoadingAbout />;
    case COMPONENT_NAMES.WORK:
      return <LoadingWork />;
    case COMPONENT_NAMES.PROJECTS:
      return <LoadingProjects />;
    case COMPONENT_NAMES.ARTICLES:
      return <LoadingArticles />;
    default:
      return <div className="h-4 bg-cyan-900 rounded"></div>;
  }
});

Loading.displayName = "Loading";

export default Loading;
