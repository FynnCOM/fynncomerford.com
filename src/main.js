// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/css/main.css";
import VueProgressBar from "vue-progressbar";
import VueMasonry from "vue-masonry-css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  const options = {
    color: "#bffaf3",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
      speed: "0.2s",
      opacity: "0.6s",
      termination: 300
    },
    autoRevert: true,
    location: "left",
    inverse: false
  };

  Vue.use(VueProgressBar, options);
  Vue.use(VueMasonry);

  head.htmlAttrs = { lang: "en", class: "h-full" };
  head.bodyAttrs = { class: "font-sans" };
}
