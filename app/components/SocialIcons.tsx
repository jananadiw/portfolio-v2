import React from "react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/jananadiw",
    icon: "github.svg",
    alt: "github_icon",
    width: 28,
    height: 28,
  },
  {
    href: "https://www.linkedin.com/in/jananadiw/",
    icon: "linkedIn.svg",
    alt: "linkedIn icon",
    width: 28,
    height: 28,
  },
  {
    href: "https://read.cv/jananadi",
    icon: "readCV.svg",
    alt: "readCV_icon",
    width: 32,
    height: 32,
  },
];

const SocialIcons: React.FC = () => {
  return (
    <ul className="mt-8 flex items-center">
      {socialLinks.map((link, index) => (
        <li key={index} className="mr-5">
          <div className="icon-container">
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              <Image
                width={link.width}
                height={link.height}
                alt={link.alt}
                src={`icons/${link.icon}`}
                loading="lazy"
              />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
