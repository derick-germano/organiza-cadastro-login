/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {

      textColor: {
        'custom-green': '#218460',
      },

      backgroundColor: {
        'cor-button': '#3B9373',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      gradientColorStops: {
        'custom1-green': '#218460',
        'custom2-green': '#1BC149',
        'custom3-green': '#115267',                
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
