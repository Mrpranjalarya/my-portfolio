/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "gradient-slow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "gradient-slow": "gradient-slow 6s ease infinite",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      colors: {
        primary: "#facc15", // ✅ Optional: example yellow color
      },
    },
  },
  plugins: [],
};
