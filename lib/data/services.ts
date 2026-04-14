import type { SkillIconId } from "./skills";

export type Service = {
  title: string;
  description: string;
  icon: SkillIconId;
};

export const services: Service[] = [
  {
    title: "Web development",
    description:
      "Custom React & Next.js experiences, PHP and Node backends, and pixel-perfect responsive UI with performance budgets baked in.",
    icon: "Code2",
  },
  {
    title: "CMS development",
    description:
      "WordPress, Shopify, and Squarespace builds — themes, plugins, headless setups, and handover your team can maintain.",
    icon: "Globe",
  },
  {
    title: "CRM development",
    description:
      "Dashboards, admin panels, and internal tools that make pipelines visible — role-based access, clean IA, and fast tables.",
    icon: "LayoutDashboard",
  },
  {
    title: "AI integration",
    description:
      "Practical AI features wired into your product — assistants, summarization, and automation without compromising UX or latency.",
    icon: "Sparkles",
  },
];
