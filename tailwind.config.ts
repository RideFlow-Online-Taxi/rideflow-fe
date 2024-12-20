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
    },
  },
  plugins: [],
};
export default config;
