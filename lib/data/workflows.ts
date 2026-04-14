import type { LucideIcon } from "lucide-react";
import {
  KanbanSquare,
  ListTodo,
  MessageSquare,
  MessagesSquare,
  Ticket,
} from "lucide-react";

export type WorkflowTool = {
  name: string;
  description?: string;
  Icon: LucideIcon;
};

export const workflowTools: WorkflowTool[] = [
  { name: "Trello", Icon: KanbanSquare },
  { name: "Jira", Icon: Ticket },
  { name: "ClickUp", Icon: ListTodo },
  {
    name: "Slack",
    description: "Team communication",
    Icon: MessageSquare,
  },
  {
    name: "Discord",
    description: "Team communication",
    Icon: MessagesSquare,
  },
];
