// src/components/Header.tsx
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, themeConfig, setTheme, isTransitioning } = useTheme();

  if (theme === "theme2") {
    // Sidebar layout for theme2
    return (
      <header
        className={`${
          themeConfig.header
        } flex flex-col justify-between p-6 transition-opacity duration-300 ${
          isTransitioning ? "opacity-70" : "opacity-100"
        }`}
      >
        <div>
          <div className="text-2xl font-bold mb-8 text-yellow-400">
            ThemeApp
          </div>
          <nav className="flex flex-col gap-4 mb-8">
            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors text-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition-colors text-lg"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition-colors text-lg"
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
            <option value="theme2"> Dark mode</option>
            <option value="theme3">Colorful theme</option>
          </select>
        </div>
      </header>
    );
  }

  // Top header for theme1 and theme3
  const headerStyle =
    theme === "theme1" ? "fixed top-0 w-full z-50" : "sticky top-0 z-50";

  return (
    <header
      className={`${headerStyle} ${
        themeConfig.header
      } flex justify-between items-center px-6 py-4 transition-opacity duration-300 ${
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
      <div className="flex items-center gap-6">
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className={`rounded-lg border p-2 ${
            theme === "theme3"
              ? "bg-white text-blue-900 border-white"
              : "bg-white border-gray-300"
          }`}
        >
          <option value="theme1">Minimalist</option>
          <option value="theme2"> Dark mode</option>
          <option value="theme3">Colorful theme</option>
        </select>
        <nav className="flex gap-4">
          <Link
            to="/"
            className={`hover:underline ${
              theme === "theme3" ? "text-white font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:underline ${
              theme === "theme3" ? "text-white font-semibold" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:underline ${
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
