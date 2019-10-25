<template>
  <div class="schedule row m-auto p-md-3 mt-5">
    <div class="col-12">
      <h2>Schedule</h2>
    </div>
    <div class="col-12">
      <ul class="nav nav-tabs z-depth mt-3 mb-5">
        <li class="nav-item" v-for="s in sessionMap" :key="s.time">
          <div
            class="nav-link action d-flex flex-column align-items-center"
            @click="setTalks(s)"
            :class="activeSession == s.session ? 'active text-primary': ''"
          >
            <b class="text-secondary">{{s.session}}</b>
            <small>{{s.time}}</small>
          </div>
        </li>
      </ul>
      <ul class="list-group" v-if="talks">
        <li class="list-group-item schedule-item mb-4" v-for="t in talks" :key="t.id">
          <div>
            <h5>{{t.name}}</h5>
            <p class="lead text-secondary">{{t.abstract.slice(0,120)}}...</p>
            <div class="d-flex align-items-center justify-content-between pr-3">
              <div class="d-flex align-items-center">
                <img height="60" class="rounded" :src="t.speaker.img" :alt="t.speaker.name" />
                <div class="pl-3 ml-2 text-primary border-primary border-left d-flex flex-column">
                  <small>{{t.speaker.name}}</small>
                  <small>{{t.speaker.company}}</small>
                  <small>{{t.speaker.title}}</small>
                </div>
              </div>
              <div class="d-flex align-items-center flex-column">
                <h6 class="text-secondary">
                  <small class="uppercase">Location</small>
                </h6>
                <b class="text-dark">{{t.location}}</b>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Schedule",
  data() {
    return {
      activeSession: "Session 1",
      talks: []
    };
  },
  computed: {
    sessions() {
      return this.$store.state.sessions;
    },
    sessionMap() {
      let map = {};
      this.$store.state.sessions.forEach(s => {
        map[s.session] = map[s.session] || {
          session: s.session,
          time: s.time,
          sessions: []
        };
        map[s.session].sessions.push(s);
      });
      this.setTalks(map["Session 1"]);
      return map;
    }
  },
  methods: {
    setTalks(session) {
      this.activeSession = session.session;
      this.talks = session.sessions;
    }
  }
};
</script>

<style>
.clip {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.schedule .nav-tabs {
  position: sticky;
  top: 56px;
  z-index: 2;
  background: var(--dark);
  color: var(--light);
  border: none;
  overflow-x: auto;
  overflow-y: hidden;
}
.schedule .nav-link{
  border-radius: 0 !important;
  border: none;
  width: max-content;
}
@media screen and (max-width: 700px) {
  .schedule-item {
    padding: 1rem 8px;
    padding: 1rem 0;
    border: none;
    border-bottom: 1px solid var(--light);
    margin: -20px;
  }
  .schedule-item:nth-child(even) {
    background: var(--light);
    color: var(--dark);
    padding: 1rem 8px;
  }
  .schedule .nav-tabs {
    padding: 0;
    margin: -30px;
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>