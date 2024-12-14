import cisco from "../../public/cisc.png";
import book from "../../public/b.png";
import afca from "../../public/afca.png";
import yeabrak from "../../public/yeabrak.png";
import rec from "../../public/rec.png";
import astmari from "../../public/astmari.png";
import coders from "../../public/coder.png";
import m from "../../public/m.png";

export const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Services",
    href: "#services",
  },

  {
    name: "Contact",
    href: "#contact",
  },
] as const;

export const projectsData = [

  {
    title: "Yeabrak",
    description:
      `Yeabrak is pregnancy companion app, 
      designed to offer expectant mothers personalized health
       recommendations`,
    tags: ["React.js", "React query", "Mantine ui", "Django"],
    imageUrl: yeabrak,
    href: 'https://app.yeabrak.com/'
  },
  {
    title: "Coders Social Media",
    description:
      `Coders social media is social mediaapp, 
      designed for coders to share code snippets and connect with other coders.`,
    tags: ["Nuxt", "Mantine ui", "nest.js", "Mongodb"],
    imageUrl: coders,
    href: 'https://app.coders.com/'
  },

  {
    title: "5killo bookclub",
    description:
      "This site was developed for the 5kilo AAIT Fellowship Book Club students.",
    tags: ["React", "Nextjs", "React query", "Shadcn ui", "Nest.js", "Mongodb"],
    imageUrl: book,
    href: 'https://bookclub-5kilo.vercel.app/'
  },
  {
    title: "Addis Astemari",
    description:
      `Addis Astemari helps schools and educators in creating 
      fully customizable teaching websites, as well as in building and selling online courses.`,
    tags: ["Nextjs", "Mantine ui", "Tailwindcss"],
    imageUrl: astmari,
    href: 'https://www.addisastemari.com/'
  },
  {
    title: "AFCA",
    description:
      `The website was developed for AFCA event registration. 
      For demonstration purposes, use the these credentials:   demoAdmin@gmail.com password - 123123123.`,
    tags: ["Nextjs", "React query", "Shadcn ui", "Express.js", "Mongodb"],
    imageUrl: afca,
    href: 'https://purchase.afca.coffee/'
  },

  {
    title: "Merine",
    description:
      `Merine is dedicated to listing businesses across various categories, 
      where users can explore detailed profiles, leave reviews, and rate their experiences. `,
    tags: ["Nextjs", "React query", "Shadcn ui", "Express.js", "Mongodb"],
    imageUrl: m,
    href: 'https://www.merinbd.com/'
  },





] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Nestjs",
  "Strapi cms",
] as const;


export const service = [
  {
    description: "With expertise in the MERN Stack, TypeScript, and Next.js, I specialize in building custom web applications that are optimized for performance, security, and scalability. Whether you need a dynamic single-page application or a complex multi-page solution, I can deliver robust solutions tailored to your needs.",
    tag: "Cutting-edge Tech Stacks",
    title: "Web Application Development",
    headerText: "I have experience with popular frameworks such as React, Vue, and Node.js."
  },
  {
    description: "Leveraging my API development skills, I can help you build powerful and scalable APIs that seamlessly connect your applications to any service. From RESTful APIs to GraphQL, I ensure smooth integration and efficient communication between your systems and external services.",
    tag: "Efficient and Scalable APIs",
    title: "API Development",
    headerText: "Empowering Your Applications with Seamless Third-Party Integrations."
  },
  {
    description: "As a dedicated UI/UX designer, I can help create intuitive and visually appealing user interfaces that enhance the user experience. I focus on usability and aesthetics, ensuring that your applications are not only functional but also enjoyable to use.",
    tag: "User-Centric Design",
    title: "UI/UX Design",
    headerText: "Crafting User-Focused Interfaces for Seamless App Experiences."
  }
] as const;


