// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
    
//   ],
//   theme: {
//     extend: {
//       perspective: {
//         '1000': '1000px',
//       },
//       rotate: {
//         x: 'var(--tw-rotate-x)',
//         y: 'var(--tw-rotate-y)',
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     function ({ addUtilities }) {
//       addUtilities({
//         '.perspective': {
//           perspective: '1000px',
//         },
//         '.rotate-x': {
//           '--tw-rotate-x': '0deg',
//         },
//         '.rotate-y': {
//           '--tw-rotate-y': '0deg',
//         },
//         '.hover\\:rotate-x-6:hover': {
//           '--tw-rotate-x': '6deg',
//         },
//         '.hover\\:rotate-y-6:hover': {
//           '--tw-rotate-y': '6deg',
//         },
//       });
//     },
//   ],
// }

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')], // Ensure this is present if you want the plugin
};
