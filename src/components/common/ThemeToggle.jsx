import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 flex items-center justify-center w-12 h-12 text-black transition bg-white border border-gray-200 rounded-full shadow-lg bottom-6 right-6 dark:bg-zinc-900 dark:text-white dark:border-white/10 hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
