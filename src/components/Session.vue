<template>
  <div class="session border p-2 rounded mb-3">
    <div class="d-flex justify-content-between flex-wrap">
      <h4 class="text-primary mt-2 mr-4">{{ session.title }}</h4>
      <div class="text-muted d-md-block d-flex flex-column">
        <sup style="margin-top: .15rem">
          <span>
            <i class="fa fa-fw fa-map-marker"></i>
            {{ session.room }}
          </span>
          <span class="ml-3">
            <i class="fa fa-fw fa-clock-o"></i>
            {{ session.startsAt | time }} - {{ session.endsAt | time }}
          </span>
        </sup>
      </div>
    </div>
    <p class="m-0">{{ session.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["sessionId"],
  computed: {
    session() {
      return this.$store.getters.sessions.find(
        s => s.id == this.sessionId
      );
    }
  },
  filters: {
    time(str) {
      var d = new Date(str);
      return d.toLocaleTimeString();
    }
  }
};
</script>

<style></style>
