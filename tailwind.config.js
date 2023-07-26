/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.rs"],
  theme: {
    extend: {
      colors: {
        screen: "var(--color-screen)",
        action: "var(--color-action)",
        "action-hover": "var(--color-action-hover)",
        "action-active": "var(--color-action-active)",
        "action-disabled": "var(--color-action-disabled)",
        "action-label": "var(--color-action-label)",
        "action-label-disabled": "var(--color-action-label-disabled)",
        separator: "var(--color-separator)",
        word: "var(--color-word)",
        "word-2nd": "var(--color-word-2nd)",
        "word-hover": "var(--color-word-hover)",
        "word-disabled": "var(--color-word-disabled)",
        layer: "var(--color-layer)",
        "layer-2nd": "var(--color-layer-2nd)",
        error: "var(--color-error)",
        accents: "var(--color-accents)",
      },
    },
  },
  plugins: [],
}
