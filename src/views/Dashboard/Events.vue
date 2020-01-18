<template>
  <div class="events">
    <div class="alert alert-info text-center">
      Admins can Create and Manage event details here
    </div>
    <div class="add-button action" @click="createEvent">
      <i class="fa fa-plus-circle fa-lg text-muted" title="Create Event"></i>
    </div>
    <div class="list-group">
      <div class="list-group-item" :key="e.id" v-for="e in events">
        {{ e.name }}
      </div>
    </div>
    <quick-modal :toggle="toggle">
      <div class="bg-white rounded">
        <div class="card-heading bg-primary text-white p-3 rounded-top">
          <h3 class="m-0">{{ activeEvent.id ? "Edit" : "Create" }} Event</h3>
        </div>
        <div class="card-body">
          <form class="border rounded p-2" @submit.prevent="updateEvent">
            <div class="alert alert-danger" v-if="error.message">
              {{ error.message }}
            </div>
            <div class="form-group">
              <label for="name">Event Name:</label>
              <input
                class="form-control"
                type="text"
                v-model="activeEvent.name"
                placeholder="Event Name"
              />
            </div>
            <div class="form-group">
              <label for="name">Location:</label>
              <input
                class="form-control"
                type="text"
                v-model="activeEvent.location"
                placeholder="Location"
              />
            </div>
            <div class="form-group">
              <label for="name">Address:</label>
              <input
                class="form-control"
                type="text"
                v-model="activeEvent.address"
                placeholder="Address"
              />
            </div>
            <div class="form-group border rounded p-1">
              <label for="name">Dates:</label>
              <div class="d-flex flex-wrap">
                <div class="col mb-2">
                  <label for="name">Start:</label>
                  <input
                    class="form-control"
                    type="date"
                    v-model="activeEvent.start"
                    placeholder="Start Date"
                  />
                </div>
                <div class="col mb-2">
                  <label for="name">End:</label>
                  <input
                    class="form-control"
                    type="date"
                    v-model="activeEvent.end"
                    placeholder="End Date"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div class="d-flex align-items-center justify-content-around">
              <button
                type="button"
                class="btn btn-link text-danger"
                @click="toggle--"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-outline-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </quick-modal>
  </div>
</template>

<script>
import { Resources } from "../../Services/Resources";
export default {
  name: "events",
  data() {
    return {
      toggle: 0,
      activeEvent: {},
      error: {}
    };
  },
  computed: {
    currentEvent() {
      return this.$store.state.currentEvent;
    },
    events() {
      return this.$store.state.events;
    }
  },
  methods: {
    createEvent() {
      let today = new Date();
      this.activeEvent = {
        name: "Boise Code Camp " + today.getFullYear(),
        start: today,
        end: today,
        location: "Boise State University",
        address: "1700 W University Dr, Boise, ID 83725"
      };
      this.toggle++;
    },
    async updateEvent() {
      try {
        this.error = {};
        let action = this.activeEvent.id ? "put" : "post";
        this.activeEvent = await Resources[action](
          "api/events",
          this.activeEvent
        );
        this.$store.commit("updateEvents", this.activeEvent);
      } catch (e) {
        this.error = e;
      }
    }
  }
};
</script>

<style>
.add-button {
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
}
.add-button:hover {
  filter: brightness(0.7);
}
</style>
