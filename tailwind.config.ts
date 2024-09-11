import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      content: { arrowLink: "url('../../public/assets/svgs/arrow-link.svg')" },
      fontFamily: {
        helvetica: ['Helvetica Neue', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        corporate: ['Corporate A', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/public/assets/images/hero.png')",
      },
      colors: {
        primary: '#24923C',
        main: '#101010',
        'primary-gray': '#A2A2A2',
      },
    },
  },
  plugins: [],
} satisfies Config;
