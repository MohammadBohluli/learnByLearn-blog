export type UIState = {
  theme: string | null;
  isOpenDropDownTheme: boolean;
};

type UIActions = {
  setTheme: (themeMode: string | null) => void;
  setIsOpenDropDownTheme: (isOpen: boolean) => void;
};

export type UISlice = UIState & UIActions;
