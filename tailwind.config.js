/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

// // tailwind.config.js
// module.exports = {
//   content: ["*"],
//   theme: {
//     extend: {
//       keyframes: {
//         fadeInDelayed: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//       },
//       animation: {
//         'fade-in-delay-1': 'fadeInDelayed 1s ease forwards 1s', // for h3
//         'fade-in-delay-2': 'fadeInDelayed 1s ease forwards 1.5s', // for p
//       },
//     },
//   },
//   plugins: [],
// };
