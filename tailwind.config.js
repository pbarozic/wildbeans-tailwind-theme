/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🔍 On dit à Tailwind de scanner les fichiers Liquid (utile plus tard si tu veux activer le purge)
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.js",
  ],

  // 🛟 Safelist = garde toutes les classes, même celles qu'il ne trouve pas
  safelist: [
    { pattern: /.*/ }, // garde absolument toutes les classes possibles
  ],

  // 🎨 Ton thème Tailwind (tu pourras personnaliser ici)
  theme: {
    extend: {
      colors: {
        // exemple de custom couleur
        brand: "#ff6600",
      },
    },
  },

  // 🧩 Plugins (vide pour l’instant)
  plugins: [],
}
