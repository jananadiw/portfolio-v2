import React from "react";

// TODO: Move to interfaces
type LoadingProps = {
  componentName: string;
};

export const Loading: React.FC<LoadingProps> = ({ componentName }) => {
  let loadingContent;

  if (componentName === "about") {
    loadingContent = (
      <div className="animate-pulse">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex-1 space-y-6 py-1 pb-4">
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-700 rounded"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-700 rounded"></div>
            </div>
            <div className="space-y-3 w-80">
              <div className="h-4 bg-slate-700 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (componentName === "work") {
    loadingContent = (
      <>
        <div className="space-y-3 animate-pulse mt-24">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 py-16">
              <div className="h-4 bg-slate-700 rounded col-span-1"></div>
              <div className="h-4 bg-slate-700 rounded col-span-2">
                <div className="space-y-3">
                  <div className="h-4 bg-slate-700 rounded"></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else if (componentName === "projects") {
    loadingContent = (
      <>
        <div className="space-y-3 animate-pulse mt-24">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 py-16">
              <div className="h-4 bg-slate-700 rounded col-span-1"></div>
              <div className="h-4 bg-slate-700 rounded col-span-2">
                <div className="space-y-3">
                  <div className="h-4 bg-slate-700 rounded"></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    loadingContent = (
      <div>
        {/* Default content if none of the conditions match */}
        <div className="h-4 bg-slate-700 rounded"></div>
      </div>
    );
  }

  return <>{loadingContent}</>;
};
