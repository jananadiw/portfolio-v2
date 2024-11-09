import type { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full bg-[#121212] relative">
      {children}
      <svg
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-50 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
