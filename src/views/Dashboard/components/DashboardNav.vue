<template>
  <div class="dashboard-nav">
    <i
      class="fa fa-bars fa-lg d-lg-none p-2 nav-toggler action rounded"
      data-toggle="collapse"
      data-target="#navcollapse"
      aria-expanded="false"
      aria-controls="navcollapse"
    ></i>

    <nav class="p-2 collapse dont-collapse-sm mt-lg-5" id="navcollapse">
      <hr class="d-lg-none" />
      <ul class="list-unstyled">
        <li>
          <strong>User Settings</strong>
          <div class="nav-container">
            <ul class="list-unstyled pb-3">
              <router-link
                v-for="nav in userRoutes"
                :key="nav.name"
                :to="{ name: nav.name }"
              >
                <li class="action" role="presentation">{{ nav.name }}</li>
              </router-link>
            </ul>
          </div>
        </li>
        <li v-if="$auth.hasRoles('admin')">
          <strong>Event Management</strong>
          <i
            class="fa fa-info-circle ml-3 small text-muted"
            title="Admins Only"
          ></i>
          <div class="nav-container">
            <ul class="list-unstyled pb-3">
              <router-link
                v-for="nav in eventRoutes"
                :key="nav.name"
                :to="{ name: nav.name }"
              >
                <li class="action" role="presentation">{{ nav.name }}</li>
              </router-link>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { USER_NAVIGATION, EVENT_NAVIGATION } from "../dashboard-routes";
export default {
  name: "dashboard-nav",
  data() {
    return {
      userRoutes: USER_NAVIGATION,
      eventRoutes: EVENT_NAVIGATION
    };
  }
};
</script>

<style>
.nav-toggler {
  color: var(--secondary);
}
.nav-toggler:hover {
  background: white;
  color: var(--dark);
}

@media (min-width: 992px) {
  .collapse.dont-collapse-sm {
    display: block;
    height: auto !important;
    visibility: visible;
  }
}

.nav-container a li {
  transition: all 0.3s linear;
  border-left: 5px solid transparent;
  text-transform: capitalize;
  color: var(--dark);
  padding: 0.35rem;
}
.nav-container a:hover li {
  background: rgba(100, 100, 100, 0.1);
}

.nav-container .router-link-exact-active li {
  padding-left: 1rem;
  border-left: 5px solid var(--primary);
  color: var(--primary);
}
</style>
