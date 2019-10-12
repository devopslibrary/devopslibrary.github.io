// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import App from "./App.vue";

// CSS
import '~/assets/css/theme.css'
import '~/assets/vendor/font-awesome/css/fontawesome-all.min.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', App);
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'
  });

  head.script.push({ src: '/assets/vendor/svg-injector/dist/svg-injector.min.js', body: true });
}