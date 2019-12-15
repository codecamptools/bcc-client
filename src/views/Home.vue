<template>
  <div class="home">
    <hero />
    <section class="container-fluid pl-lg-5 pr-lg-5 bg-white">
      <div class="row">
        <div class="col-12 col-lg-10 m-auto">
          <keynote />
          <hr class="mb-5 mt-5" />
        </div>
      </div>
      <about />
      <hr />
      <speakers />
      <hr />
      <experience />
      <hr />
      <sponsors />
    </section>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Keynote from "../components/Keynote";
import About from "../components/About";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Experience from "../components/Experience";

export default {
  name: "home",
  components: {
    Hero,
    Keynote,
    About,
    Speakers,
    Experience,
    Sponsors
  }
};
</script>
