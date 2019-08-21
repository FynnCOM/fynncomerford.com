<template>
  <Layout>
    <div class="pl-18 lg:pl-32 pt-24 w-2/3 leading-relaxed">
      <ClientOnly>
        <vue-typer
          class="text-5xl font-bold"
          erase-style="backspace"
          :text="['Salut!', 'Ciao!', 'Hola!', '!أهلاً', 'Hello!']"
        ></vue-typer>
      </ClientOnly>
      <p class="mt-6">
        Hey, I am Fynn. Welcome to my personal website. Feel free to explore my 
        <a
          style="color: #D4AF37; text-decoration: underline;"
          href="about.html"
        >about</a> page.
        <br />I have put together lists of 
        <a
          style="color: #D4AF37; text-decoration: underline;"
          href="https://ragnorcomerford.com/thoughts/"
        >books</a>,
       <a
          style="color: #D4AF37; text-decoration: underline;"
          href="https://ragnorcomerford.com/thoughts/">papers and articles</a> that I highly recommend.
        <br />
      
        <a
          style="color:#D4AF37 ; text-decoration: underline;"
          href="https://ragnorcomerford.com/collections/"
        >Here</a>, you can also check out some of the projects that I am working on. 
        <br />
        If you have an interesting project or just
        want to grab a coffee and chat, don’t hesitate to
        <a
          style="color: #D4AF37; text-decoration: underline;"
          href="mailto:comerford.fynn@gmail.com"
        >
        contact me
        </a>
         anytime you want!
      </p>
      <img src="@/assets/img/signature.png" class="h-24 mt-8" />
      <img src="@/assets/img/illustrations/profilepic.png" class="h-24 mt-8" />
    </div>
  </Layout>
</template>

<script>
export default {
  components: {
    VueTyper: () =>
      import("vue-typer")
        .then(m => m.VueTyper)
        .catch()
  },
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
  font-family: RagnorFont;
}
</style>
