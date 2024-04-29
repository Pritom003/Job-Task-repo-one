/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  corePlugins: {
    // Here you can define corePlugins to enable/disable specific core plugins
    // We'll disable the scrollbar styles as they are custom and not part of Tailwind CSS
    scrollbar: false,
  },
  // Add global styles to hide the scrollbar
  variants: {
    scrollbar: ['responsive'],
  },
  plugins: [
    require('daisyui'),
    function ({ addBase, config }) {
      addBase({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          // '-ms-overflow-style': 'none', 
          'scrollbar-width': 'none', 
        },
      })
    },
  ],
}
