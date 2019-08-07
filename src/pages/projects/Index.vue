<template>
  <Layout>
    <div class="pl-18 lg:pl-32 pt-24 w-full leading-relaxed">
      <h1 class="text-5xl font-bold mb-12">
        <span class="text-gold">P</span>rojects
      </h1>
      <masonry class="pb-20" :cols="{default: 3, 1000: 3, 700: 1, 400: 1}" :gutter="30">
        <a target="_blank" href="http://predikon.ch">
          <div :key="1" class="h-30 shadow rounded-lg mb-6">
            <div class="flex w-full justify-center items-center h-48">
              <img class="w-1/5 h-auto" src="~@/assets/img/logos/epfl.svg" />
              <div class="border-l-2 h-10 border-black mx-5"></div>
              <h2 class="text-lg">Predikon</h2>
            </div>
          </div>
        </a>

        <div :key="3" class="h-30 shadow rounded-lg mb-6"></div>
      </masonry>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>

</style>
