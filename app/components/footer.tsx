import React, { useEffect, useState } from "react";
import { inter, youngSerif } from "../font";

export default function FooterComponent() {
  return (
    <div>
      <p className={`text-test1 text-sm ${inter.className}`}>
        Crafted with care, loosely designed using Figma, NextJs and TailwindCss.
      </p>
    </div>
  );
}
