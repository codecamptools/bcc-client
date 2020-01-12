<template>
  <nav
    class="navbar fixed-top navbar-expand-lg transition"
    :class="scrolled ? 'navbar-light bg-light z-depth' : 'navbar-dark'"
  >
    <router-link class="d-flex align-items-center" to="/">
      <img
        v-show="!scrolled"
        height="55"
        src="../assets/invert.svg"
        alt="Boise Code Camp Logo"
        class="drop-shadow"
      />
      <img
        v-show="scrolled"
        height="55"
        src="../assets/logo.svg"
        alt="Boise Code Camp Logo"
      />
      <h4 class="m-0 ml-2 text-primary" :class="scrolled ? '' : 'text-shadow'">
        <span :class="scrolled ? 'text-dark' : 'text-white'">Boise</span
        >CodeCamp
      </h4>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto text-right">
        <li class="nav-item" v-for="link in links" :key="link.to.name">
          <router-link
            class="nav-link text-uppercase"
            :class="scrolled ? 'text-dark' : 'text-light'"
            :to="link.to"
          >
            {{ link.to.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      scrolled: false,
      links: [
        {
          to: { name: "register" }
        },
        {
          to: { name: "volunteer" }
        },
        {
          to: { name: "sponsor" }
        }
      ]
    };
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 100;
    }
  }
};
</script>

<style>
.nav-link {
  display: inline-block;
  border-bottom: 2px solid transparent;
  transition: all 0.2s linear;
  margin: 0 0.5rem;
}
.nav-link.router-link-exact-active {
  border-bottom: 2px solid var(--primary);
}
.drop-shadow{
  filter: drop-shadow(2px 4px 6px #00000055)
}
</style>
