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
      <venue />
      <hr />
      <div class="row mb-5" v-if="sponsors.length">
        <div class="col-sm-10">
          <div class="h1 mt-3">
            <div>
              Thank you Sponsors
            </div>
          </div>
          <div class="__summary large">
            <div>
              <p>
                Code Camp is free and it wouldn't be if it wasn't for our
                incredible sponsors. Make sure you stop by their booths to check
                out the coolest swag and potential career opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
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
import Venue from "../components/Venue";

export default {
  name: "home",
  components: {
    Hero,
    Keynote,
    About,
    Speakers,
    Experience,
    Sponsors,
    Venue
  },
  computed: {
    sponsors() {
      return this.$store.state.sponsors;
    }
  }
};
</script>
