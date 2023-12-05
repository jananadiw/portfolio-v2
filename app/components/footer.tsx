import React, { useEffect, useState } from "react";
import { inter, youngSerif } from "../font";

export default function FooterComponent() {
  return (
    <div>
      <p className={`text-test1 text-sm ${inter.className}`}>
        Built by Jananadiw, using Figma, NextJs, TailwindCss. Inspired by
        brittanychiang.com,
      </p>
    </div>
  );
}
