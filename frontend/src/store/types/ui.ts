export type UIState = {
  theme: string | null;
  isOpenDropDownTheme: boolean;
  expandedSidebarAdmin: boolean;
};

type UIActions = {
  setTheme: (themeMode: string | null) => void;
  setIsOpenDropDownTheme: (isOpen: boolean) => void;
  setExpandedSidebarAdmin: (isExpanded: boolean) => void;
};

export type UISlice = UIState & UIActions;
