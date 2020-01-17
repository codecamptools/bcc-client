<template>
  <div class="manager">
    <div class="loader" v-if="$auth.loading">
      <div>
        <img
          class="img-fluid"
          src="../../assets/invert.png"
          alt="Code Camp Logo"
        />
      </div>
    </div>
    <div class="d-flex flex-column manager" v-else>
      <nav
        class="bg-primary p-3 shadow mb-2 text-white d-flex align-items-center justify-content-between"
      >
        <router-link :to="{ name: 'home' }" class="text-white">
          <p class="m-0">
            <i class="fa fa-chevron-left mr-3"></i> <span>Boise Code Camp</span>
          </p>
        </router-link>
        <div>
          <img
            class="white-filter"
            src="../../assets/invert.png"
            alt="codecamp-logo"
            height="50"
          />
        </div>
      </nav>
      <main class="flex-grow-1 bg-light pb-5 d-flex flex-column">
        <router-view />
      </main>
      <footer
        class="bg-white border-top p-4 d-flex align-items-center justify-content-center flex-wrap"
      >
        <div class="text-center">
          <img src="../../assets/logo.png" alt="codecamp-logo" height="80" />
          <div class="small text-center mt-1">
            <a class="border-top pt-1" href="/privacy.html"
              >Privacy &amp; terms</a
            >
          </div>
        </div>
      </footer>
      <button class="btn btn-dark square logout" @click="logout">
        <i class="fa text-danger fa-fw fa-power-off mr-1"></i>
        <span>
          LOGOUT
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Manager",
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
    getRoles() {
      this.$auth.getUserData();
    }
  },
  mounted(){
    this.getRoles()
  }
};
</script>

<style scoped>
.manager {
  min-height: 100vh;
  overflow-x: hidden;
}
.loader {
  height: 100vh;
  background: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.white-filter {
  filter: brightness(0) invert(1);
}
.black-filter {
  filter: brightness(0);
}
</style>
