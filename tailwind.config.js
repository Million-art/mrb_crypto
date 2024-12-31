/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
extend: {
  colors: {
    primary: '#5ad3ff',
    secondary: '#13a0f0',
    background: '#f9f9f9',
    text: '#212121',
  },
  animation: {
    glow: 'glow 2s infinite',
  },
  keyframes: {
    glow: {
      '0%, 100%': { boxShadow: '0 0 15px #FFD700' },
      '50%': { boxShadow: '0 0 30px #FFD700' },
    },
  },
},  },
  plugins: [],
}


