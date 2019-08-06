<template>
  <Layout>
    <div class="pl-18 lg:pl-32 pt-24 w-2/3 leading-relaxed">
      <vue-typer
        class="text-5xl font-bold"
        erase-style="backspace"
        :text="['Salut!', 'Ciao!', 'Hola!', '!أهلاً', 'Hello!']"
      ></vue-typer>
      <p class="mt-6">
        I’m Ragnor. In case you don’t know me yet, feel free to check
        my
        <a
          style="color: black; text-decoration: underline;"
          href="about.html"
        >about</a> page.
        <br />Here, I occasionally write about
        <g-link style="color: black; text-decoration: underline;" to="/projects">projects</g-link>&nbsp;I am working on and
        <a
          style="color: black; text-decoration: underline;"
          href="https://ragnorcomerford.com/thoughts/"
        >thoughts and ideas</a>&nbsp;I have on
        different&nbsp;topics.
        <br />I also compile a
        <a
          style="color: black; text-decoration: underline;"
          href="https://ragnorcomerford.com/collections/"
        >collection</a> of books, movies, and
        articles I particularly like and recommend.
        <br />If you have an interesting project or just
        want to grab a coffee and chat, don’t hesitate to
        <a
          style="color: black; text-decoration: underline;"
          href="mailto:hello@ragnor.co"
        >
          drop me
          a message
        </a>.
      </p>
      <img src="@/assets/img/signature.png" class="h-24 mt-8" />
    </div>
  </Layout>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  components: {
    VueTyper
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
  font-family: RagnorFont;
}
</style>
