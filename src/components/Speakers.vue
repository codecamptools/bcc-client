<template>
  <div class="schedule row m-auto p-md-3 mt-5">
    <div class="col-12 mb-5">
      <h2>Speakers</h2>
    </div>
    <div class="col-12">
      <div class="card-deck justify-content-center">
        <div
          class="card col-sm-6 col-md-4 col-xl-2"
          v-for="speaker in speakers"
          :key="speaker.id"
        >
          <speaker :speaker="speaker" @setActive="setActive" />
        </div>
      </div>
    </div>
    <quick-modal class="w-100" :toggle="toggle">
      <div class="keynote p-lg-4 m-0">
        <div class="jumbotron p-4 bg-white">
          <div class="d-flex align-items-center">
            <img
              height="100"
              class="rounded grayscale"
              :src="activeSpeaker.profilePicture"
              :alt="activeSpeaker.fullName"
            />
            <div class="pl-3 text-primary ml-2 border-left">
              <p class="m-0">{{ activeSpeaker.fullName }}</p>
              <small>{{ activeSpeaker.tagLine }}</small>
            </div>
          </div>
          <hr class="my-4" />
          <div
            class="mb-3 d-flex flex-wrap align-items-center justify-content-between"
          >
            <small class="border text-secondary p-1 rounded">SESSIONS</small>
            <div class="text-muted d-md-block d-flex flex-column">
              <small>
                <i class="fa fa-fw fa-map-marker"></i>
                Room
              </small>
              <small class="ml-3">
                <i class="fa fa-fw fa-clock-o"></i>
                Time
              </small>
            </div>
          </div>
          <div class="sessions">
            <div
              class="session"
              v-for="session in activeSpeaker.sessions"
              :key="session.id"
            >
              <session :sessionId="session.id" />
            </div>
          </div>
        </div>
      </div>
    </quick-modal>
  </div>
</template>

<script>
import Session from "./Session.vue";
import Speaker from "./Speaker.vue";
export default {
  name: "Speakers",
  data() {
    return {
      toggle: 0,
      activeSpeaker: {}
    };
  },
  computed: {
    speakers() {
      return this.$store.state.speakers;
    }
  },
  methods: {
    setActive(speaker) {
      this.activeSpeaker = speaker;
      this.toggle++;
    }
  },
  components: {
    Session,
    Speaker
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
.schedule .nav-link {
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
.grayscale {
  filter: grayscale(1);
}
</style>
