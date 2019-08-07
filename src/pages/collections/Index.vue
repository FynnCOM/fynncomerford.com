<template>
  <Layout>
    <div class="flex">
      <div class="pl-18 lg:pl-32 pt-24 w-full leading-relaxed">
        <h1 class="text-5xl font-bold mb-12">
          <span class="text-gold">C</span>ollections
        </h1>
        <div class="hidden md:flex lg:flex xl:flex">
          <div class="flex flex-col w-1/3">
            <g-link
              to="/collections/books"
              class="flex h-64 lg:h-96 relative rounded-lg shadow bg-center bg-no-repeat bg-contain justify-center items-start mr-8 mb-8"
            >
              <img src="~@/assets/img/illustrations/books.svg" class="w-2/3 mt-16" />
              <h2 class="absolute left-0 bottom-0 m-6 text-xl">Books</h2>
            </g-link>
          </div>
          <div class="flex flex-col w-2/3">
            <div class="flex flex-row">
              <g-link
                to="/collections/people"
                class="flex w-1/3 h-48 lg:h-64 relative rounded-lg shadow bg-center bg-no-repeat bg-contain justify-end items-center mr-8 mb-8"
              >
                <img src="~@/assets/img/illustrations/people.svg" class="w-2/3 mr-5" />
                <h2 class="absolute left-0 bottom-0 m-6 text-xl">People</h2>
              </g-link>
              <g-link
                to="/collections/movies"
                class="flex w-2/3 h-48 lg:h-64 relative rounded-lg shadow bg-center bg-no-repeat bg-contain justify-end items-center mr-8 mb-8"
              >
                <img src="~@/assets/img/illustrations/watching.svg" class="w-2/3 mr-8" />
                <h2 class="absolute left-0 bottom-0 m-6 text-xl">Movies and Series</h2>
              </g-link>
            </div>
            <div class="flex flex-row">
              <g-link
                to="/collections/tools"
                class="flex w-2/3 h-48 lg:h-64 relative rounded-lg shadow bg-center bg-no-repeat bg-contain justify-end items-center mr-8 mb-8"
              >
                <img src="~@/assets/img/illustrations/tools.svg" class="w-1/2 mr-5" />
                <h2 class="absolute left-0 bottom-0 m-6 text-xl">Tools and Services</h2>
              </g-link>
            </div>
          </div>
        </div>
        <!--  Mobile Version -->

        <div class="flex md:hidden lg:hidden xl:hidden flex-col">
          <div class="flex h-48 relative rounded-lg shadow justify-end items-center mr-8 mb-8">
            <img src="~@/assets/img/illustrations/books.svg" class="h-32 mr-8" />
            <h2 class="absolute left-0 bottom-0 m-6 text-xl">Books</h2>
          </div>
          <div class="flex h-48 relative rounded-lg shadow justify-end items-center mr-8 mb-8">
            <img src="~@/assets/img/illustrations/tools.svg" class="h-24 mr-8" />
            <h2 class="absolute left-0 bottom-0 m-6 text-xl">Tools and Services</h2>
          </div>
          <div class="flex h-48 relative rounded-lg shadow justify-end items-center mr-8 mb-8">
            <img src="~@/assets/img/illustrations/people.svg" class="h-32 mr-8" />
            <h2 class="absolute left-0 bottom-0 m-6 text-xl">People</h2>
          </div>
          <div class="flex h-48 relative rounded-lg shadow justify-end items-center mr-8 mb-8">
            <img src="~@/assets/img/illustrations/watching.svg" class="h-24 mr-8" />
            <h2 class="absolute left-0 bottom-0 m-6 text-xl">Movies and Series</h2>
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
