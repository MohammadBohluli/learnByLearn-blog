export type UIState = {
  theme: string | null;
};

type UIActions = {
  setTheme: (themeMode: string) => void;
};

export type UISlice = UIState & UIActions;
