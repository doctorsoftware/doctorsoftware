module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue
        },
        secondary: {
          DEFAULT: '#22c55e', // green
        },
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 