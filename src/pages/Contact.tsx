import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme, themeConfig } = useTheme();

  const containerPadding =
    theme === "theme1" ? "pt-20" : theme === "theme2" ? "pt-0" : "pt-4";

  return (
    <div className={`${containerPadding}`}>
      <div className={themeConfig.container}>
        <h1 className={themeConfig.text.heading}>Contact Us</h1>

        <div
          className={`grid ${
            theme === "theme2" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
          } gap-8`}
        >
          <div className={themeConfig.card}>
            <h2
              className={`${themeConfig.text.primary} ${
                theme === "theme1"
                  ? "text-xl font-semibold mb-4"
                  : theme === "theme2"
                  ? "text-2xl font-bold mb-6 text-yellow-400"
                  : "text-2xl font-bold mb-4 text-center"
              }`}
            >
              Get in Touch
            </h2>
            <div className={`space-y-4 ${themeConfig.text.secondary}`}>
              <div>
                <strong className={theme === "theme3" ? "text-purple-800" : ""}>
                  Email:
                </strong>
                <br /> hr@hipster-inc.com
              </div>
              <div>
                <strong className={theme === "theme3" ? "text-purple-800" : ""}>
                  Phone:
                </strong>
                <br />
                +6582314107
              </div>
              <div>
                <strong className={theme === "theme3" ? "text-purple-800" : ""}>
                  Address:
                </strong>
                <br />
                01-04, 75 Ayer Rajah Crescent, 139953, Singapore UEN.201621408D
              </div>
            </div>
          </div>

          <div className={themeConfig.card}>
            <h2
              className={`${themeConfig.text.primary} ${
                theme === "theme1"
                  ? "text-xl font-semibold mb-4"
                  : theme === "theme2"
                  ? "text-2xl font-bold mb-6 text-yellow-400"
                  : "text-2xl font-bold mb-4 text-center"
              }`}
            >
              Send Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${themeConfig.text.primary}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  className={`w-full p-2 border rounded-lg ${
                    theme === "theme1"
                      ? "border-gray-300 bg-white"
                      : theme === "theme2"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-purple-300 bg-white"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${themeConfig.text.primary}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full p-2 border rounded-lg ${
                    theme === "theme1"
                      ? "border-gray-300 bg-white"
                      : theme === "theme2"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-purple-300 bg-white"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${themeConfig.text.primary}`}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  className={`w-full p-2 border rounded-lg ${
                    theme === "theme1"
                      ? "border-gray-300 bg-white"
                      : theme === "theme2"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-purple-300 bg-white"
                  }`}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  theme === "theme1"
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : theme === "theme2"
                    ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                }`}
              >
                Send Message {theme === "theme3" ? "💌" : ""}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
  