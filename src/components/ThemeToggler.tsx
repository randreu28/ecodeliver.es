import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export default function ThemeToggler({ ...props }: Props) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() =>
    document.cookie.includes("theme=dark")
  );

  const toggleTheme = () => {
    const currentTheme = isDarkMode ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Update the document class and cookie
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
    document.cookie = `theme=${newTheme};path=/`;

    // Update the state
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme} aria-label="Cambiar tema" {...props}>
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sun"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}
