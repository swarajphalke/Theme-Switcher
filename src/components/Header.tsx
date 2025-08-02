import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const { theme, themeConfig, setTheme, isTransitioning } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (theme === "theme2") {
    // Sidebar layout for theme2
    return (
      <>
        {/* Mobile Menu Button for theme2 */}
        <button
          onClick={toggleMenu}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        <header
          className={`${themeConfig.header} flex flex-col justify-between p-6 
          transition-all duration-300 lg:translate-x-0
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:shadow-none shadow-2xl`}
        >
          <div>
            <div className="text-2xl font-bold mb-8 text-yellow-400">
              ThemeApp
            </div>
            <nav className="flex flex-col gap-4 mb-8">
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
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

  // Top header for theme1 and theme3
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
      <div
        className={`text-2xl font-bold ${
          theme === "theme3" ? "text-white" : ""
        }`}
      >
        ThemeApp
      </div>

      {/* Mobile Menu Button for theme1 and theme3 */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-lg text-current"
      >
        {isMenuOpen ? "×" : "☰"}
      </button>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto mt-4 lg:mt-0 transition-all duration-300`}
      >
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
        <nav className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto text-center">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
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