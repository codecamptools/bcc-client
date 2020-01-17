<template>
  <div class="dashboard flex-grow-1 d-flex flex-column">
    <div
      class="row px-md-4 d-flex flex-wrap flex-column flex-lg-row flex-grow-1"
    >
      <dashboard-nav class="col-12 col-lg-3 col-xl-2 offset-xl-1" />
      <div class="col-12 col-lg-9 col-xl-8 p-0 mt-3 card shadow">
        <div class="mt-3">
          <div class="card-title p-3 text-capitalize">
            <h4 class="m-0 font-normal">{{ route }}</h4>
          </div>
          <hr />
          <div class="card-body">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardNav from "./components/DashboardNav";
export default {
  name: "Dashboard",
  computed: {
    route() {
      return this.$route.name;
    }
  },
  components: {
    DashboardNav
  }
};
</script>

<style>
.font-normal {
  font-weight: normal;
}
</style>
