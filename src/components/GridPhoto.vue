<template>
  <g-image class="rounded-lg" v-bind:src="src"></g-image>
</template>


<script>
export default {
  props: ["src"],
  name: "GridPhoto"
};
</script>
