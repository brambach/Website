/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ["var(--font-inter)"]
      },
      colors:{
        background:'rgb(var(--background))',
        foreground:'rgb(var(--foreground))',
        muted:'rgb(var(--muted))',
        accent:'rgb(var(--accent))',
      },
      backgroundImage:{
        'debris-radial': "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.53) 0%, rgb(255, 255, 255, 0) 100%)"
      },
      boxShadow:{
        'glass-inset': 'inset 0 17px 5px -9px rgba(0, 55, 255, 0.19)',
        'glass-sm': '5px 5px 20px 0px rgb(0, 42, 181)',
      },
      keyframes:{
        'spin-reverse':{
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(-360deg)'}
        }
      },
      animation:{
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite'
      }
    },
  },
  plugins: [],
};
