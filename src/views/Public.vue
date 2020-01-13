<template>
  <div id="public">
    <navbar />
    <main>
      <router-view />
    </main>
    <foot />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import SessionizeService from "../Services/SessionizeService";
export default {
  name: "public",
  components: {
    Navbar,
    Foot
  },
  mounted() {
    SessionizeService.loadData();
  }
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: var(--theme-dark);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

footer {
  border-top: 3px solid var(--primary);
  background: var(--dark);
  color: var(--light);
}
</style>
