/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-green': {
          '0%, 100%': { backgroundColor: 'rgba(50,35,200,0.5)' },
          '40%': { backgroundColor: 'rgba(34,197,94,1)' },
        },
      },
      animation: {
        'pulse-green': 'pulse-green 2s infinite',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#16a34a",
          secondary: "#fee500",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
