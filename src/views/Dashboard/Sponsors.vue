<template>
  <div class="sponsors">
    <form @submit.prevent="getSponsors(year)">
      <div class="d-flex align-items-center mb-3 w-50">
        <label for="year" class="mr-2 m-0 text-secondary">Year:</label>
        <input class="form-control" type="number" v-model="year" />
        <button class="btn text-primary" type="submit">GO</button>
      </div>
    </form>
    <div class="add-button action" @click="showSponsorForm()">
      <i class="fa fa-plus-circle fa-lg text-muted" title="Create Sponsor"></i>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Level</th>
          <th>Name</th>
          <th>logo</th>
          <th>contact</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="sponsors.length == 0">
          <td
            colspan="5"
            @click="showSponsorForm()"
            class="text-center action text-secondary"
          >
            Add Sponsor
          </td>
        </tr>
        <tr v-for="sponsor in sponsors" :key="sponsor.id">
          <td>{{ sponsor.level }} {{ sponsor.ppUpgrade }}</td>
          <td>{{ sponsor.name }} {{sponsor.id}}</td>
          <td><img :src="sponsor.logo" alt="" /></td>
          <td :title="sponsor.contact.email">{{ sponsor.contact.name }}</td>
          <td class="text-right">
            <a @click="showSponsorForm(sponsor)"><i class="fa fa-edit fa-lg text-muted" title="Edit Sponsor"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
    <quick-modal class="sponsor-form" :toggle="toggle" v-if='this.activeSponsor'>
      <div class="bg-white rounded">
        <div class="card-heading bg-primary text-white p-3 rounded-top">
          <h3 class="m-0">{{ activeSponsor.id ? "Edit" : "Create" }} Sponsor</h3>
        </div>
       <div class="card-body">
          <form class="border rounded p-2" @submit.prevent="updateSponsor">
            <div class="alert alert-danger" v-if="error.message">
              {{ error.message }}
            </div>
            <div class="form-group col-mb-2">
              <label for="name">Year:</label>
              <select v-model="activeSponsor.year"  class="form-control">
                <option value="2020">2020</option>
              </select>
            </div>
            <div class="form-group">
              <label for="name">Sponsor Name:</label>
              <input
                class="form-control"
                type="text"
                v-model="activeSponsor.name"
                placeholder="ACME Co."
              />
            </div>
            <div class="form-group">
              <label for="name">Level:</label>             
              <select v-model="activeSponsor.level"  class="form-control">
                <option value="friend">Friend - $100</option>
                <option value="silver">Silver - $500</option>
                <option value="gold">Gold - $1,000</option>
                <option value="platinum">Platinum - $1,500</option>
              </select>
            </div>
            <div class="form-group">
              <label for="name">URL:</label>
              <input
                class="form-control"
                type="text"
                v-model="activeSponsor.url"
                placeholder="https://mycompany.com"
              />
            </div>
            <div class="form-group">
              <label for="name">Platinum Plus Upgrade</label>
              <input
                class="form-control"
                type="text"
                v-model="activeSponsor.ppUpgrade"
                placeholder="Title, Keynote, etc."
              />
            </div>
            <div class="form-group border rounded p-1">
              <label for="name">Contact:</label>
              <div class="d-flex flex-wrap">
                <div class="col mb-2">
                  <label for="name">Name:</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="activeSponsor.contact.name"
                    placeholder="John Doe"
                  />
                </div>
                <div class="col mb-2">
                  <label for="name">Email:</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="activeSponsor.contact.email"
                    placeholder="jdoe@email.com"
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
  name: "sponsors",
  data() {
    return {
      year: new Date().getFullYear(),
      sponsors: [],
      toggle: 0,
      activeSponsor: {contact:{}, year:"2020"},
      error:{}
    };
  },
  mounted() {
      this.getSponsors(this.year);
    },
  methods: {
    async getSponsors(year) {
      //let res = await Resources.get(`api/sponsors?where=(year eq ${year})`);
      let res = await Resources.get(`api/sponsors`);
      this.sponsors = res.results;
    },
    showSponsorForm(sponsor) {
      if (!sponsor) {
        sponsor = {contact:{}, year:"2020"};
      }
      this.activeSponsor = sponsor;
      this.toggle++;
    },
    async updateSponsor() {
      try {
        this.error = {};
        let action = "post";
        let url = "api/sponsors";
        if(this.activeSponsor.id){
          action = "put";
          url = url + '/' + this.activeSponsor.id;
        } 
        this.activeSponsor = await Resources[action](
          url,
          this.activeSponsor
        );
        //this.$store.commit("updateSponsors", this.activeSponsor);
        this.sponsors.push(this.activeSponsor);
        this.toggle--;
        this.activeSponsor = null;
      } catch (e) {
        this.error = e;
      }
    }
  }
};
</script>

<style>
.close-modal-button {
  color: #05403f;
}
</style>
