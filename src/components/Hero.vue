<template>
  <div class="hero">
    <header class="container-fluid bg-dark p-5">
      <div class="row h-100 align-items-center text-shadow">
        <div class="col offset-lg-1 col-lg-4">
          <div class="text-light">
            <img class="img-fluid mb-3" src="img/codecamp-words.png" alt="codecamp words" />
            <h3 class="text-shadow mt-3">
              {{event.date}}
              <span class="ml-md-3 mr-md-3">|</span>
              {{event.location}}
            </h3>
            <div class="cta mt-3">
              <router-link :to="{name:'register'}" class="btn btn-lg btn-outline-info">
                <span class="mr-2">Register Now</span>
                <small>
                  <i class="fa fa-fw fa-chevron-right"></i>
                </small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="bg-theme-dark p-2 text-light">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="m-0">
              <small>
                Need help convincing your manager you should attend this conference? It's easy this conference is
                <b
                  class="text-theme-info"
                >FREE!</b>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
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
  height: 87vh;
  font-size: 18pt;
}
</style>
