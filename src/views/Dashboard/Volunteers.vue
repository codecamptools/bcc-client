<template>
  <div class="volunteers">
    <form @submit.prevent="getVolunteers(year)">
      <div class="d-flex align-items-center mb-3 w-50">
        <label for="year" class="mr-2 m-0 text-secondary">Year:</label>
        <input class="form-control" type="number" v-model="year" />
        <button class="btn text-primary" type="submit">GO</button>
      </div>
    </form>
    <div class="add-button action" @click="showEditAddForm()">
      <i class="fa fa-plus-circle fa-lg text-muted" title="Create"></i>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>          
          <th>Name</th>
          <th>Email</th>
          <th>Prefered Shift</th>
          <th>Shirt Size</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="volunteers.length == 0">
          <td
            colspan="5"
            @click="showVolunteerForm()"
            class="text-center action text-secondary"
          >
            No available volunteers
          </td>
        </tr>
        <tr v-for="v in orderedVolunteers" :key="v.id">
          <td>{{v.name}}</td>
          <td>{{v.email}}</td>
          <td>{{v.preferedShift}}</td>
          <td>{{v.shirtSize}}</td>
          <td class="text-right" style="white-space: nowrap" >
            <a @click="showEditAddForm(v)"><i class="fa fa-edit fa-lg text-muted" title="Edit Volunteer"></i></a>
            <a @click="showConfirmDelete(v)"><i class="fa fa-times fa-lg text-muted" title="Delete Volunteer"></i></a>
          </td>
        </tr>
      </tbody>
    </table>

     <quick-modal class="delete-form" :toggle="toggleDeleteForm" v-if="this.activeVolunteer">
      <div class="bg-white rounded">
        <div class="card-heading bg-primary text-white p-3 rounded-top">
          <h3 class="m-0">Delete Volunteer</h3>
        </div>
       <div class="card-body text-center">
         <div class="alert alert-danger" v-if="error.message">
            {{ error.message }}
          </div>
         Are you sure you want to delete <strong>{{activeVolunteer.name}}</strong>?
         <br/>
         This action can not be undone
         <hr />
            <div class="d-flex align-items-center justify-content-around">
              <button
                type="button"
                class="btn btn-link text-danger"
                @click="toggleDeleteForm--"
              >
                Cancel
              </button>
              <button type="button" @click="deleteVolunteer()" class="btn btn-outline-danger">
                Yes, Delete
              </button>
            </div>
       </div>
      </div>
    </quick-modal>

    <quick-modal :toggle="toggleEditForm" v-if='this.activeVolunteer'>
      <div class="bg-white rounded">
        <div class="card-heading bg-primary text-white p-3 rounded-top">
          <h3 class="m-0">{{ activeVolunteer.id ? "Edit" : "Create" }} Volunteer</h3>
        </div>
        <div class="card-body">
          <form class="border rounded p-2" @submit.prevent="updateVolunteer">
            <div class="alert alert-danger" v-if="error.message">
              {{ error.message }}
            </div>
            <div class="form-group col-mb-2">
              <label for="name">Year:</label>
              <select v-model.number="activeVolunteer.year"  class="form-control">
                <option value="2020">2020</option>
              </select>
            </div>
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                class="form-control"
                type="text"
                v-model="activeVolunteer.name"
                placeholder="name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
               <input
                      v-model="activeVolunteer.email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      class="form-control"
                      required
                    />
            </div>
            <div class="form-group">
              <label for="shift" class="small">Prefered Shift</label>
              <select
                name="preferedShift"
                class="form-control"
                v-model="activeVolunteer.preferedShift"
              >
                <option selected disabled>--- Volunteer Shift ---</option>
                <option :value="val" v-for="val in shifts" :key="val">{{
                  val
                }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="shirtSize" class="small">Shirt Size</label>
              <select
                name="shift"
                class="form-control"
                v-model="activeVolunteer.shirtSize"
              >
                <option selected disabled>--- Shirt Size ---</option>
                <option
                  :value="val"
                  v-for="val in shirtSizes"
                  :key="val"
                  >{{ val }}</option
                >
              </select>
            </div>
            <hr />
            <div class="d-flex align-items-center justify-content-around">
              <button
                type="button"
                class="btn btn-link text-danger"
                @click="closeEditForm"
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
import _ from "lodash";
import { Resources } from "../../Services/Resources";

export default {
  name: "volunteers",
  data() {
    return {
      year: new Date().getFullYear(),
      volunteers: [],
      toggleEditForm: 0,
      toggleDeleteForm: 0,
      activeVolunteer:null,
      error:{}, 
    };
  },
  computed: {
    orderedVolunteers: function () {
      return _.orderBy(this.volunteers, 'name')
    }, 
    shifts: function(){
      return this.$store.state.volunteer.shifts; 
    },
    shirtSizes: function(){
      return this.$store.state.volunteer.shirtSizes;
    }
  },
  components:{
  },
  mounted() {
      this.getVolunteers(this.year);
  },
  methods: {
    async getVolunteers(year) {
      let res = await Resources.get(`api/volunteers?where=(year eq ${year})`);
      this.volunteers = res.results;
    },
    closeEditForm(){
      this.activeVolunteer = null;
      this.toggleEditForm = 1;
    },
    showEditAddForm(volunteer) {
      if (!volunteer) {
        volunteer = {};
      }
      this.activeVolunteer = _.cloneDeep(volunteer);
      this.toggleEditForm++;
    },
    showConfirmDelete(volunteer){
      console.log("showing delete form", volunteer);
      this.activeVolunteer = volunteer;
      this.toggleDeleteForm++;
    },
    async deleteVolunteer(){
      this.error = {};
      let url = "api/volunteers/" + this.activeVolunteer.id;
      await Resources["delete"](url,this.activeVolunteer);

      this.volunteers.splice(this.volunteers.indexOf(this.activeVolunteer), 1);
      this.activeVolunteer = null;
      this.toggleDeleteForm = 0;
    },
    async updateVolunteer() {
      try {
        this.error = {};
        let action = "post";
        let url = "api/volunteers";

        if(this.activeVolunteer.id){
          action = "put";
          url = url + '/' + this.activeVolunteer.id;
        } 

        this.activeVolunteer.year = parseFloat(this.activeVolunteer.year); //the .number modifier should work on the drop down but isn't
        this.activeVolunteer = await Resources[action](url,this.activeVolunteer);

        if(action == "post"){
          this.volunteers.push(this.activeVolunteer);
        }

        this.toggleEditForm = 0;
        this.activeVolunteer = null;

      } catch (e) {
        this.error = e;
      }
    }
  }
};
</script>

<style>

</style>
