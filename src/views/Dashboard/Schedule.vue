<template>
  <div class="schedule">
    <alert name="schedule"
      >Organize your day by flagging the sessions that you want to attend</alert
    >
    <div>
      <ul class="nav nav-tabs mb-2">
        <li class="nav-item action" @click="activeSessions = sessions">
          <span class="nav-link" :class="{ active: activeSessions == sessions }"
            >All Sessions</span
          >
        </li>
        <li class="nav-item action" @click="activeSessions = flaggedSessions">
          <span
            class="nav-link"
            :class="{ active: activeSessions == flaggedSessions }"
            >Flagged Sessions</span
          >
        </li>
        <li class="nav-item action" @click="activeSessions = filtered">
          <div
            class="d-flex align-items-center"
            :class="{ active: activeSessions == filtered }"
          >
            <i class="fa fa-search mr-1 text-muted"></i>
            <input
              type="text"
              class="form-control"
              v-model="query"
              @keydown="activeSessions = filtered"
            />
          </div>
        </li>
      </ul>
      <div
        class="session d-flex align-items-center"
        v-for="session in activeSessions"
        :key="session.id"
      >
        <div class="h-100">
          <i
            class="fa fa-fw action mr-3"
            :class="{
              'fa-star-o': !flaggedSessions[session.id],
              'fa-star text-yellow': flaggedSessions[session.id]
            }"
            @click="flagSession(session)"
          ></i>
        </div>
        <session class="w-100" :sessionId="session.id" />
      </div>
    </div>
  </div>
</template>

<script>
import session from "../../components/Session";
export default {
  name: "schedule",
  data() {
    return {
      flaggedSessions: {},
      dismissed: localStorage.getItem("tip:schedule"),
      activeSessions: [],
      query: ""
    };
  },
  mounted() {
    try {
      let data = JSON.parse(window.localStorage.getItem("flaggedSessions"));
      if (data) {
        this.flaggedSessions = data;
      }
      this.activeSessions = this.sessions;
    } catch (e) {}
  },
  computed: {
    sessions() {
      return this.$store.getters.sessions;
    },
    filtered() {
      let q = this.query.toUpperCase();
      return this.$store.getters.sessions.filter(s => {
        return (
          s.title.toUpperCase() +
          " " +
          s.description.toUpperCase()
        ).includes(q);
      });
    }
  },
  methods: {
    flagSession(session) {
      if (this.flaggedSessions[session.id]) {
        this.$delete(this.flaggedSessions, session.id);
      } else {
        this.$set(this.flaggedSessions, session.id, session);
      }
      window.localStorage.setItem(
        "flaggedSessions",
        JSON.stringify(this.flaggedSessions)
      );
    },
    dismissTip() {
      localStorage.setItem("tip:schedule", true);
    },
    setActive(sessions) {
      this.activeSessions = sessions;
    }
  },
  components: {
    session
  }
};
</script>

<style>
.text-yellow {
  color: goldenrod;
}
</style>
