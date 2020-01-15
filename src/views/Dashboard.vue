<template>
  <div class="dashboard">
    <div>Hello: {{ $auth.user }}</div>
    <hr />
    <div>ROLES: {{ $auth.userInfo }}</div>
    <div>Bearer {{ bearerToken }}</div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      bearerToken: ""
    };
  },
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
  async mounted() {
    this.getRoles();
    this.bearerToken = await this.$auth.getTokenSilently();
  }
};
</script>

<style></style>
