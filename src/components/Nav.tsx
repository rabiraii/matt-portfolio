"use client";

import { useState } from "react";
import { Link } from "react-scroll";

export function Nav() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="relative inline-flex items-center">
      <ul className="flex items-center gap-8 text-lg md:text-[24px] md:gap-16">
        {[
          {
            link: "home",
            label: "Home",
          },
          {
            link: "about",
            label: "About",
          },
          {
            link: "skills",
            label: "Skills",
          },
          {
            link: "projects",
            label: "Projects",
          },
        ].map(({ link, label }) => {
          return (
            <li key={link} className="py-3 gray-9 cursor-pointer">
              <Link to={link} spy smooth onClick={() => setActiveLink(link)}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className="absolute bottom-0 w-[69px] h-[10px] bg-[#897586] rounded-[6px] transition-all ease duration-700 hidden md:block"
        style={{
          translate: {
            home: 0,
            about: 132,
            skills: 267,
            projects: 394,
          }[activeLink],
          width: {
            home: 69,
            about: 71,
            skills: 63,
            projects: 95,
          }[activeLink],
        }}
      />
    </nav>
  );
}