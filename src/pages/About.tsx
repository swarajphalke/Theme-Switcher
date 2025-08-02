import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme, themeConfig } = useTheme();

  const containerPadding =
    theme === "theme1" ? "pt-20" : theme === "theme2" ? "pt-0" : "pt-4";

  return (
    <div className={`${containerPadding}`}>
      <div className={themeConfig.container}>
        <h1 className={themeConfig.text.heading}>About ThemeApp</h1>

        <div className={`${themeConfig.card} mb-8`}>
          <h2
            className={`${themeConfig.text.primary} ${
              theme === "theme1"
                ? "text-xl font-semibold mb-4"
                : theme === "theme2"
                ? "text-2xl font-bold mb-6 text-yellow-400"
                : "text-2xl font-bold mb-4 text-center"
            }`}
          >
            Our Story
          </h2>
          <p
            className={`${themeConfig.text.secondary} ${
              theme === "theme1"
                ? "leading-relaxed"
                : theme === "theme2"
                ? "text-lg leading-loose"
                : "leading-relaxed text-center"
            }`}
          >
            {theme === "theme1" &&
              "ThemeApp was born from the idea that user experience should be personal and adaptable. We believe in clean, functional design that puts content first while giving users the power to customize their visual experience."}
            {theme === "theme2" &&
              "Crafted with precision and attention to detail, ThemeApp represents the pinnacle of sophisticated design. Our mission is to deliver premium experiences that resonate with discerning users who appreciate elegance and functionality."}
            {theme === "theme3" &&
              "Welcome to the most colorful corner of the internet! 🎨 ThemeApp is all about bringing joy and creativity to your browsing experience. We believe that technology should be fun, vibrant, and full of personality!"}
          </p>
        </div>

        <div className={`${themeConfig.card}`}>
          <h2
            className={`${themeConfig.text.primary} ${
              theme === "theme1"
                ? "text-xl font-semibold mb-4"
                : theme === "theme2"
                ? "text-2xl font-bold mb-6 text-yellow-400"
                : "text-2xl font-bold mb-4 text-center"
            }`}
          >
            Our Mission
          </h2>
          <p
            className={`${themeConfig.text.secondary} ${
              theme === "theme1"
                ? "leading-relaxed"
                : theme === "theme2"
                ? "text-lg leading-loose"
                : "leading-relaxed text-center"
            }`}
          >
            {theme === "theme1" &&
              "To create intuitive, accessible, and beautiful digital experiences that adapt to every user's preferences and needs."}
            {theme === "theme2" &&
              "To redefine digital sophistication by combining timeless design principles with cutting-edge technology, creating experiences that are both powerful and refined."}
            {theme === "theme3" &&
              "To spread happiness through design! We want every click, every scroll, and every interaction to bring a smile to your face. Life's too short for boring websites! ✨"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
