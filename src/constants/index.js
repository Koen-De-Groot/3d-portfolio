const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Courses" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 110, suffix: "%", label: "Focus and determination" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Starting my programming journey in college, I pursued a comprehensive Software Developer degree with dedication and passion. My academic excellence was recognized with magna cum laude honors, reflecting my commitment to mastering the fundamentals of software development.",
    imgPath: "/images/csharp.png",
    logoPath: "/images/csharp.png",
    title: "Software Developer Degree - Magna Cum Laude",
    date: "College Education",
    responsibilities: [
      "Mastered C# programming language for object-oriented development and desktop applications.",
      "Learned SQL database design, queries, and data management principles.",
      "Built proficiency in web technologies including HTML, CSS, and JavaScript for frontend development.",
      "Gained expertise in REST APIs for building scalable web services and integrations.",
      "Learned Git and GitHub for version control, collaboration, and code management best practices.",
    ],
  },
  {
    review:
      "What started as an internship quickly turned into a full-time opportunity due to my performance and dedication. The team was impressed with the quality of work and problem-solving approach, leading to a job offer that launched my professional career.",
    imgPath: "/images/vue.png",
    logoPath: "/images/vue.png",
    title: "Frontend Developer - Vue.js",
    date: "September 2022 - Present",
    responsibilities: [
      "Developed responsive and interactive user interfaces using Vue.js framework.",
      "Collaborated with design teams to implement pixel-perfect components and user experiences.",
      "Maintained and enhanced existing Vue.js applications with new features and improvements.",
      "Mastered Azure DevOps for project management, CI/CD pipelines, and team collaboration.",
    ],
  },
  {
    review:
      "Over the years, I've completely fallen in love with web development and dedicated my free time to exploring the latest technologies. My passion drives me to continuously learn and experiment with cutting-edge frameworks and AI integration, creating innovative side projects that push the boundaries of what's possible.",
    imgPath: "/images/react.png",
    logoPath: "/images/react.png",
    title: "Passionate Web Developer - Side Projects",
    date: "Present - Future",
    responsibilities: [
      "Mastered modern frontend technologies including React, Next.js, Vite, and TypeScript for building scalable applications.",
      "Developed expertise in styling with Tailwind CSS and component libraries like shadcn/ui for consistent design systems.",
      "Built full-stack applications using database solutions like Prisma and Drizzle with modern deployment platforms like Vercel and Netlify.",
      "Integrated AI technologies through OpenRouter and various AI providers to create intelligent web applications.",
      "Implemented state management and data fetching with TanStack Query and real-time capabilities with Convex.",
      "Created engaging user experiences with advanced animations using GSAP and modern web APIs.",
      "Continuously learning and applying new technologies through hands-on project development and experimentation.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  abilities,
  counterItems,
  expCards,
  expLogos,
  navLinks,
  socialImgs,
  techStackIcons,
  techStackImgs,
  words,
};
