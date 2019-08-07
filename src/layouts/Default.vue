<template>
  <div class="h-full w-full relative">
    <ClientOnly>
      <div
        :class="open ? 'hidden': 'block'"
        class="opacity-25 absolute h-24 top-0 right-0 mt-20 w-full z-20"
        id="wave"
      ></div>
    </ClientOnly>
    <vue-progress-bar></vue-progress-bar>
    <MenuIcon
      @click="toggle"
      size="1.5x"
      class="absolute right-0 mr-10 mt-10 lg:hidden xl:hidden z-30"
    ></MenuIcon>

    <div class="px-16">
      <header>
        <div class="flex h-24 items-center justify-between">
          <img class="h-12" src="@/assets/img/logos/rc.png" />
          <nav>
            <div class="text-black flex items-center justify-between hidden lg:block xl:block">
              <g-link active-class="text-gold" class="ml-5 hover:text-gold" to="/" exact>Home</g-link>
              <a active-class="text-gold" class="ml-5 hover:text-gold" href="/about">About</a>
              <g-link active-class="text-gold" class="ml-5 hover:text-gold" to="/projects">Projects</g-link>
              <g-link
                active-class="text-gold"
                class="ml-5 hover:text-gold"
                to="/collections"
              >Collections</g-link>
              <a
                target="_blank"
                class="ml-5 hover:text-gold"
                href="https://drive.google.com/file/d/1XddOM9HOTuT6uIM2cLGCYK5cK_PNSdJA/view?usp=sharing"
              >CV</a>
              <g-link active-class="text-gold" class="ml-5 hover:text-gold" to="/thoughts">Thoughts</g-link>
            </div>
          </nav>
        </div>
      </header>
      <slot />
    </div>
    <div
      :class="open ? 'block opacity-100': 'hidden opacity-0'"
      class="h-screen bg-white overflow-auto float-right absolute top-0 right-0 transition-opacity transition-1000 w-full z-40"
    >
      <XIcon @click="toggle" size="1.5x" class="mt-8 mr-8 float-right"></XIcon>
      <div class="flex flex-col items-end mt-20 mr-8">
        <g-link active-class="text-gold" to="/" exact>Home</g-link>
        <g-link active-class="text-gold" to="/about">About</g-link>
        <g-link active-class="text-gold" to="/projects">Projects</g-link>
        <g-link active-class="text-gold" to="/collections">Collections</g-link>
        <a
          target="_blank"
          class="ml-5 hover:text-gold"
          href="https://drive.google.com/file/d/1XddOM9HOTuT6uIM2cLGCYK5cK_PNSdJA/view?usp=sharing"
        >CV</a>
        <g-link active-class="text-gold" to="/thoughts">Thoughts</g-link>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import { MenuIcon, XIcon } from "vue-feather-icons";
import SiriWave from "siriwave";

export default {
  name: "NavBar",
  components: {
    MenuIcon,
    XIcon
  },
  data() {
    return {
      open: false
    };
  },
  created() {
    this.$Progress.start();
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
    var ret = require("siriwave");
    this.$nextTick(function() {
      var siriWave = new SiriWave({
        container: document.getElementById("wave"),
        speed: 0.02,
        color: "#5b5b5b",
        frequency: 4,
        autostart: true
      });
    });
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
</style>
