/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        page: '#e2e8f0',
        darkPage: '#101416',
      },
      colors: {
        taublue: '#0b54a3',
        // 'page': 'slate-200',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}