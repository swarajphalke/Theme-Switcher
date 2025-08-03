// React Router setup and theme context imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Inner app content that adapts layout based on selected theme
const AppContent = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <Header />
      {/* Adds consistent padding except for sidebar layout (theme2) */}
      <div className={theme === "theme2" ? "" : "p-4"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

// Wrap the app with ThemeProvider for theme access throughout the tree
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
