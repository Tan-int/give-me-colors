import { createContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // get initial theme or default to dark on undefined
  const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'light' ? 'light' : 'dark';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // set theme each time provider renders, will render on mount and theme change
  localStorage.setItem('theme', theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
