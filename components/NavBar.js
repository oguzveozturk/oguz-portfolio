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
        <button onClick={toggleTheme} className="p-2 rounded">
          <img
            className="navbar-icon"
            width={20}
            src={theme === "dark" ? "https://www.svgrepo.com/download/432507/light-mode.svg" : "https://www.svgrepo.com/download/495522/moon.svg"}
            alt={theme === "dark" ? "Light Mode" : "Dark Mode"}
          />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
