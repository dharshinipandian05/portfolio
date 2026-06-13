import { Project, Experience, SkillCategory, CodingProfile, Education } from "./types";

export const PERSONAL_INFO = {
  name: "Dharshini J",
  role: "Backend Engineer | Full Stack Developer",
  tagline: "Specializing in scalable backend architectures, high-volume queue processors, and real-time data streaming pipelines.",
  about: "I am a B.Tech Artificial Intelligence and Data Science graduate with hands-on experience in building and maintaining backend-focused web applications. Passionate about creating clean, scalable environments, designing resilient APIs, and debugging complex system bottlenecks.",
  mindset: "I design backend solutions with a strict focus on scale, high-performance execution, and clean API design. I thrive on translating intricate logic into elegant, maintainable codebases that power seamless frontend interactions.",
  email: "dharshinipandian05@gmail.com",
  github: "https://github.com/DharshiniPandian",
  linkedin: "https://www.linkedin.com/in/dharshini-pandian-6aa9b4267/",
  weblink: "https://dharshinipandian.netlify.app",
};

export const EDUCATION_DETAILS: Education[] = [
  {
    id: "edu-1",
    institution: "Bannari Amman Institute Of Technology",
    degree: "B.Tech - Artificial Intelligence And Data Science",
    period: "2022 – 2026",
    scoreLabel: "CGPA",
    scoreValue: "8.66/10",
    details: [
      "Department of Artificial Intelligence and Data Science",
    ]
  },
  {
    id: "edu-2",
    institution: "St.Joseph’s Matriculation Higher Secondary School",
    degree: "HSC (Higher Secondary Certificate)",
    period: "2021 – 2022",
    scoreLabel: "Percentage",
    scoreValue: "93.33%",
    details: ["State Board - Physics, Chemistry, and Biology"]
  },
  {
    id: "edu-3",
    institution: "Vikas Vidyalaya Matriculation Higher Secondary School",
    degree: "SSLC (Secondary School Leaving Certificate)",
    period: "2019 – 2020",
    scoreLabel: "Percentage",
    scoreValue: "94.00%",
    details: ["State Board curriculum"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Associate Backend Developer",
    company: "The Alter Office, Bangalore",
    period: "Aug 2025 - Present",
    description: [
      "Handled enterprise server migration from Azure to Hetzner cloud environment, establishing secure configurations.",
      "Implemented a highly reliable, asynchronous audit logging engine powered by BullMQ, Redis, and Express JS.",
      "Collaborated deep with software engineers to design, build, and test highly scalable backend services and Restful endpoints."
    ],
    skills: ["Node.js", "NestJS", "ExpressJS", "PostgreSQL", "Redis", "BullMQ", "ClickHouse", "RisingWave", "Azure", "Hetzner", "AWS S3", "GitHub Actions"]
  },
  {
    id: "exp-2",
    role: "SDE Intern",
    company: "The Alter Office, Bangalore",
    period: "May 2025 - Jul 2025 (3 Months)",
    description: [
      "Worked with team of core engineers to build, test, and maintain robust backend APIs, gaining experience with modern tech stacks and cloud tools.",
    ],
    skills: ["Node JS", "Express JS", "MongoDB", "MUI", "Postman", "Git", "Swagger"]
  },
  {
    id: "exp-3",
    role: "Full-Stack Development Workshop",
    company: "Crayon'd, Chennai",
    period: "4 Months",
    description: [
      "Gained robust hands-on experience in Sequelize ORM, NextJS page routing models, and Git-collaborated project sprints.",
      "Contributed to the live architectural implementation of real-world backend routes, perfecting clean API response patterns and data handling."
    ],
    skills: ["Next JS", "Sequelize (ORM)", "React JS", "Node.js", "Express JS", "MySQL", "Git"]
  },
  {
    id: "exp-4",
    role: "Student Special Group (SSG) Member",
    company: "Bannari Amman Institute Of Technology",
    period: "1.5 Years",
    description: [
      "Engineered 'PS Events' event management server layers and built a collaborative real-time code editor for HTML/CSS/JS using React and Ace Editor.",
      "Designed data schemas for 'Bit Stores', an inventory management system monitoring transaction flow patterns."
    ],
    skills: ["React JS", "Node JS", "Ace Editor", "HTML/CSS", "MySQL", "JavaScript", "C++"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Systems",
    skills: [
      "Node JS",
      "Nest JS",
      "Express JS",
      "Sequelize (ORM)",
      "TypeORM",
      "Kafka",
      "BullMQ",
      "ClickHouse",
      "RisingWave"
    ]
  },
  {
    title: "Frontend & Web",
    skills: [
      "React JS",
      "Next JS",
      "Redux",
      "MUI (Material UI)",
      "Tailwind CSS",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "AWS S3",
      "ClickHouse"
    ]
  },
  {
    title: "DevOps & Languages",
    skills: [
      "C++",
      "C",
      "Python",
      "TypeScript",
      "JavaScript",
      "GitHub Actions",
      "Docker",
      "Git",
      "Swagger",
      "Postman",
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "PS Events (Group)",
    description: "An administrative event management platform where coordinators create and manage events, while students register, participate, and complete level rewards.",
    overview: "Built as a robust backend-managed services engine. It streamlines high-concurrency seat locking and real-time ticket slot checks to prevent duplicate registrations under heavy traffic conditions.",
    contributions: [
      "Structured resilient backend routes and database controller routines using Node JS, Express JS, and MySQL.",
      "Engineered automated session verification logic safeguarding administrative controls.",
      "Assisted in React JS front-end bindings, rendering responsive seat quotas, states, and participant tracking views."
    ],
    techStack: ["React JS", "Node JS", "Express JS", "MySQL", "JavaScript", "Git"],
    githubUrl: "https://github.com/DharshiniPandian/PS_Events.git"
  },
  {
    id: "proj-2",
    title: "Karma Calculator (Group)",
    description: "An environmental tracking system analyzing dynamic client-side carbon footprints and offsetting estimations mapped with reliable databases.",
    overview: "A calculations engine mapping user activities to estimated carbon footprint units, detailing precise volumes of trees required to neutralize corresponding greenhouse output.",
    contributions: [
      "Engineered carbon calculator equations based on mathematical models and regional emission guidelines.",
      "Created highly efficient Node JS API endpoints interacting with MySQL databases using Sequelize ORM schemas.",
      "Implemented schema indexes on submission times, maximizing calculation pipeline performance."
    ],
    techStack: ["Node JS", "Express JS", "Sequelize (ORM)", "MySQL", "JavaScript", "Postman"],
    githubUrl: "https://github.com/DharshiniPandian/karmaCalculatorBackend.git"
  },
  {
    id: "proj-3",
    title: "Alumni Tracking System (Group)",
    description: "An administrative portal connecting alumni with academic institutions to verify certificates, track career updates, and coordinate events.",
    overview: "Structures secure records for alumni verification. Implements deep search parameters allowing administrators to query alumni datasets rapidly via multi-level filter queries and clean UI forms.",
    contributions: [
      "Authored fully responsive frontend interfaces in React JS utilising Material UI (MUI).",
      "Coordinated PostgreSQL migration setups and database schema relations under Node JS & Express.",
      "Built resilient validation middleware for peer certificates uploads and contact channels."
    ],
    techStack: ["React JS", "Node JS", "Express JS", "PostgreSQL", "MUI", "JavaScript", "Git"],
    githubUrl: "https://github.com/Harinirpm/Alumini_Tracking_System/tree/Dharshini"
  },
  {
    id: "proj-4",
    title: "Random Password Generator (Individual)",
    description: "An intuitive utility tool facilitating password configuration based on user-defined lengths, special registers, and numerical matrices.",
    overview: "Promotes strict visual responsive feedback, utilizing direct React state variables to guarantee high-entropy password exports without background server requirements.",
    contributions: [
      "Developed custom character masking filters in pure React JS and JavaScript.",
      "Crafted an interactive user experience with responsive strength indicators and rapid clipboard bindings.",
      "Styled a neat, minimalist, mobile-friendly interface showcasing clean custom UI state transitions."
    ],
    techStack: ["React JS", "JavaScript", "HTML", "CSS", "Git"],
    githubUrl: "https://github.com/DharshiniPandian/PasswordGenerator.git",
    liveUrl: "https://github.com/DharshiniPandian/PasswordGenerator.git"
  },
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Dharsh_BIT/",
    username: "Dharsh_BIT",
    badge: "Active Solver",
    score: "Algorithms & DS"
  },
  {
    name: "GeeksForGeeks",
    url: "https://www.geeksforgeeks.org/user/dharshiniph74s/",
    username: "dharshiniph74s",
    badge: "Problem Solving",
    score: "Rank 26 (College)"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/dharshinipandia1",
    username: "dharshinipandia1",
    badge: "5 Star C++ & DS",
    score: "SQL & Algorithms"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/dharshini64",
    username: "dharshini64",
    badge: "Continuous Competitor",
    score: "Division Rank"
  },
  {
    name: "Coding Ninjas",
    url: "https://www.naukri.com/code360/profile/1f3aaad8-ab9b-4814-a9f1-b04989aa9067",
    username: "dharshini",
    badge: "Algorithm Practise",
    score: "Active Learner"
  }
];
