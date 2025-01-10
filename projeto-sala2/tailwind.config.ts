import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#47A138',
        orange: '#FF5031',
        blue: '#004D61',
        error: '#BF1313',
        darkgray: '#767676',
        gray: '#DEE9EA',
        lightgray: '#F8F8F8',
        white: '#FFFFFF',
        black: '#000000',
        lightblack: '#2F2E41',
        'gradient': 'rgba(0, 77, 97, 1)'
      },
    },
  },
  plugins: [],
} satisfies Config;
