/** Lucide icon names — mapped in `components/ui/SkillLucideIcon.tsx`. */
export type SkillIconId =
  | "Code2"
  | "Atom"
  | "Wind"
  | "Braces"
  | "Server"
  | "FileCode2"
  | "Globe"
  | "ShoppingBag"
  | "LayoutGrid"
  | "LayoutDashboard"
  | "PanelsTopLeft"
  | "Sparkles"
  | "Gauge"
  | "PenTool"
  | "Palette"
  | "Database"
  | "Layers";

export type SkillItem = {
  name: string;
  icon: SkillIconId;
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "Atom" },
      { name: "Modern UI", icon: "Palette" },
      { name: "Next.js", icon: "Code2" },
      { name: "Tailwind CSS", icon: "Wind" },
      { name: "JavaScript", icon: "Braces" },
      { name: "HTML · CSS · Bootstrap", icon: "PenTool" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP", icon: "FileCode2" },
      { name: "Node.js", icon: "Server" },
      { name: "MySQL", icon: "Database" },
      { name: "PostgreSQL", icon: "Database" },
    ],
  },
  {
    category: "CMS",
    items: [
      { name: "WordPress", icon: "Globe" },
      { name: "Shopify", icon: "ShoppingBag" },
      { name: "Squarespace", icon: "LayoutGrid" },
      { name: "Wix", icon: "Layers" },
    ],
  },
  {
    category: "Platforms & delivery",
    items: [
      { name: "CRM dashboards", icon: "LayoutDashboard" },
      { name: "Admin panels", icon: "PanelsTopLeft" },
      { name: "AI integrations", icon: "Sparkles" },
      { name: "Performance optimization", icon: "Gauge" },
    ],
  },
];
