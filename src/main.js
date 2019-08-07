// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/css/main.css";
import VueMasonry from "vue-masonry-css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  const options = {
    color: "black",
    failedColor: "#874b4b",
    thickness: "3px",
    transition: {
      speed: "0.7s",
      opacity: "1",
      termination: 300
    },
    autoRevert: true,
    location: "top",
    inverse: false
  };

  Vue.use(VueMasonry);

  head.htmlAttrs = { lang: "en", class: "h-full" };
  head.bodyAttrs = { class: "font-sans" };
}
