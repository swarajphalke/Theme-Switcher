// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { theme, themeConfig, isTransitioning } = useTheme();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const containerPadding =
    theme === "theme1" ? "pt-20" : theme === "theme2" ? "pt-0" : "pt-4";

  return (
    <div
      className={`${containerPadding} transition-opacity duration-300 ${
        isTransitioning ? "opacity-80" : "opacity-100"
      }`}
    >
      <div className={themeConfig.container}>
        <h1 className={themeConfig.text.heading}>Welcome to ThemeApp</h1>
        <p
          className={`${themeConfig.text.secondary} mb-8 ${
            theme === "theme1"
              ? "text-lg leading-relaxed"
              : theme === "theme2"
              ? "text-xl leading-loose"
              : "text-lg text-center"
          }`}
        >
          {theme === "theme1" &&
            "A clean, minimalist shopping experience with carefully curated products."}
          {theme === "theme2" &&
            "Explore our premium collection in an elegant, sophisticated environment."}
          {theme === "theme3" &&
            "Discover premium products in our modern, professional marketplace! 🌟"}
        </p>

        <div
          className={`grid ${themeConfig.grid} ${
            isTransitioning ? "scale-[0.99]" : "scale-100"
          } transition-transform duration-300`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`${themeConfig.card} transition-all duration-300`}
            >
              <div className={`${theme === "theme3" ? "mb-4" : "mb-3"}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={`${
                    theme === "theme1"
                      ? "h-32 w-full object-contain"
                      : theme === "theme2"
                      ? "h-40 w-full object-contain"
                      : "h-28 w-full object-contain"
                  } transition-transform hover:scale-105`}
                />
              </div>

              {/* Category */}
              <div className="mb-2">
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    theme === "theme1"
                      ? "bg-gray-100 text-gray-600"
                      : theme === "theme2"
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                  }`}
                >
                  {product.category}
                </span>
              </div>

              <h2
                className={`${themeConfig.text.primary} ${
                  theme === "theme1"
                    ? "text-sm font-medium leading-tight mb-2"
                    : theme === "theme2"
                    ? "text-lg font-bold leading-snug mb-3"
                    : "text-sm font-bold leading-relaxed text-center mb-2"
                } line-clamp-2`}
              >
                {product.title}
              </h2>

              {/* Rating */}
              <div
                className={`flex items-center ${
                  theme === "theme3" ? "justify-center" : ""
                } mb-2`}
              >
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(product.rating?.rate || 0) ? "★" : "☆"
                      }`}
                    >
                      {i < Math.floor(product.rating?.rate || 0) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <span
                  className={`ml-1 text-xs ${themeConfig.text.secondary}`}
                >{`(${product.rating?.count || 0})`}</span>
              </div>

              {/* Price */}
              <div
                className={`mb-4 ${theme === "theme3" ? "text-center" : ""}`}
              >
                {theme === "theme1" && (
                  <p className="text-gray-800 text-lg font-semibold">
                    ${product.price}
                  </p>
                )}
                {theme === "theme2" && (
                  <p className="text-yellow-400 text-xl font-bold">
                    ${product.price}
                  </p>
                )}
                {theme === "theme3" && (
                  <div className="text-center">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ${product.price}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div
                className={`space-y-2 ${
                  theme === "theme3" ? "text-center" : ""
                }`}
              >
                <button
                  className={`w-full py-2 px-4 rounded font-medium transition-colors ${
                    theme === "theme1"
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : theme === "theme2"
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700"
                  }`}
                >
                  Add to Cart
                </button>

                <div className="flex gap-2">
                  <button
                    className={`flex-1 py-1.5 px-3 rounded text-sm border transition-colors ${
                      theme === "theme1"
                        ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                        : theme === "theme2"
                        ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                        : "border-blue-300 text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    View Details
                  </button>

                  <button
                    className={`px-3 py-1.5 rounded text-sm border transition-colors ${
                      theme === "theme1"
                        ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                        : theme === "theme2"
                        ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                        : "border-blue-300 text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
