/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
        brand: "var(--brand)",
        darkest: "var(--darkest)",
        dark: "var(--dark)",
        mid: "var(--mid)",
        light: "var(--light)",
        lightest: "var(--lightest)",
      },
    },
  },
  plugins: [],
}
