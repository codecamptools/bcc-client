<template>
  <div class="profile">
    <div class="profile-card rounded">
      <div class="d-flex align-items-center border rounded p-2 text-secondary">
        <img
          :src="$auth.userInfo.picture"
          alt="profile picture"
          class="rounded-circle"
          height="80"
        />
        <div class="ml-3">
          <h3 class="mb-2 border-bottom ">{{ $auth.userInfo.name }}</h3>
          <sup class="small">Member</sup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Resources } from "../../Services/Resources";

export default {
  name: "Profile",
  methods: {}
};
</script>

<style></style>
