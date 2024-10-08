import tailwindTypography from "@tailwindcss/typography";
import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
      fontFamily: {
        sans: ['"Maven Pro"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "info-light": "var(--info-light)",
        "info-light-content": "var(--info-light-content)",
      },
    },
  },
  plugins: [daisyui, tailwindTypography],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#003156",
          "primary-content": "#ffffff",
          secondary: "#d6f3ff",
          "secondary-content": "#000",
          accent: "#EB66B3",
          "accent-content": "#000",
          neutral: "#ffffff",
          "neutral-content": "#000000",
          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",
          info: "#00A4EB",
          "info-content": "#000",
          success: "#7db701",
          "success-content": "#000",
          warning: "#f49301",
          "warning-content": "#000",
          error: "#F56861",
          "error-content": "#000",
          "--info-light": "#62C1EA",
          "--info-light-content": "#000000",
        },
      },
      {
        dark: {
          primary: "#003156",
          "primary-content": "#ffffff",
          secondary: "#d6f3ff",
          "secondary-content": "#000",
          accent: "#EB66B3",
          "accent-content": "#000",
          neutral: "#000",
          "neutral-content": "#ffffff",
          "base-100": "#001729",
          "base-200": "#001222",
          "base-300": "#000e1c",
          "base-content": "#c5cbd0",
          info: "#00A4EB",
          "info-content": "#000",
          success: "#7db701",
          "success-content": "#000",
          warning: "#f49301",
          "warning-content": "#000",
          error: "#F56861",
          "error-content": "#000",
          "--info-light": "#62C1EA",
          "--info-light-content": "#000000",
        },
      },
    ],
  },
};
