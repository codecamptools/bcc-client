<template>
  <div class="login-page">
    <div class="w-50">
      <div>
        <img src="../assets/invert.png" alt="Code Camp Logo" />
      </div>
      <div class="w-100" v-if="!$auth.loading">
        <!-- show login when not authenticated -->
        <button
          class="btn btn-info btn-block"
          v-if="!$auth.isAuthenticated"
          @click="login"
        >
          Log in
        </button>
        <router-link v-else class="btn btn-info btn-block" to="dashboard"
          >Go to Dashboard</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    }
  }
};
</script>

<style>
.login-page {
  height: 100vh;
  background: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
