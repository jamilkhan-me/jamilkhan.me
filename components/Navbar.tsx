"use client";
import React from "react";
import { HoverEffect } from "./ui/CardHoverEffect";
import { HoverEffects } from "./ui/Card-hover-effect";

const Navbar = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffects items={projects} />
    </div>
  );
};

export default Navbar;

export const projects = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Project",
    link: "/project",
  },
  {
    title: "Book Note",
    link: "/bookNote",
  },
];
