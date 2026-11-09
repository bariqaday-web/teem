/** ألوان وخطوط AuraFolio نفسها حرفياً */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Syne', 'sans-serif'] },
      colors: { cosmic: '#0A0A0C', coral: '#FF5E36', amberx: '#FFB347', card: '#121218' }
    }
  },
  plugins: []
};
