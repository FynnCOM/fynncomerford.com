<template>
  <Layout>
    <div class="pl-18 lg:pl-32 pt-24 w-full leading-relaxed">
      <h1 class="text-5xl font-bold mb-12">
        <span class="text-gold">P</span>rojects
      </h1>
      <masonry class="pb-20" :cols="{default: 3, 1000: 3, 700: 1, 400: 1}" :gutter="30">
        <div
          :key="1"
          style="box-shadow: 0px 0px 45px 10px rgba(45, 56, 104, 0.7)"
          class="mb-6 rounded-lg hyped bg-center bg-no-repeat bg-cover"
        >
          <img class="rounded-lg w-100 h-auto" src="~@/assets/img/projects/hyped/thumbnail.jpeg" />
        </div>
        <div :key="2" class="h-30 shadow rounded-lg mb-6">
          <div class="flex w-full justify-center items-center py-20">
            <img class="w-1/5 h-auto" src="~@/assets/img/logos/epfl.svg" />
            <div class="border-l-2 h-10 border-black mx-5"></div>
            <h2 class="text-lg">Predikon</h2>
          </div>
        </div>
        <div :key="3" class="h-40 shadow rounded-lg"></div>
        <div :key="4" class="h-20 shadow rounded-lg"></div>
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
