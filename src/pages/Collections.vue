<template>
  <Layout>
    <div class="flex">
      <div class="pl-18 lg:pl-32 pt-24 w-full leading-relaxed">
        <h1 class="text-5xl font-bold mb-12">
          <span class="text-gold">C</span>ollections
        </h1>
        <div class="flex flex-row">
          <div class="flex flex-col w-1/3">
            <div
              class="flex h-96 relative rounded-lg reading bg-center bg-no-repeat bg-contain justify-center items-start mr-8 mb-8"
            >
              <img src="~@/assets/img/illustrations/books.svg" class="h-48 mt-16" />
              <h2 class="absolute left-0 bottom-0 m-6 text-xl">Books</h2>
            </div>
          </div>
          <div class="flex flex-col w-2/3">
            <div class="flex flex-row">
              <div
                class="flex w-1/3 h-64 relative rounded-lg reading bg-center bg-no-repeat bg-contain justify-end items-center mr-8 mb-8"
              >
                <img src="~@/assets/img/illustrations/people.svg" class="h-32 mr-5" />
                <h2 class="absolute left-0 bottom-0 m-6 text-xl">People</h2>
              </div>
              <div
                class="flex w-2/3 h-64 relative rounded-lg reading bg-center bg-no-repeat bg-contain justify-end items-center mr-8 mb-8"
              >
                <img src="~@/assets/img/illustrations/watching.svg" class="h-40 mr-8" />
                <h2 class="absolute left-0 bottom-0 m-6 text-xl">Movies and Series</h2>
              </div>
            </div>
            <div class="flex flex-row">
              <div
                class="flex w-3/4 h-64 relative rounded-lg reading bg-center bg-no-repeat bg-contain justify-end items-center mr-8 mb-8"
              >
                <img src="~@/assets/img/illustrations/tools.svg" class="h-40 mr-5" />
                <h2 class="absolute left-0 bottom-0 m-6 text-xl">Tools and Services</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Collections"
  }
};
</script>

<style>
.reading {
  box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.15);
}
</style>
