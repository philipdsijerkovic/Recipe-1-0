export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
        'text-gradient': 'text-gradient 3s ease-in-out infinite', // Adjusted duration and timing function
      },
      keyframes: {
        'background-shine': {
          'from': {
            'backgroundPosition': '0 0',
          },
          'to': {
            'backgroundPosition': '-200% 0',
          },
        },
        'text-gradient': {
          '0%, 100%': {
            'backgroundSize': '200% 200%',
            'backgroundPosition': 'left center',
          },
          '50%': {
            'backgroundPosition': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}