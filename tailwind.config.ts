import type { Config } from "tailwindcss";
import { colors } from './src/constants/colors.contants'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:colors,
      screens: {
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
} satisfies Config;
