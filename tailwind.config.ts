import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dspBgColor: "#F5F5F5",
        dspDarkBlue: "#03053D",
        dspOrange: "#FFA012",
        dspLightOrange: "#FFDAA1",
        dspGray: "#787272",
        dspLightGray: "#D9D9D9",
        dspGreen: "#47DF00",
        dspDarkGreen: "#248B0F",
        dspBlack: "#1E1E1E",
      },
      backgroundImage: {
        bgGradientOrange: "url('/bg-gradient-orange.svg')"
      },
      boxShadow: {
        softShadow: "rgba(149, 157, 165, 0.4) 0px 4px 24px;",
        darkShadow: "rgba(149, 157, 165, 0.8) 0px 4px 24px;",
      }
    },
  },
  plugins: [],
};
export default config;
