import React from "react";
import * as FaIcons from "react-icons/fa";
import Birdhouse from "./birdhouse";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <Birdhouse />,
    cName: "nav-text",
  },
  {
    title: "Coding",
    path: "/topic/coding",
    icon: <FaIcons.FaTerminal />,
    cName: "nav-text",
  },
  {
    title: "Cooking",
    path: "/topic/cooking",
    icon: <FaIcons.FaUtensils />,
    cName: "nav-text",
  },
  {
    title: "Football",
    path: "/topic/football",
    icon: <FaIcons.FaFutbol />,
    cName: "nav-text",
  },
  {
    title: "All Articles",
    path: "/articles",
    icon: <FaIcons.FaNewspaper />,
    cName: "nav-text",
  },
];
