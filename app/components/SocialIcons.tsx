import React from "react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/jananadiw",
    icon: "github.svg",
    alt: "github_icon",
    width: 40,
    height: 40,
  },
  {
    href: "https://www.linkedin.com/in/jananadiw/",
    icon: "linkedIn.svg",
    alt: "linkedIn icon",
    width: 36,
    height: 36,
  },
  {
    href: "https://twitter.com/jananadiw_",
    icon: "twitter.svg",
    alt: "twitter_icon",
    width: 40,
    height: 40,
  },
  {
    href: "https://www.instagram.com/jananadiw/",
    icon: "ig.svg",
    alt: "ig_icon",
    width: 40,
    height: 40,
  },
];

const SocialIcons: React.FC = () => {
  return (
    <ul className="mt-8 flex items-center">
      {socialLinks.map((link, index) => (
        <li key={index} className="mr-5 text-xs">
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
