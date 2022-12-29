export default {
  nitro: {
    preset: "vercel-edge",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      "postcss-import": true,
      "tailwindcss/nesting": {},
      "postcss-nested": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    dirs: ["~/components", "~/components/global"],
  },
};


