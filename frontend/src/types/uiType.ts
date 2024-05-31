export type UIState = {
  theme: string | null;
};

type UIActions = {
  setTheme: (themeMode: string | null) => void;
};

export type UISlice = UIState & UIActions;
