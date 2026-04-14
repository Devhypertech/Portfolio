export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "North America SaaS marketing site",
    description:
      "Multi-locale Next.js marketing stack for a US client — static generation, CMS hooks for editors, and Core Web Vitals in the green.",
    tags: ["Next.js", "Tailwind", "Headless CMS"],
    href: "#contact",
  },
  {
    title: "E‑commerce rebuild on Shopify",
    description:
      "Theme architecture, custom sections, and checkout optimizations for a Canadian retailer — conversion-focused UX and analytics events.",
    tags: ["Shopify", "Liquid", "Performance"],
    href: "#contact",
  },
  {
    title: "Operations CRM dashboard",
    description:
      "Role-based CRM workspace with PHP API layer, real-time tables, and export flows — built for daily ops teams, not demos.",
    tags: ["PHP", "React", "Dashboard"],
    href: "#contact",
  },
  {
    title: "WordPress enterprise network",
    description:
      "Multisite WordPress for distributed teams — shared design system, SSO-ready patterns, and documented deployment playbooks.",
    tags: ["WordPress", "Multisite", "DevOps"],
    href: "#contact",
  },
];
