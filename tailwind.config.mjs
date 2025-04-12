// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';


/** @type {import('tailwindcss').Config} */
console.log("✅ Tailwind config loaded!");
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['font-figtree'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
