import { create } from 'zustand';

const usePortfolioStore = create((set) => ({
  personalInfo: {
    name: "M. Kamran Hanif",
    role: "Junior MERN Stack Developer",
    roleExtended: "Aspiring MERN Stack Developer",
    greeting: "Building interactive and dynamic full-stack web experiences.",
    bio: "Front-End Developer specializing in React-based web applications with a strong command of modern JavaScript and responsive design, actively transitioning into full-stack MERN (MongoDB, Express.js, React, Node.js) development. BS IT student with demonstrated expertise in building interactive, user-centric interfaces using React, Vite, and contemporary web standards. Proficient in component architecture, DOM manipulation, state management, and CSS styling. Currently expanding backend capabilities with Node.js, Express.js, and MongoDB to deliver complete end-to-end solutions. Committed to writing clean, maintainable, and performant code while adhering to industry best practices. Strong problem-solving abilities with a passion for creating exceptional user experiences across the entire stack.",
    phone: "+92 3257062196",
    email: "mkamranhanif012@gmail.com",
    github: "https://github.com/mkamranhanif",
    linkedin: "https://linkedin.com/in/mkamranhanif",
  },
  skills: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "C++", "HTML5", "CSS3"] },
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Shadcn/ui", "Responsive Design", "Vite", "CSS Modules"] },
    { category: "MERN Stack", items: ["MongoDB", "Express.js", "React.js", "Node.js"], description: "End-to-end JavaScript ecosystem for building scalable, production-ready web applications — from MongoDB databases to React interfaces." },
    { category: "Backend & Databases", items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Supabase (PostgreSQL)", "RESTful APIs", "CRUD Operations"] },
    { category: "Tools & DevOps", items: ["Git/GitHub", "npm", "Vite", "Postman", "Clerk", "Stripe", "Vercel", "Stitch", "ESLint"] },
    { category: "Concepts", items: ["State Management (Zustand, Context API)", "DSA", "Async Programming", "MVC Architecture", "API Integration", "Auth & Authorization", "Component Architecture"] }
  ],
  projects: [
    {
      title: "Product Admin Dashboard",
      year: "2026",
      techStack: ["React", "Zustand", "TailwindCSS"],
      description: "Built a functional timer application with start, pause, and reset features. Improved understanding of DOM manipulation and JavaScript event handling.",
      link: "https://product-admin-dashboard-six.vercel.app/",
      repo: "https://github.com/mkamranhanif/product-management-portal",
      type: "PERSONAL",
    },
    {
      title: "Voice Tutor",
      year: "2025",
      techStack: ["Next.js"],
      description: "Developed a comprehensive admin dashboard for product management with complex data visualization and filtering capabilities. Integrated REST APIs using Axios for real-time product data management, implemented Zustand for centralized state management, and built professional UI components using Shadcn/ui. Designed responsive grid layouts with Tailwind CSS that adapt seamlessly across different screen sizes with smooth animations and error handling.",
      link: "https://felloship-saa-s-project.vercel.app/",
      repo: "https://github.com/mkamranhanif/Voice-Tutor",
      type: "FULL STACK",
    },
    {
      title: "Charge Guard",
      year: "2025",
      techStack: ["Kotlin", "Android"],
      description: "Built a Kotlin-based mobile app with AI-assisted development that monitors battery status and triggers an alarm at 100%. Collected requirements to define the scope and alert behavior. Used GitHub Actions to build the Android app from source.",
      link: "#",
      repo: "https://github.com/mkamranhanif/Charge-Guard",
      type: "MOBILE",
    },
    {
      title: "Pomodoro Timer",
      year: "2026",
      techStack: ["HTML", "CSS", "JavaScript"],
      description: "Built a functional timer application with start, pause, and reset features. Improved understanding of DOM manipulation and JavaScript event handling.",
      link: "https://pomodoro-timer-ten-brown.vercel.app/",
      repo: "https://github.com/mkamranhanif/Pomodoro-Timer",
      type: "PERSONAL",
    },
    {
      title: "JS Calculator",
      year: "2025",
      techStack: ["HTML", "CSS", "JavaScript"],
      description: "Developed a responsive calculator capable of performing basic arithmetic operations. Practiced JavaScript logic building and UI interaction handling.",
      link: "#",
      repo: "https://github.com/mkamranhanif/js-calculator",
      type: "PERSONAL",
    },
    {
      title: "Todo App",
      year: "2026",
      techStack: ["React.js"],
      description: "Created a task management application with add and delete functionality. Learned React component structure, state management, and dynamic rendering.",
      link: "#",
      repo: "https://github.com/mkamranhanif/TODO-App",
      type: "PERSONAL",
    },
    {
      title: "Tic Tac Toe Game",
      year: "2024",
      techStack: ["C++"],
      description: "Built a console-based Tic Tac Toe game in C++ with a clean turn-based flow. Implemented win/draw detection using a 3x3 board representation and condition checks. Added input validation to prevent invalid moves and improve gameplay reliability.",
      link: "#",
      repo: "#",
      type: "CONSOLE",
    }
  ],
}));

export default usePortfolioStore;
