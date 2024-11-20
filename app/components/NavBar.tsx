// components/Navbar.tsx
import React from "react";
import { inter } from "../styles/font";

interface NavbarProps {
  activeLink: string;
  handleLinkClick: (link: string) => void;
}

const NavBar: React.FC<NavbarProps> = ({ activeLink, handleLinkClick }) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "paintings", label: "Artwork" },
    { id: "blog", label: "Blog", href: "/blog" },
  ];

  return (
    <nav className={`nav hidden lg:block ${inter.className} text-xl`}>
      <ul className="mt-16 w-max">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`${
              activeLink === item.id ? "text-[#d5b3b3]" : "text-test1"
            } transition-colors duration-300`}
          >
            <a
              className="group flex items-center py-1"
              href={item.href ? `${item.href}` : `#${item.id}`}
              target={undefined}
              rel={undefined}
              onClick={() => handleLinkClick(item.id)}
            >
              <p className="hover:text-[#f87171] transition-colors duration-300">
                {item.label}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
