import React from "react";
import { outfit } from "../styles/font";

export default function Footer() {
  return (
    <div>
      <p className={`${outfit.className} text-slate-300 text-lg `}>
        Made with 🩷 Coded in Visual Studio Code & Built using NextJs and
        Tailwind CSS.
      </p>
    </div>
  );
}