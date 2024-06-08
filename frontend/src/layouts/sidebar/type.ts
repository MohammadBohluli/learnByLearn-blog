import { ReactNode } from "react";

export interface SidebarContextType {
  expanded: boolean;
}

export interface PropsSidebarItem {
  icon: ReactNode;
  text: string;
  active?: boolean;
}
