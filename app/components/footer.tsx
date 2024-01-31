import React, { useEffect, useState } from "react";
import { inter, youngSerif, outfit } from "../styles/font";

export default function FooterComponent() {
  return (
    <div>
      <p className={`text-slate-300 text-lg ${outfit.className}`}>
        Design inspired by Brittany Chiang. Coded in Visual Studio Code & Built
        using NextJs and Tailwind CSS.
      </p>
    </div>
  );
}
