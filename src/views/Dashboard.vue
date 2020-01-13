<template>
  <div class="dashboard">
    <div>Hello {{ $auth.user }}</div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>

<style></style>
