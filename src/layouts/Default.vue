<template>
  <div class="px-32">
    <header>
      <div class="flex h-20 items-center justify-between">
        <img class="h-10" src="../assets/img/logos/rc.png" />
        <nav>
          <MenuIcon @click="toggle" size="1.5x" class="absolute right-0 mr-10 lg:hidden"></MenuIcon>
          <div
            class="flex items-center justify-between ragtrans"
            :class="open ? 'flex-col absolute right-0 mr-10 mt-20': 'flex-row sm:hidden lg:flex'"
          >
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about">About</g-link>
          </div>
        </nav>
      </div>
    </header>
    <slot />
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
import { MenuIcon } from "vue-feather-icons";
export default {
  name: "NavBar",
  components: {
    MenuIcon
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.nav__link {
  margin-left: 20px;
}
</style>
