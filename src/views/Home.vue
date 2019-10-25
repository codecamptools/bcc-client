<template>
  <div class="home">
    <hero />
    <main class="container-fluid pl-lg-5 pr-lg-5 bg-white">
      <div class="row">
        <div class="col-12 col-lg-10 m-auto">
          <keynote />
          <hr class="mb-5 mt-5" />
        </div>
      </div>
      <about />
      <schedule />
      <hr />
      <sponsors />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Keynote from "../components/Keynote";
import About from "../components/About";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";

export default {
  name: "home",
  components: {
    Hero,
    Keynote,
    About,
    Schedule,
    Sponsors
  }
};
</script>