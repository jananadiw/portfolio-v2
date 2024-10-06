import React from "react";
import { inter } from "../styles/font";

export default function Footer() {
  return (
    <div>
      <p className={`${inter.className} text-test1 text-lg`}>
        Made with 🩷 Built using NextJs and Tailwind CSS.
      </p>
    </div>
  );
}
