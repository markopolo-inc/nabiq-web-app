/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#F2F6FE",
          50: "#F0F5FE",
          100: "#E0EBFE",
          200: "#B2CCFB",
          300: "#85ADF9",
          400: "#578FF7",
          500: "#387AF6",
          600: "#2972F5",
          700: "#0A52D6",
          800: "#0843AF",
          900: "#063488",
          950: "#052561",
        },
        gray: {
          25: "#FCFCFD",
          50: "#F8FAFC",
          100: "#EEF2F6",
          200: "#E3E8EF",
          300: "#CDD5DF",
          400: "#9AA4B2",
          500: "#697586",
          600: "#4B5565",
          700: "#364152",
          800: "#202939",
          900: "#121926",
          950: "#303534",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
          950: "#55160C",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#fdb022",
          500: "#f79009",
          600: "#dc6803",
          700: "#b54708",
          800: "#93370d",
          900: "#7a2e0e",
          950: "#4E1D09",
        },
        success: {
          25: "#f6fef9",
          50: "#ecfdf3",
          100: "#DCFAE6",
          200: "#ABEFC6",
          300: "#75E0A7",
          400: "#47CD89",
          500: "#17B26A",
          600: "#079455",
          700: "#067647",
          800: "#085D3A",
          900: "#074D31",
          950: "#053321",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        open: "var(--font-open)",
      },
      opacity: {
        15: ".15",
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
        28: "7rem",
        80: "20rem",
        96: "24rem",
      },
      height: {
        "1/2": "50%",
      },
      width: {
        90: "22.5rem",
        98: "28rem",
        128: "32rem",
      },
      scale: {
        30: ".3",
      },
      boxShadow: {
        'custom-sm': '0px 4px 6px -2px rgba(18, 25, 38, 0.03)',
        'custom-md': '0px 12px 16px -4px rgba(18, 25, 38, 0.08)',
        sm: "0px 1px 3px 0px rgba(18, 25, 38, 0.10), 0px 1px 2px 0px rgba(18, 25, 38, 0.06)",
        md: "0px 4px 8px -2px rgba(18, 25, 38, 0.10), 0px 2px 4px -2px rgba(18, 25, 38, 0.06)",
        lg: "0px 12px 16px -4px rgba(18, 25, 38, 0.08), 0px 4px 6px -2px rgba(18, 25, 38, 0.03)",
        xl: "0px 24px 48px -12px rgba(18, 25, 38, 0.18)",
      },
    },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "group-hover", "group-focus"],
    extend: {
      margin: ["last"],
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".display-xs": {
          "@apply text-[1.5rem] leading-[2rem]": {},
        },
        ".display-sm": {
          "@apply text-[1.875rem] leading-[2.375rem]": {},
        },
        ".display-md": {
          "@apply text-[2.25rem] leading-[2.75rem]": {},
        },
        ".display-lg": {
          "@apply text-[3rem] leading-[3.75rem]": {},
        },
        ".display-xl": {
          "@apply text-[3.75rem] leading-[4.5rem]": {},
        },
        ".display-2xl": {
          "@apply text-[4.5rem] leading-[5.625rem]": {},
        },
      });
      addUtilities({});
    }),
  ],
};
