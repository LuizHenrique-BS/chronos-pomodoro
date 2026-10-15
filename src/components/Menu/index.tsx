import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();


    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark";
    });
  }

  // atualiza o html do tema
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        to="/"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to="/history"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to="/settings"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </Link>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={(event) => handleThemeChange(event)}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
