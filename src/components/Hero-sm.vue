<template>
  <div class="hero">
    <header class="container-fluid bg-dark p-5">
      <div class="row h-100 align-items-center text-shadow">
        <div class="col offset-lg-1 col-lg-4">
          <div class="text-light">
            <img
              class="img-fluid mb-3"
              src="img/codecamp-words.png"
              alt="codecamp words"
            />
            <h3 class="text-shadow mt-3">
              {{ event.date }}
              <span class="ml-md-3 mr-md-3">|</span>
              {{ event.location }}
            </h3>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Hero-SM",
  computed: {
    event() {
      return this.$store.state.event;
    }
  }
};
</script>

<style scoped>
header {
  background-image: url(/img/codecamp-header-bg.png);
  background-position: center;
  background-size: cover;
  height: 67vh;
  font-size: 16pt;
}
</style>
