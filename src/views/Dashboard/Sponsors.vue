<template>
  <div class="sponsors">
    <form @submit.prevent="getSponsors(year)">
      <div class="d-flex align-items-center mb-3 w-50">
        <label for="year" class="mr-2 m-0 text-secondary">Year:</label>
        <input class="form-control" type="number" v-model="year" />
        <button class="btn text-primary" type="submit">GO</button>
      </div>
    </form>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Level</th>
          <th>Name</th>
          <th>logo</th>
          <th>contact</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            colspan="5"
            @click="showSponsorForm"
            class="text-center action text-secondary"
          >
            Add Sponsor
          </td>
        </tr>
        <tr v-for="sponsor in sponsors" :key="sponsor.id">
          <td>{{ sponsor.level }} {{ sponsor.ppUpgrade }}</td>
          <td>{{ sponsor.name }}</td>
          <td><img :src="sponsor.logo" alt="" /></td>
          <td :title="sponsor.contact.email">{{ sponsor.contact.name }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <quick-modal class="sponsor-form" :toggle="toggle">
      <div class="bg-primary p-3 text-white rounded-top">
        <h3 class="m-0">{{ activeSponsor.id ? "Edit" : "Create" }} Sponsor</h3>
      </div>
      <div class="bg-white p-2 rounded-bottom">
        sponsor form here
      </div>
    </quick-modal>
  </div>
</template>

<script>
import { Resources } from "../../Services/Resources";
export default {
  name: "sponsors",
  data() {
    return {
      year: new Date().getFullYear(),
      sponsors: [],
      toggle: 0,
      activeSponsor: {}
    };
  },
  methods: {
    mounted() {
      this.getSponsors(this.year);
    },
    async getSponsors(year) {
      let res = await Resources.get(`api/sponsors?where=(year eq ${year})`);
      this.sponsors = res.results;
    },
    showSponsorForm(sponsor) {
      if (!sponsor) {
        sponsor = {};
      }
      this.sponsor = sponsor;
      this.toggle++;
    }
  }
};
</script>

<style>
.close-modal-button {
  color: #05403f;
}
</style>
