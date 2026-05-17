const site = {
  person: {
    name: "Giriraj Parihar",
    handle: "gb3335",
    role: "Full Stack Developer",
    location: "Bikaner, Rajasthan, India",
    email: "girirajparihaar@gmail.com",
    tagline:
      "I build reliable web products across React, Next.js, Node.js, PHP, AWS, and serverless systems.",
    intro:
      "Software engineer with a practical bias for shipping clear interfaces, stable backends, and maintainable systems. This site is intentionally data-driven so projects, writing, and photography can be updated without redesigning the whole thing.",
    portrait: "/assets/img/portfolio/1.png",
    resumeUrl:
      "https://drive.google.com/file/d/1iqXBAwvYgXjNvFtHuYmBpZTozOpo67cu/view?usp=sharing",
    links: [
      { label: "GitHub", href: "https://github.com/gb3335" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/girirajparihar/" },
      { label: "Instagram", href: "https://www.instagram.com/gb3335/" },
    ],
  },
  nav: [
    { label: "Portfolio", href: "/" },
    { label: "Thoughts", href: "/thoughts" },
    { label: "Lens", href: "/lens" },
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PHP",
    "Laravel",
    "AWS Lambda",
    "AWS Amplify",
    "Docker",
    "MySQL",
    "CI/CD",
    "Figma",
  ],
  experience: [
    {
      title: "Sr. Programmer Analyst",
      company: "Osmosis Learn, Singapore",
      period: "Sep 2020 - Present",
      summary:
        "Building and maintaining production learning systems across web, cloud, and automation workflows.",
    },
    {
      title: "Web Developer Intern",
      company: "50Hands, Canada",
      period: "May 2020 - Sep 2020",
      summary:
        "Worked on client-facing web development and delivery practices in a remote team.",
    },
    {
      title: "Product Developer",
      company: "HEB, India",
      period: "Oct 2016 - Jun 2019",
      summary:
        "Built early product and web systems while studying, covering frontend, backend, and deployment tasks.",
    },
  ],
  projects: [
    {
      title: "JTEKT",
      type: "Client Website",
      image: "/assets/img/portfolio/freelance/jtekt.png",
      href: "https://jtekt.ae",
      summary: "Corporate web presence with a clear product and services structure.",
      stack: ["Web", "Frontend", "CMS"],
    },
    {
      title: "Prime Architecture College",
      type: "Education Website",
      image: "/assets/img/portfolio/freelance/prime.png",
      href: "https://primearchitecture.in",
      summary: "Institutional website for admissions, programs, and public information.",
      stack: ["Web", "Education", "Content"],
    },
    {
      title: "Cynergy Sports",
      type: "Sports Platform",
      image: "/assets/img/portfolio/freelance/cynergysports.png",
      href: "https://cynergysports.com/",
      summary: "Sports-focused web project with public-facing brand and service pages.",
      stack: ["Web", "Brand", "Frontend"],
    },
    {
      title: "A Milk Man",
      type: "Commerce Website",
      image: "/assets/img/portfolio/freelance/milkman.png",
      href: "https://www.amilkman.com/",
      summary: "Consumer web experience for a local delivery and product business.",
      stack: ["Web", "Commerce", "Operations"],
    },
  ],
  thoughts: [
    {
      title: "Keeping Personal Sites Easy To Update",
      date: "2026-05-18",
      status: "Draft",
      excerpt:
        "A personal site survives when new posts and projects are plain data edits, not a redesign every time.",
      slug: "keeping-personal-sites-easy-to-update",
    },
    {
      title: "Notes From Building Web Products Remotely",
      date: "2026-05-18",
      status: "Draft",
      excerpt:
        "Short notes on communication, ownership, and keeping product work moving across time zones.",
      slug: "building-web-products-remotely",
    },
  ],
  lens: [
    {
      title: "Travel Frames",
      location: "India",
      image: "/assets/img/thumbs/4-3.jpg",
      href: "",
      note:
        "Replace this with a Google Photos album share link or a local image path when ready.",
    },
    {
      title: "City Details",
      location: "Bikaner",
      image: "/assets/img/thumbs/3-4.jpg",
      href: "",
      note:
        "Use this slot for street, texture, and everyday observation photographs.",
    },
    {
      title: "Quiet Landscapes",
      location: "On the road",
      image: "/assets/img/thumbs/40-25.jpg",
      href: "",
      note:
        "Add a public Google Photos URL in the href field to send visitors to the album.",
    },
  ],
};

export default site;
