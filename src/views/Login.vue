<template>
  <div class="login-page">
    <div>
      <img class="img-fluid" src="../assets/invert.png" alt="Code Camp Logo" />
    </div>
    <div class="w-100" v-if="!$auth.loading" style="max-width:273px">
      <!-- show login when not authenticated -->
      <button
        class="btn btn-info btn-block"
        v-if="!$auth.isAuthenticated"
        @click="login"
      >
        Log in
      </button>
      <router-link
        v-else
        class="btn btn-info btn-block"
        :to="{ name: 'profile' }"
        >Go to Dashboard</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    async login() {
      try {
        let success = await this.$auth.loginWithPopup();
        if(this.$auth.user.sub){
          this.$router.push({ name: "profile" });
        }
      } catch (e) {
        console.log(e);
      }
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
  flex-direction: column;
}
</style>
