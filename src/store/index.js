import Vue from "vue";
import Vuex from "vuex";
import { Resources } from "../Services/Resources";

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
        name: "Laurent Bugnion",
        title: "Senior Cloud Developer Advocate",
        company: "Microsoft",
        img: "https://avatars1.githubusercontent.com/u/4922457?s=400&v=4"
      },
      title:
        "25 years ago, software development was very different… or was it?",
      abstract:
        "Development environments were maybe not that powerful, we were running on a lot less RAM and CPU, but we were already architecting systems, converting code in bytes, running machines and connecting them with networks. We maybe didn't have all these fancy SPAs and Clouds, but we had Internet and a web browser. A few years later we would even get JavaScript and start coding pretty cool web apps and the world would never quite be the same anymore.",
      time: "8:45 - 9:30 AM",
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
    setSponsors(state, sponsors = []) {
      state.sponsors = sponsors;
    }
  },
  actions: {
    async loadData({ commit, dispatch }) {
      dispatch("getSponsors");
    },
    async getSponsors({ commit }, year) {
      if (!year) {
        year = new Date().getFullYear();
      }
      try {
        //let sponsors = await Resources.get(`api/sponsors?where=(year eq ${year})`);
        let sponsors = await Resources.get(`api/sponsors`);
        commit("setSponsors", sponsors.results);
      } catch (e) {
        console.warn(e);
      }
    }
  },
  getters: {
    sessions(state) {
      return state.sessions.reduce((acc, val) => {
        return [...acc, ...val.sessions];
      }, []);
    }
  },
  modules: {}
});
