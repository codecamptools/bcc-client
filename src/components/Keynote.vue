<template>
  <div class="keynote p-lg-4 mt-4" v-if="keynote.speaker">
    <div class="jumbotron p-4 z-depth mb-0 bg-primary text-light">
      <div class="mb-3">
        <small>KEYNOTE</small>
      </div>
      <h1>{{keynote.title}}</h1>
      <p class="lead">{{keynote.abstract}}</p>
      <hr class="my-4" />
      <div class="d-flex">
        <img height="80" class="rounded" :src="keynote.speaker.img" :alt="keynote.speaker.name" />
        <div class="pl-3 text-light ml-2 border-left d-flex flex-column">
          <span>{{keynote.speaker.name}}</span>
          <span>{{keynote.speaker.company}}</span>
          <span>{{keynote.speaker.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keynote",
  computed: {
    keynote() {
      return this.$store.state.keynote;
    }
  }
};
</script>

<style>
</style>