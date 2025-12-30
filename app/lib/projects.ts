export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  content: string;
  date: string;
  role: string;
};

export const projects: Project[] = [
  {
    slug: "minimalist-interior-design",
    title: "Minimalist Interior Design",
    description:
      "A clean and functional interior design approach for modern living spaces.",
    category: "Interior Design",
    image: "/minimalist-interior.png",
    content: "Full project details about the minimalist interior design...",
    role: "Admin",
    date: "2024-03-15",
  },
  {
    slug: "urban-architecture-reimagined",
    title: "Urban Architecture Reimagined",
    description:
      "Sustainable and community-focused architectural solutions for urban environments.",
    category: "Architecture",
    image: "/modern-urban-architecture.jpg",
    content: "Full project details about the urban architecture project...",
    role: "Admin",
    date: "2024-02-20",
  },
  {
    slug: "digital-experience-platform",
    title: "Digital Experience Platform",
    description:
      "A seamless digital ecosystem designed to enhance user engagement.",
    category: "Digital Design",
    image: "/digital-experience-ui-ux.jpg",
    content: "Full project details about the digital experience platform...",
    role: "tester",
    date: "2024-01-10",
  },
  // {
  //   slug: "minimalist-interior-design-ewrw",
  //   title: "Miniewfrewfewsign",
  //   description:
  //     "A clean and functional interior design approach for modern living spaces.",
  //   category: "test 1",
  //   image: "/minimalist-interior.png",
  //   content: "Full project details about the minimalist interior design...",
  // role: "Admin",
  //   date: "2024-03-15",
  // },
  // {
  //   slug: "urban-architerdtered",
  //   title: "Urbdsfdsvdxvgined",
  //   description:
  //     "Sustainable and community-focused architectural solutions for urban environments.",
  //   category: "test 2",
  //   image: "/modern-urban-architecture.jpg",
  //   content: "Full project details about the urban architecture project...",
  // role: "Admin",
  //   date: "2024-02-20",
  // },
  // {
  //   slug: "digital-sdfdsflatform",
  //   title: "Digdsgsdfdsm",
  //   description:
  //     "A seamless digital ecosystem designed to enhance user engagement.",
  //   category: "test 3",
  //   image: "/digital-experience-ui-ux.jpg",
  //   content: "Full project details about the digital experience platform...",
  // role: "Admin",
  //   date: "2024-01-10",
  // },
];
