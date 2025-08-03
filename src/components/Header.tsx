// Importing theme context and React Router's Link component
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // Destructure values from ThemeContext
  const { theme, themeConfig, setTheme, isTransitioning } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  // Toggle mobile navigation menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Special layout for Theme 2 (Dark mode with sidebar)
  if (theme === "theme2") {
    return (
      <>
        {/* Button to toggle sidebar menu on small screens */}
        <button
          onClick={toggleMenu}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        {/* Sidebar Header for Theme 2 */}
        <header
          className={`${themeConfig.header} flex flex-col justify-between p-6 
          transition-all duration-300 lg:translate-x-0
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:shadow-none shadow-2xl`}
        >
          {/* Logo and Navigation */}
          <div>
            <div className="text-2xl font-bold mb-8 text-yellow-400">
              ThemeApp
            </div>

            {/* Vertical navigation menu */}
            <nav className="flex flex-col gap-4 mb-8">
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Theme selector dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Theme
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
              className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white p-2"
            >
              <option value="theme1">Minimalist</option>
              <option value="theme2">Dark mode</option>
              <option value="theme3">Colorful theme</option>
            </select>
          </div>
        </header>
      </>
    );
  }

  // Header style differs based on current theme
  const headerStyle =
    theme === "theme1" ? "fixed top-0 w-full z-50" : "sticky top-0 z-50";

  return (
    <header
      className={`${headerStyle} ${
        themeConfig.header
      } flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 transition-opacity duration-300 ${
        isTransitioning ? "opacity-70" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div
        className={`text-2xl font-bold ${
          theme === "theme3" ? "text-white" : ""
        }`}
      >
        ThemeApp
      </div>

      {/* Mobile Menu Toggle Button (for theme1 and theme3) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-lg text-current"
      >
        {isMenuOpen ? "×" : "☰"}
      </button>

      {/* Navigation + Theme Selector for theme1 & theme3 */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto mt-4 lg:mt-0 transition-all duration-300`}
      >
        {/* Theme selection dropdown */}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className={`w-full lg:w-auto rounded-lg border p-2 mb-4 lg:mb-0 ${
            theme === "theme3"
              ? "bg-white text-blue-900 border-white"
              : "bg-white border-gray-300"
          }`}
        >
          <option value="theme1">Minimalist</option>
          <option value="theme2">Dark mode</option>
          <option value="theme3">Colorful theme</option>
        </select>

        {/* Horizontal navigation menu */}
        <nav className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto text-center">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)} // Closes menu on link click
            className={`hover:underline py-2 lg:py-0 ${
              theme === "theme3" ? "text-white font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`hover:underline py-2 lg:py-0 ${
              theme === "theme3" ? "text-white font-semibold" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`hover:underline py-2 lg:py-0 ${
              theme === "theme3" ? "text-white font-semibold" : ""
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
