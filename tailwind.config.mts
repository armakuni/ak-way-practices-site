import defaultTheme from "tailwindcss/defaultTheme";

import daisyui from "daisyui";

import tailwindTypography from "@tailwindcss/typography";

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
        "info-light": "oklch(var(--info-light) / 1)",
        "info-light-content": "oklch(var(--info-light-content) / 1)",
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
          accent: "#eb339e",
          "accent-content": "#ffffff",
          neutral: "#ffffff",
          "neutral-content": "#000000",
          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",
          info: "#1b95c5",
          "info-content": "#000",
          success: "#7db701",
          "success-content": "#000",
          warning: "#f49301",
          "warning-content": "#000",
          error: "#db180f",
          "error-content": "#000",
          "--info-light": "72.59% 0.1236 230.28",
          "--info-light-content": "0% 0 0",
        },
      },
      {
        dark: {
          primary: "#003156",
          "primary-content": "#ffffff",
          secondary: "#d6f3ff",
          "secondary-content": "#000",
          accent: "#eb339e",
          "accent-content": "#ffffff",
          neutral: "#000",
          "neutral-content": "#ffffff",
          "base-100": "#001729",
          "base-200": "#001222",
          "base-300": "#000e1c",
          "base-content": "#c5cbd0",
          info: "#1b95c5",
          "info-content": "#000",
          success: "#7db701",
          "success-content": "#000",
          warning: "#f49301",
          "warning-content": "#000",
          error: "#db180f",
          "error-content": "#000",
          "--info-light": "72.59% 0.1236 230.28",
          "--info-light-content": "0% 0 0",
        },
      },
    ],
  },
};
