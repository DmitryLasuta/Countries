import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)', // dark mode elements
        'very-dark-blue': 'hsl(207, 26%, 17%)', // dark mode background
        'very-dark-black-blue': 'hsl(200, 15%, 8%)', // light mode text
        'dark-gray': 'hsl(0, 0%, 52%)', // light mode input
        'very-light-gray': 'hsl(0, 0%, 98%)', // light mode background
        white: 'hsl(0, 0%, 100%)', // light mode elements
      },

      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
