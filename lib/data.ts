import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated FPT Polytechnic Can Tho",
    location: "Can Tho, Viet Nam",
    description:
      "I graduated after 2 year and 4 months of studying. I immediately found a job as a front-end or back-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "12/2023",
  },
  {
    title: "intern Back-End Developer at CUSC *",
    location: "Can Tho, Viet Nam",
    description:
      "I worked as a back-end developer for 2 month in CUSC (Can Tho University Sofware center). at center i build a website with Laravel 10 and My SQL. And i'm also trying to become a full-stack developer",
    icon: React.createElement(CgWorkAlt),
    date: "09/2023 - 11/2023",
  },
  {
    title: "Full-Stack Developer",
    location: "remote - (Can Tho)",
    description:
      "I'm working as a full-stack developer at my themsis graduate. My stack includes React, Boootstrap, SCSS, Java (spring framework) and SQL Server. And i'm always open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "09/2023 - 12/2023",
  },
  {
    title: "Open to full-time job",
    location: "remote - onsite - (Can Tho)",
    description:
      "I'm just graduated last month (12/2023) and now i'm trying to find a job with technologies (React (Next.js), Java (Spring Boot), Node.js). And i'm also love to learning new tech if company need those tech",
    icon: React.createElement(FaReact),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "F4 Education System managerment",
    description:
      "I worked as a full-stack developer on this project for 3 months. This app provide a functions that we can manager a programing center. ",
    tags: ["React", "Mantine", "SQL Server", "Bootstrap, SCSS", "Figma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Blog Application",
    description:
      "i worked as a full-stack developer. It has features like post new post, comments, like, share,...",
    tags: ["Next.js", "taildwind, SCSS", "Prisma", "MongoDB"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Phone Store Managerment",
    description:
      "A window app for quick managerment phone store. we can manager products, user, Discount, Order, statictis.",
    tags: ["Java Swing", "SQL Server", "Figma"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Framer Motion",
] as const;
