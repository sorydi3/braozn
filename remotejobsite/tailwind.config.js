/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{tsx,ts,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    "scrollbar-thumb": ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
