import useTheme from '@/hooks/useTheme';
import { MoonStar, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="h-fit" onClick={toggleTheme}>
      {theme === 'light' ? <Sun /> : <MoonStar />}
    </button>
  );
}
