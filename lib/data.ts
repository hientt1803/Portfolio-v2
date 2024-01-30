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
    title: "Graduated FPT Polytechnic Can Tho",
    location: "Can Tho, Viet Nam",
    description:
      "I graduated after 2 year and 4 months of studying. I immediately found a job as a front-end or back-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "12/2023",
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
    id: 1,
    slug: "education-system-manager",
    title: "F4 Education System managerment",
    description:
      "I worked as a full-stack developer on this project for 3 months. This app provide a functions that we can manager a programing center. ",
    tags: [
      "React",
      "Mantine",
      "SQL Server",
      "Figma",
      "Firebase",
      "Java (spring boot)",
      "RestFull APIs",
    ],
    imageUrl: corpcommentImg,
  },
  {
    id: 2,
    slug: "notion-clone",
    title: "Notion clone",
    description:
      "i worked as a full-stack developer. It has features like notion,...",
    tags: ["Next.js", "taildwind", "Convex", "Clerk"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    slug: "blog-app",
    title: "Blog Application",
    description:
      "i worked as a full-stack developer. It has features like post new post, comments, like, share,...",
    tags: ["Next.js", "taildwind, SCSS", "Prisma", "MongoDB"],
    imageUrl: wordanalyticsImg,
  },
  {
    id: 4,
    slug: "full-stack-ecomerce",
    title: "Full Stack E-Commerce",
    description:
      "i worked as a full-stack developer. It has features like a e-commerce website where people can buy technology toy like earpods,...",
    tags: [
      "React",
      "Spring boot",
      "RestFull APIs",
      "Thymeleaf",
      "SQL Server",
      "Figma",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
  },
] as const;

export const projectsDataDetail = [
  {
    id: 1,
    slug: "education-system-manager",
    title: "F4 Education System managerment",
    date: "09/2023 - 12/2023",
    github: "https://github.com/alexnguyen03/f4education",
    feature: [
      "Login, log-out, forgot-password,..",
      "Checkout (PayPal, VNPay)",
      "Client (Client can view, searching courses, best course, newest course and course have good comment)",
      "Student dashboard (Student can access to schedule, class Result, certificate, checkout history, attendance history,..)",
      "Teacher dashboard (Teachers can take attendance of students, grade students, give task, set assignment,...)",
      "Admin dashboard (Admin can manager subject, course, schedule, questions, examination,...)",
    ],
    description:
      "I worked as a full-stack developer on this project for 3 months. This app provide a functions that we can manager a programing center. ",
    tags: ["React", "Mantine", "SQL Server", "Bootstrap, SCSS", "Figma"],
    listImage: [
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/1-fullscr.png?alt=media&token=1d0b3e93-25f9-4d97-b54d-3f241e7ab382",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/10-full.png?alt=media&token=6d08c654-320a-489f-950e-3fc460b8545e",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/2-fullscr.png?alt=media&token=e47d54cb-120b-42cd-aa4e-08994251093d",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/3-fullscr.png?alt=media&token=b98aaf74-d31e-4cd2-af65-3027182951e7",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/4-fullscr.png?alt=media&token=163eb2fd-676a-4be5-844a-c5497bfafabc",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/6-fullscr.png?alt=media&token=437fa5ef-3aa7-4739-809f-d455d9a7475d",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/7-fullsrc.png?alt=media&token=f5bc75d9-f5d7-43c5-ae63-12612f864adb",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/8-halfsrc.png?alt=media&token=76e6f86b-292c-4960-812d-e90d98517374",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/9-full.png?alt=media&token=e905d464-2436-4b79-9fe1-5d64ec0a460a",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/classResult.png?alt=media&token=80fe9c70-0501-4b8c-8e8f-037710ca19cc",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/teacher-class_result.png?alt=media&token=c440a78c-220b-427b-8922-2d8ff6cf26f8",
    ],
  },
  {
    id: 2,
    slug: "notion-clone",
    title: "Notion clone",
    date: "01/2024",
    github: "https://github.com/hientt1803/notion-clone",
    feature: ["Authenticate", "Create, update, delete notes..."],
    description:
      "i worked as a full-stack developer. It has features like notion",
    tags: ["Next.js", "taildwind", "Convex", "Clerk"],
    listImage: [
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/notion%2Fnotion-2.jpeg?alt=media&token=47b97e34-f1fd-4664-9759-b37f798028d6",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/notion%2Fnotion-1.jpeg?alt=media&token=3295f90c-9670-40de-ba4a-e92c9b7bea1a",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/notion%2Fnotion-3.jpeg?alt=media&token=8d5182c0-5a44-4f72-a59d-03f9e21abc84",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/notion%2Fnotion-4.jpeg?alt=media&token=06cda5b9-d450-4e1c-9a8f-6a2e1197a449",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/notion%2Fnotion-5.jpeg?alt=media&token=7021679d-d3df-480b-b429-b49ac50cbaec",
    ],
  },
  {
    id: 3,
    slug: "blog-app",
    title: "Blog Application",
    date: "01/2024",
    github: "https://github.com/hientt1803/augentern-blog-app",
    feature: [
      "login, log-out, forgot-password,..",
      "checkout (PayPal, VNPay)",
      "Client (Client can view, searching courses, best course, newest course and course have good comment)",
      "Student dashboard (Student can access to schedule, class Result, certificate, checkout history, attendance history,..)",
      "Teacher dashboard (Teachers can take attendance of students, grade students, give task, set assignment,...)",
      "Admin dashboard (Admin can manager subject, course, schedule, questions, examination,...)",
    ],
    description:
      "i worked as a full-stack developer. It has features like post new post, comments, like, share,...",
    tags: ["Next.js", "taildwind, SCSS", "Prisma", "MongoDB"],
    listImage: [
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/augen-blog%2F1.png?alt=media&token=022e13b3-6225-4d24-89e6-4054a1cd1327",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/augen-blog%2F2.png?alt=media&token=046d901a-5c04-4a04-80ed-6f9e95c2d2d3",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/augen-blog%2F3.png?alt=media&token=d42176ec-9062-420b-bc53-5c6b9ec378c5",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/augen-blog%2F4.png?alt=media&token=cac7c0d7-872d-4b65-acf3-030207391828",
      "https://firebasestorage.googleapis.com/v0/b/datn-questions.appspot.com/o/augen-blog%2F5.jpeg?alt=media&token=a4af4a80-e1ab-41ef-a57d-24053e47de77",
    ],
  },
  {
    id: 4,
    slug: "full-stack-ecomerce",
    title: "Full Stack E-Commerce",
    date: "06/2023",
    github:
      "https://github.com/hientt1803/e-commerce-app-springboot-and-reactjs",
    feature: [
      "login, log-out, forgot-password,..",
      "checkout (PayPal, VNPay)",
      "Client (Client can view, searching courses, best course, newest course and course have good comment)",
      "Student dashboard (Student can access to schedule, class Result, certificate, checkout history, attendance history,..)",
      "Teacher dashboard (Teachers can take attendance of students, grade students, give task, set assignment,...)",
      "Admin dashboard (Admin can manager subject, course, schedule, questions, examination,...)",
    ],
    description:
      "i worked as a full-stack developer. It has features like a e-commerce website where people can buy technology toy like earpods, bettary,...",
    tags: ["Java Swing", "SQL Server", "Figma"],
    listImage: [],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "Bootstrap",
  "Responsive",
  "Framer Motion",
  "JavaScript",
  "React(Next.js)",
  "Redux",
  "Java Core",
  "Java Spring boot",
  "Restfull APIs",
  "Prisma",
  "MongoDB",
  "SQL",
  "Git",
  "Trello",
] as const;
