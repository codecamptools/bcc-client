import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: {
      name: "Boise CodeCamp",
      date: "March 22",
      dTime: new Date("2020-03-21 8:00"),
      location: "Boise, Id",
      venue: "Boise State University",
      address: "1700 W University Dr, Boise, ID 83725"
    },
    keynote: {
      speaker: {
        name: "Jerry Nixon",
        title: "Software Evangilist",
        company: "Microsoft",
        img:
          "https://visualstudiomagazine.com/articles/2018/07/17/~/media/ECG/VSLive/2018/chicago/speakers/Nixon_Jerry_2.png"
      },
      title: "Quantum Computing and the Future of Software Development",
      abstract:
        "Developers like you and I need to realize this is inevitable, and we need to recognize that these changes are just starting and we can get in on the ground floor and thrive through integration and simply not resisting.",
      time: "8:30 - 9:30 AM",
      session: "keynote",
      location: "Jordan Ballroom"
    },
    sponsors: [],
    sessions: [],
    speakers: [],
    schedule: []
  },
  mutations: {
    setSessionizeData(state, data) {
      state.sessions = data.sessions;
      state.speakers = data.speakers;
      state.schedule = data.schedule;
    },
    setSponsors(state, sponsors) {
      state.sponsors = sponsors;
    }
  },
  actions: {},
  modules: {}
});
