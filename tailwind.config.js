/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          light: "#F0E6D2",
          DEFAULT: "#E6D2B5",
          dark: "#D1B696",
        },
        spice: {
          light: "#D97E5A",
          DEFAULT: "#C35831",
          dark: "#A23D1A",
        },
        olive: {
          light: "#8CAF6F",
          DEFAULT: "#6B8E4E",
          dark: "#4A6D2D",
        },
        terracotta: {
          light: "#C97670",
          DEFAULT: "#B44C43",
          dark: "#8F2D25",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        arabic: ["Scheherazade", "serif"],
      },
      backgroundImage: {
        "moroccan-pattern": "url('/path-to-your-moroccan-pattern.png')",
      },
      boxShadow: {
        decorative:
          "0 4px 6px -1px rgba(195, 88, 49, 0.1), 0 2px 4px -1px rgba(195, 88, 49, 0.06)",
      },
      borderRadius: {
        moroccan: "0.5rem 1.5rem 0.5rem 1.5rem",
      },
    },
  },
  plugins: [
    ({ addComponents, theme }) => {
      const buttons = {
        ".btn": {
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          borderRadius: theme("borderRadius.md"),
          fontWeight: theme("fontWeight.bold"),
          transition: "all 300ms ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
        ".btn-primary": {
          backgroundColor: theme("colors.spice.DEFAULT"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.spice.dark"),
          },
        },
        ".btn-secondary": {
          backgroundColor: theme("colors.olive.DEFAULT"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.olive.dark"),
          },
        },
      };

      addComponents(buttons);
    },
    ({ addUtilities, theme, variants }) => {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
