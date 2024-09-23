import React, { memo } from "react";

const Loading = memo(() => {
  return (
    <div className="space-y-3 animate-pulse mt-24 mb-12">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 py-8">
          <div className="h-4 bg-slate-500 rounded col-span-1"></div>
          <div className="col-span-2 space-y-3">
            <div className="h-4 bg-slate-500 rounded"></div>
            <div className="h-4 bg-slate-500 rounded"></div>
            <div className="h-4 bg-slate-500 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
});

Loading.displayName = "Loading";

export default Loading;
