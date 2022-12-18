export default {
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'vercel-edge',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    title: "my first nuxt proj - main page",
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
};
