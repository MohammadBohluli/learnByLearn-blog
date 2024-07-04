import { ReactNode } from "react";

export interface SidebarItem {
  id: number;
  label: string;
  path: string;
  icon?: ReactNode;
  active?: boolean;
  submenue?: boolean;
  submenueItem?: SidebarItem[];
}

export interface SidebarItemProps {
  item: SidebarItem;
  selectedItem?: number;
  onSelectedItem?: (itemId: number) => void;
  onOpenMobileSidebar?: () => void;
}
