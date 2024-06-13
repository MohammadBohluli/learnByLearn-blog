import { ReactNode } from "react";

export interface SidebarContextType {
  expanded: boolean;
  selectedItem: number;
  onSelectedItem: (itemId: number) => void;
}

export interface PropsSidebarItem {
  icon: ReactNode;
  text: string;
  active?: boolean;
}
