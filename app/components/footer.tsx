import React, { useEffect, useState } from "react";
import { inter, youngSerif, outfit } from "../styles/font";

export default function FooterComponent() {
  return (
    <div>
      <p className={`text-slate-300 text-lg ${outfit.className}`}>
        Inspired by Brittany Chiang. Loosely designed using Figma. Developed
        using NextJs and TailwindCss in Visual code.
      </p>
    </div>
  );
}
