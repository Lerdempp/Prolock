// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Proje dosyalarınız
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Flowbite-react içerikleri
  ],
  theme: {
    extend: {
      colors: {
        'brand-border': '#E5E6EF',
        'brand-main': '#771FFF',
        'indigo-600': '#4F46E5',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#E5E5E5',
        'neutral-500': '#737373',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
        'neutral-950': '#0A0A0A',
        'slate-300': '#CBD5E1',
        'stone-100': '#F5F5F4',
        'stone-300': '#D6D3D1',
        'stone-400': '#ABA29E',
        'stone-50': '#FAFAF9',
        'stone-500': '#78716C',
        'stone-800': '#292524',
        'stone-950': '#0C0A09',
        'typography-dark': '#0F141B',
        'typography-tertiary': '#A0A3BD',
        'ui-white': '#FFFFFF',
        'custom-yellow': '#EDFF00',
        'red-custom': '#F80166',

        'white-opacity-40': 'rgba(255, 255, 255, 0.4)',
        'indigo-opacity-40': 'rgba(79, 70, 229, 0.4)',
        'brand-border-opacity-8': 'rgba(229, 230, 239, 0.08)',
        'orange-main': '#E24F31',
        'dark-gray': '#030303',
        'light-gray': '#D4D4D4',
        'light-gray-2': '#D7D7D7',
        'blue-light': '#E2E8F0',

        'white-opacity-11': 'rgba(229, 230, 239, 0.11)',
        'white-opacity-60': 'rgba(255, 255, 255, 0.6)',

        'gradient-1': 'linear-gradient(135deg, #FF00A7 0%, #FF8E81 100%)',
        'gradient-2': 'linear-gradient(135deg, #4F316A 0%, #78364A 100%)',
        'gradient-3': 'linear-gradient(135deg, #4F46E5 0%, #E24F31 100%)',
        'gradient-4': 'linear-gradient(135deg, #D4D4D4 0%, #D4D4D4 2%)',
        'gradient-5': 'linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 60%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Flowbite plugin'i ekledik
  ],
};
