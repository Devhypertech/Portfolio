import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Braces,
  Code2,
  Database,
  FileCode2,
  Gauge,
  Globe,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  Palette,
  PanelsTopLeft,
  PenTool,
  Server,
  ShoppingBag,
  Sparkles,
  Wind,
} from "lucide-react";
import type { SkillIconId } from "@/lib/data/skills";

const MAP: Record<SkillIconId, LucideIcon> = {
  Code2,
  Atom,
  Wind,
  Braces,
  Server,
  FileCode2,
  Globe,
  ShoppingBag,
  LayoutGrid,
  LayoutDashboard,
  PanelsTopLeft,
  Sparkles,
  Gauge,
  PenTool,
  Palette,
  Database,
  Layers,
};

export function SkillLucideIcon({
  id,
  className,
}: {
  id: SkillIconId;
  className?: string;
}) {
  const Icon = MAP[id];
  return <Icon className={className} aria-hidden />;
}
