import { useState, useEffect } from "react";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import logo from "../public/images/logo.webp";

function NavBar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(preferredTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex w-full justify-between items-center mt-12  lg:mt-4  md:py-8  max-w-screen-lg mx-auto">
      <CustomLink
        link="/"
        icon={
          <div className="relative w-8 h-8 lg:w-12 lg:h-12 -translate-x-2 lg:-translate-x-3">
            <CustomImage image={logo.src} />
          </div>
        }
      ></CustomLink>

      <div className="flex space-x-4 items-center pl-4 ml-auto">
        <CustomLink
          newTab
          link="https://www.instagram.com/oguzozturk91/"
          icon={
            <img
              className="navbar-icon"
              width={20}
              src="https://www.svgrepo.com/show/83715/instagram-logo.svg"
              alt="instagram icon"
            />
          }
        ></CustomLink>
        <CustomLink
          newTab
          link="https://www.linkedin.com/in/oguzveozturk/"
          icon={
            <img
              className="navbar-icon"
              width={20}
              src="https://www.svgrepo.com/show/16193/linkedin-logo.svg"
              alt="Linkedin icon"
            />
          }
        ></CustomLink>

        <CustomLink
          newTab
          link="https://github.com/oguzveozturk"
          icon={
            <img
              className="navbar-icon"
              width={20}
              src="https://www.svgrepo.com/show/341847/github.svg"
              alt="github icon"
            />
          }
        ></CustomLink>
        <button
          onClick={toggleTheme}
          className="p-2 rounded"
          aria-label={theme === "dark" ? "Light Mode" : "Dark Mode"}
          title={theme === "dark" ? "Light Mode" : "Dark Mode"}
        >
          {theme === "dark" ? (
            // Güneş ikonu (dark mod aktifken)
            <svg
              className="navbar-icon text-black dark:text-white"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="img"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4 12H2m20 0h-2M5.64 5.64 4.22 4.22m15.56 15.56-1.42-1.42M5.64 18.36 4.22 19.78m15.56-15.56-1.42 1.42" />
            </svg>
          ) : (
            // Ay ikonu (light mod aktifken)
            <svg
              className="navbar-icon text-black dark:text-white"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="img"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
