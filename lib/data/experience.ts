export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  summary: string;
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Head of Production",
    org: "Hypertech Verse",
    period: "Jun 2024 — Present",
    summary:
      "Leading the development and production team, managing workflows, and shipping high-quality digital products for US and Canadian businesses.",
    current: true,
  },
  {
    role: "Freelance Web Developer",
    org: "Fiverr",
    period: "Jan 2021 — Present",
    summary:
      "100+ projects delivered for global clients (USA & UK). 5-star rating, Level One Seller — WordPress, Shopify, custom builds, and ongoing support.",
  },
  {
    role: "Web Development Trainer",
    org: "Government Polytechnic Institute",
    period: "Jan 2024 — Jul 2024",
    summary:
      "Delivered curriculum on UI/UX fundamentals and CMS development for students entering the industry.",
  },
  {
    role: "Head of Production / Senior Web Developer",
    org: "Billstech",
    period: "2022 — 2024",
    summary:
      "Owned production pipelines, senior-level implementation, and cross-functional coordination for client deliverables.",
  },
  {
    role: "Web Developer",
    org: "Marediasoft",
    period: "2021 — 2022",
    summary:
      "Built and maintained client websites with focus on performance, responsive layouts, and CMS customization.",
  },
  {
    role: "Project Manager",
    org: "RIZ Technologies",
    period: "—",
    summary:
      "Coordinated timelines, stakeholder communication, and delivery across technology initiatives.",
  },
  {
    role: "Internship",
    org: "Engitech Services",
    period: "—",
    summary:
      "Foundational experience across the web stack and professional development workflows.",
  },
];
