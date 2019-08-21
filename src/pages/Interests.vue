<template>
  <Layout>
    <div class="pl-18 lg:pl-32 pt-24 w-full leading-relaxed">
      <h1 class="text-5xl font-bold mb-12">
        <span class="text-gold">I</span>nterests
      </h1>
      <br />
    </div>
    <br/>
    <div class="hidden md:flex lg:flex xl:flex">
          <div class="flex flex-col w-1/3">
            <g-link
              to="/Filmmaking"
              class="flex h-64 lg:h-96 relative rounded-lg shadow bg-center bg-no-repeat bg-contain justify-center items-start mr-8 mb-8"
            >
              <img src="~@/assets/img/illustrations/Videographer.png" class="w-2/2 mt-16" />
              <h2 class="absolute left-0 bottom-0 m-6 text-xl">Filmmaking</h2>
            </g-link>
           </div>
      </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Interests"
  }
};
</script>
