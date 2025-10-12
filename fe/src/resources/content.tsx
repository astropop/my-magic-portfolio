import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Tai Tuan",
  lastName: "Le",
  name: `Tai Tuan Le`,
  role: "Software Engineer | Developer Programmer | Web Developer | Java Developer",
  avatar: "/images/avatar.png",
  email: "letuantai241@gmail.com",
  location: "Australia/Adelaide", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/astropop/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "vhttps://www.linkedin.com/in/tailt0",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Bring code into real life</>,
  featured: {
    display: false,
    title: (
      <Row gap='12' vertical='center'>
        <strong className='ml-4'>Once UI</strong>{" "}
        <Line background='brand-alpha-strong' vert height='20' />
        <Text marginRight='4' onBackground='brand-medium'>
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Tai Tuan Le, a software engineer with 9+ years of experience <br />
      in Java, React.JS, Next.JS, web apps and full-stack development.
      <br />
      Passionate about turning code into colorful life, <br />I enjoy creating
      projects that bring ideas to life. <br />
      Welcome to my portfolio.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tai is a software engineer with a passion for transforming complex
        challenges into simple, elegant design solutions. With 9+ years of
        software engineering experience, specialising in Java, web applications,
        and full-stack development, I have an interest in turning code into
        colorful life.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FPT Software, Vietnam",
        timeframe: "2017 - 2025",
        role: "Front-end Team Leader | Web Developer | Software Engineer",
        achievements: [
          <>
            Developed 5 screens for each system, including one screen rated as
            the project’s most challenging.
          </>,
          <>
            Mentored two 5-member teams, with 5 members becoming future leaders
            and others key members of other teams.
          </>,
          <>
            Built a process with over 10,000 lines of code to import large
            datasets into a database using Seasar2 Framework based on Java
            Struts 2.
          </>,
          <>
            Delivered successfully a custom SSO login system for client
            registration and login for Japanese customer systems.
          </>,
          <>Got a Valuable Person Award in 2023.</>,
          <>Promoted to sub-leader in 2021, leader in 2022.</>,
          <>
            Got a Rookie award in 2018, an award for outstanding individuals
            under 25 years old.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/company-01/image-11.jpg",
            alt: "FPT Software",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/company-01/image-09.jpg",
            alt: "Valuable Person FPT 2023",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/company-01/image-08.jpg",
            alt: "Old Team 1 FPT",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/company-01/image-07.jpg",
            alt: "Fashion show of FPT project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/company-01/image-05.jpg",
            alt: "FPT's Card",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/company-01/image-04.jpg",
            alt: "Fsoft Run On 2023",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/company-01/image-03.jpg",
            alt: "Old Team 2 FPT",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/company-01/image-10.jpg",
            alt: "Old Team 3 FPT",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/company-01/image-06.jpg",
            alt: "Team building FPT",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "DTT Technology Group, Vietnam",
        timeframe: "June 2015 - November 2017",
        role: "Web Developer | Mobile Developer | Supporter",
        achievements: [
          <>
            Participated in building, implementing and training end-users for
            the project funded by the World Bank to help people developing the
            rural water supply and sanitation
          </>,
          <>
            Designed and coded systems for city, province, district information
            portals in Vietnam using Liferay Portlets, MySQL.
          </>,
          <>
            Developed and maintained online public services for the Vietnam
            Register, Vietnam Maritime Administration using Liferay, Jasper
            Reports.
          </>,
          <>
            Helped to build and maintain the National Feedback and
            Recommendation System for the Ministry of Justice(Vietnam).
          </>,
        ],
        images: [
          {
            src: "/images/projects/company-01/image-02.jpg",
            alt: "Team building DTT",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company:
          "Hiep Thanh Telecommunication Service Join Stock Company, Vietnam",
        timeframe: "October 2014 - May 2015",
        role: "Web Developer | Mobile Developer",
        achievements: [
          <>
            Developed and enhanced old systems belong to companies using some
            technologies using PHP, JQuery, HTML, CSS.
          </>,
          <>
            Made an Android Application using Java Android about finding phone
            numbers by preference, calculating feng shui points.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Flinders University",
        description: <>Master of Information Technology</>,
      },
      {
        name: "Military Technical Academy, Vietnam",
        description: <>Bachelor of Information Technology</>,
      },
      {
        name: "Hanoi APTECH, Vietnam",
        description: <>APTECH CERTIFIED COMPUTER PROFESSIONAL (ACCP)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js, Restful API, HTML, CSS, JS",
        description: <>Building next gen apps with Next.js.</>,
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/project-05.png",
            alt: "List meeting room image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Java, SQL, HTML, CSS, JS",
        description: <>Able to develop in Java proficiently.</>,
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "MySQL",
            icon: "sql",
          },
          {
            name: "MySQL",
            icon: "sql",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "Javascript",
            icon: "javascript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/project-01.png",
            alt: "Graduation Project's Home Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-02.png",
            alt: "Graduation Project's Admin Page",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Java, SQL, Java Swing",
        description: <>A desktop application made by Java.</>,
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "MySQL",
            icon: "sql",
          },
          {
            name: "MySQL",
            icon: "sql",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/project-03.png",
            alt: "Crosswords 1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/project-04.png",
            alt: "Crosswords Admin Page",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/image-01.jpg",
      alt: "VNPSC Forum",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/image-02.jpg",
      alt: "DTT Teambuilding",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/image-03.jpg",
      alt: "Fsoft Team D",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image-04.jpg",
      alt: "Fsoft Running",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image-05.jpg",
      alt: "Fsoft's card",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image-06.jpg",
      alt: "Fsoft Teambuilding 2018",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/image-07.jpg",
      alt: "Fsoft sumup",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/image-08.jpg",
      alt: "Fsoft Team 1",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/image-09.jpg",
      alt: "VP Award",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/image-10.jpg",
      alt: "Fsoft FE Team 2",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/image-11.jpg",
      alt: "FPT",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
