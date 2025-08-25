import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "AMAN",
  initials: "AM",
  url: "https://amanullah.netlify.app",
  location: "Islamabad, Pakistan",
  locationLink: "https://www.google.com/maps/place/Pakistan",
  description:
    "Full-Stack Developer specializing in React, Next.js, Web3 integrations, and AI-driven apps.",
  summary: 'I have a [background in computer science](/#education), which laid the foundation for my work in building scalable web applications. I’ve spent the last 2.5+ years building scalable web applications and dashboards with React, Next.js, and TypeScript. Recently, I [re-engineered CarAdvisers](https://www.caradvisers.com/), rewriting core components, business logic, and the admin panel to improve scalability and maintainability. I’ve worked on [projects](/#projects) in marketplaces, agency platforms, and Web3 integrations (Ethereum, Polygon, Solana) using wallets like WalletConnect and Phantom . My [experience](/#work) includes Node.js, Express, and Firebase for backend services and real-time data. Currently, I’m exploring AI and LLM integrations in Next.js, including local model setups and memory systems.',
  avatarUrl: "/me.jpg",

  skills: [
    "React",
    "Next.js",
    "Javaccript",
    "Typescript",
    'Tailwind',
    'Mui',
    "Node.js",
    "Express",
    "Firebase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amanu4519@gmail.com",
    tel: "+92 3045461456",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aman-456",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amanullah01/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      whatsapp: {
        name: "Send Message",
        url: "https://wa.me/923045461456?text=Hi%20there!%20I%20want%20to%20connect.",
        icon: Icons.message,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "amanu4519@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Car Advisers",
      href: "https://caradvisers.com/",
      badges: ["core team member",  "onsite"],
      location: "Islamabad, Pakistan",
      title: "Full Stack Developer",
      logoUrl: "/exprience/caradvisers.png",
      start: "Dec 2024",
      end: "Present",
      description:
        "Developed a comprehensive automotive marketplace platform similar to PakWheels with multi-product capabilities. Built features for buying/selling cars, bikes, and auto parts, integrated admin dashboards, inspection systems, auction sheets, and specialized sections for armoured and electric vehicles. Implemented user profiles, dealer profiles, workshop profiles with public/private route management and data encryption for secure transactions.",
    },

    {
      company: "Crickmoney",
      badges: ["lead developer", "remote"],
      href: "https://www.crickmoney.com/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/exprience/crickmoney.png",
      start: "Jul 2024",
      end: "Dec 2024",
      description:
        "Developed and deployed a gaming platform using Next.js with integrated payment gateways including JazzCash and EasyPaisa. Built a token-based system where users purchase tokens to access WebGL games. Managed full-stack development and deployment while collaborating with Unity game developers to create seamless gaming experiences.",
    },
    {
      company: "Aztechzone",
      badges: ["sole MERN developer", "remote"],
      href: "https://www.aztechzone.com/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/exprience/aztechzone.png",
      start: "Aug 2023",
      end: "Nov 2023",
      description:
        "Built a complete MERN stack solution including company website frontend and comprehensive admin dashboard. Developed CRUD functionality for blog management, game information, team member profiles, testimonials, and contact form handling. Implemented seamless data fetching and display across client-facing and administrative interfaces.",
    },

    {
      company: "Intelgency",
      badges: ["Senior MERN developer", "onsite"],
      href: "https://www.intelgency.com/",
      location: "Islamabad, Pakistan",
      title: "Full Stack Developer",
      logoUrl: "/exprience/intelgency.jfif",
      start: "Nov 2023",
      end: "Nov 2024",
      description:
        "Transitioned from team member to full-stack lead developer specializing in Web3 technologies. Led development of multiple blockchain projects including CroFunds.me (crowdfunding platform), Mystery Madness (multi-chain gaming on Solana and Ethereum), and Spoflex (sports events platform). Implemented wallet connections, token transactions, contest systems, and marketplace functionality using Next.js and Tailwind CSS.",
    },

    {
      company: "Intelgency",
      badges: ["react specialist", "onsite"],
      href: "https://www.intelgency.com/",
      location: "Islamabad, Pakistan",
      title: "Front End Developer",
      logoUrl: "/exprience/intelgency.jfif",
      start: "April 2022",
      end: "Feb 2023",
      description:
        "Started as React developer working on multiple projects as team member. Developed frontend solutions using React, focusing on user interface development and component architecture. Gained experience in collaborative development and modern frontend frameworks.",
    },
    {
      company: "T4tutorials",
      href: "https://t4tutorials.com",
      badges: ["intern", "onsite"],
      location: "Rawalpindi, Pakistan",
      title: "Front End Developer",
      logoUrl: "",
      start: "Aug 2020",
      end: "Jan 2021",
      description:
        "Completed internship focused on learning frontend development fundamentals. Gained hands-on experience with HTML, CSS, JavaScript, and modern web development practices. Built foundational skills in responsive design and user interface development.",
    },

  ],
  education: [
    {
      school: "PMAS AAUR",
      href: "https://www.uaar.edu.pk/index.php",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/education/PMAS.png",
      start: "2018",
      end: "2022",
    },
    {
      school: "ICB",
      href: "https://uwaterloo.ca",
      degree: "Pre-Engineering",
      logoUrl: "/education/HEC.gif",
      start: "2016",
      end: "2018",
    },

  ],
  projects: [
    {
      title: "Car Advisers",
      href: "https://caradvisers.com/",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://caradvisers.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/projects/caradvisers.webm",
    },
    {
      title: "Street Food",
      href: "https://streetfoodmarkets.co/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A multivendor food street app",
      technologies: [
        "React Js",
        "Mui",
        "Express Js",
        "Mongodb",
        "Full Stack"
      ],
      links: [
        {
          type: "Website",
          href: "https://streetfoodmarkets.co/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video:         "/projects/streetfoods.webm",

    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },


    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },


  ],
} as const;
