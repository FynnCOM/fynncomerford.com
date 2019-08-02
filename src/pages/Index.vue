<template>
  <Layout>
    <div class="pl-18 lg:pl-32 pt-10">
      <h2 id="typed" class="text-5xl" style="display: inline;">
        <strong>Hello!</strong>
      </h2>
      <p style="margin-top: 30px">
        I’m Ragnor. In case you don’t know me yet, feel free to check
        my&nbsp;
        <a
          style="color: black; text-decoration: underline;"
          href="about.html"
        >about</a> page.
        <br />Here, I occasionally write about
        <a
          style="color: black; text-decoration: underline;"
          href="https://ragnorcomerford.com/projects/"
        >projects</a> I am working on and
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
        want to have a coffee and chat, don’t hesitate to
        <a
          style="color: black; text-decoration: underline;"
          href="mailto:hello@ragnor.co"
        >
          drop me
          a message
        </a>.
      </p>
      <img src="@/assets/img/signature.png" style="height:100px; margin-top: 30px" />
    </div>
  </Layout>
</template>

<script>
export default {
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
