// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile-1.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";

// Logos

export const personalDetails = {
  name: "Bhumika T",
  tagline: "I build things for the web",
  img: profile,
  about: `Passionate Frontend Developer with 2+ years of experience crafting scalable and performant React.js applications. I enjoy building reusable UI components, optimizing performance, and delivering seamless user experiences. Skilled in React.js, Redux, and modern JavaScript, I thrive on turning complex problems into elegant, user-friendly solutions.`,
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/bhumikatharalli/",
  github: "https://github.com/BhumikaT-22",
};

export const workDetails = [
  {
    Position: "Java Full Stack Training",
    Company: `Pentagon Space`,
    Location: "Bengaluru",
    Type: "Intenship",
    Duration: "Internship 2023 - Aug 2023",
  },
  {
    Position: "Software Engineer",
    Company: `Estuate Software Pvt. Ltd.`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2023 - Dec 2021",
  },
];

export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Simplilearn, LinkedIn Learning, Great Learning",
    Location: "Online",
    Type: "Certifications",
    Duration: "2023 - 2025",
  },
  {
    Position: "Bachelor of Technology in Computer Science and Engineering",
    Company: "St Joseph Engineering College, Mangalore",
    Location: "Mangalore",
    Type: "Full Time",
    Duration: "Aug 2019 – May 2023",
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
};

export const projectDetails = [
  {
    title: "Agent Console - User Management & Admin Features",
    image: projectImage1,
    description: `Delivered comprehensive user management features including user deletion, 
                  role updates, and access control for enterprise clients. Designed reusable form components with React Hook Form, 
                  reducing submission errors by 30% and streamlining admin workflows.`,
    techstack: "React.js,Redux , JavaScript (ES6+), Redux, REST APIs",
    // previewLink: "",
    // githubLink: "",
  },
];

export const contactDetails = {
  email: "bhumitharalli@gmail.com",
  phone: "+91-6364245189 ",
};
