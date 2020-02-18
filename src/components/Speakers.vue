<template>
  <div class="schedule row m-auto p-md-3 mt-5">
    <div class="col-12 mb-5">
      <h2>Speakers</h2>
      <p class="m-0">
        <a class="border-top pt-1 small" href="/schedule" target="_blank" rel="noopener" title="Schedule"
          >Schedule</a
        >
      </p>
    </div>
    <div class="col-12 speacker-deck">
      <div class="card-deck justify-content-center">
        <div
          class="card mb-4 p-0 col-sm-6 col-md-4 col-xl-2"
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
.speacker-deck .card{
  min-width:215px;
}
.grayscale {
  filter: grayscale(1);
}
</style>
