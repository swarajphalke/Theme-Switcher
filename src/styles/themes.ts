// Each theme defines layout, styling, text formats, and grid/card designs
export const themes = {
  theme1: {
    name: "Minimalist",
    layout: "bg-gray-50 text-gray-900 font-sans min-h-screen",
    header: "bg-white shadow-sm border-b border-gray-200",
    container: "max-w-6xl mx-auto px-4",
    card: "bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      heading: "text-2xl font-light tracking-wide mb-6",
    },
    grid: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
  },
  theme2: {
    name: "Dark Sidebar",
    layout: "bg-gray-900 text-white font-serif min-h-screen flex",
    header:
      "bg-gray-800 shadow-lg border-b border-gray-700 w-64 fixed left-0 top-0 h-full",
    container: "ml-64 flex-1 p-8",
    card: "bg-gray-800 border border-gray-700 rounded-xl shadow-xl hover:shadow-2xl transition-all p-8 hover:border-gray-600",
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      heading: "text-3xl font-bold mb-8 text-yellow-400",
    },
    grid: "grid-cols-1 lg:grid-cols-2 gap-8",
  },
  theme3: {
    name: "Professional Blue",
    layout:
      "bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50 text-slate-900 font-pacifico min-h-screen",
    header: "bg-gradient-to-r from-blue-600 to-teal-600 shadow-lg",
    container: "max-w-7xl mx-auto px-6",
    card: "bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 border border-slate-200 hover:border-blue-300",
    text: {
      primary: "text-slate-900",
      secondary: "text-slate-600",
      heading:
        "text-4xl mb-8 text-center bg-gradient-to-r from-blue-700 to-teal-700 bg-clip-text text-transparent font-bold",
    },
    grid: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6",
  },
};

// Defines the structure of each theme, used for type-safety in context
export type ThemeConfig = typeof themes.theme1;
