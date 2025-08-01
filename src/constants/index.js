export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: 'PictoPixi-Ai Text To ImageGenerator ',
    desc: 'PictoPixi is a fully responsive  built with Tailwind CSS, React, MongoDatabase and Clipdrop api. Designed for a sleek and modern look, it offers a pixel-perfect layout, smooth responsiveness, and a clean design that adapts seamlessly across all devices.',
    subdesc:
      'Picto-Pixi is a powerful AI-based text-to-image generator web app that allows users to sign up or log in, enter a text prompt, and instantly generate stunning images using AI. Users can track and use their credit balance to generate new images, download them, or buy more credits.',
    href: 'https://github.com/Sourav-eng/PictoPixi',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/favicon.svg',


    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Clipdropai',
        path: '/assets/clipdropai.jpg',
      },


    ],
  },
  {
    title: 'Spotify Clone- A Music Listening App',
    desc: 'Spotify Clone is a Software-as-a-Service platform that transforms the way listen music, create your own albums. mplemented features such as play/pause, next/previous track navigation, volume control, and a progress bar',
    subdesc:
      'Built as a unique Software-as-a-Service app with Html, CSS, JavaScript,  App is designed for optimal performance and scalability.',
    href: 'https://github.com/Sourav-eng/Spotify-clone',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Html',
        path: '/assets/html.png',
      },

    ],
  },
  {
    title: 'Todo-List - Instantly Create & Manage Tasks in Real-Time',
    desc: 'Boost your productivity with Todo-List – a real-time task management app that lets you create, edit, and organize tasks effortlessly',
    subdesc:
      'Stay organized and productive with Todo-List! Create, edit, and manage your tasks in real-time with seamless collaboration, instant updates, and an intuitive interface designed to keep you on track.',
    href: 'https://github.com/Sourav-eng/Todo-siite-with-react',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Html',
        path: '/assets/html.png',
      },

    ],
  },



];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [3, -7, 0] : isMobile ? [5, -5, 0] : isTablet ? [7, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 5, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-3, 3, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-15, 3, 0],
    targetPosition: isSmall ? [-6, -8, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];