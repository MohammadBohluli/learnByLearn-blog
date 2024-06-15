import { ReactNode } from "react";

export interface SidebarItem {
  id: number;
  label: string;
  path: string;
  icon: ReactNode;
  active: boolean;
  submenue: boolean;
}

export interface AdminSidebarItemProps {
  item: SidebarItem;
  selectedItem?: number;
  onClick?: () => void;
}
