<template>
  <div class="volunteer">
    <hero-sm />
    <main class="container-fluid pl-lg-5 pr-lg-5 bg-white">
      <div class="row mt-5">
        <div class="col-12 col-lg-10 m-auto">
          <h2>Volunteers</h2>
          <hr />
          <article class="content-item page">
            <p>
              Help us make Boise Code Camp a success this year by volunteering
              some of your time. Whether you have a little or a lot of time to
              volunteer, we need you. Youth are welcome to volunteer as well,
              provided theya re accompanied by an adult volunteer.
            </p>
            <p>
              Volunteers are needed before, during and after the event to
              complete such tasks as:
            </p>
            <ul>
              <li>arriving before the event to post signs</li>
              <li>prepare the speaker break room</li>
              <li>set-up and staff the registration tables</li>
              <li>direct attendees</li>
              <li>perform session attendance counts</li>
              <li>speaker T-shirts</li>
              <li>assist with lunch</li>
              <li>perform various odd jobs as they arise</li>
              <li>clean-up at the end of the day</li>
            </ul>
            <p>
              As a volunteer you will receive a Code Camp t-shirt and will have
              time throughout the day to attend any sessions that are of
              interest to you. <br /><br />If you have any questions about
              volunteering, please contact our
              <a href="mailto:boisecc@gmail.com" target="_blank"
                >Volunteer Coordinator</a
              >. <br /><br />If you are ready to volunteer, please sign-up now.
            </p>
          </article>
          <hr class="mb-5 mt-5" />
        </div>
      </div>
      <div class="row" v-if="success">
        <div class="col-12 col-lg-10 m-auto">
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <h4 class="alert-heading">Thank You for Volunteering!</h4>
            Our volunteer coordinator will be in touch soon.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              @click.prevent="success = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <form @submit.prevent="submit" class="col-12 col-lg-10 m-auto">
          <fieldset :disabled="sending">
            <div class="border rounded">
              <h4
                class="bg-primary text-white p-3 m-0 rounded-top border-bottom"
              >
                Volunteer Sign Up
              </h4>
              <div class="container">
                <div class="form-group d-flex flex-wrap mt-2">
                  <div class="col-12 col-md-6">
                    <label class="small" for="firstName">First Name:</label>
                    <input
                      v-model="volunteer.firstName"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <label class="small" for="lastName">Last Name:</label>
                    <input
                      v-model="volunteer.lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="form-group d-flex flex-wrap">
                  <div class="col-12">
                    <label class="small" for="email">Email:</label>
                    <input
                      v-model="volunteer.email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-12">
                    <label for="shift" class="small">Prefered Shift</label>
                    <select
                      name="preferedShift"
                      class="form-control"
                      v-model="volunteer.preferedShift"
                    >
                      <option selected disabled>--- Volunteer Shift ---</option>
                      <option :value="val" v-for="val in shifts" :key="val">{{
                        val
                      }}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-12">
                    <label for="shirtSize" class="small">Shirt Size</label>
                    <select
                      name="shift"
                      class="form-control"
                      v-model="volunteer.shirtSize"
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
                </div>

                <div class="alert alert-danger fade show" v-if="error.message">
                  {{ error.message }}
                </div>
                <div class="form-group">
                  <div
                    class="d-flex justify-content-between align-items-center px-3"
                  >
                    <button type="submit" class="btn btn-outline-primary">
                      Submit
                    </button>
                    <span
                      @click="volunteer = {}"
                      class="action muted text-danger"
                      >Cancel</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import { Resources } from "../Services/Resources";
export default {
  name: "home",
  components: {
    Hero
  },
  data() {
    return {
      volunteer: {
        shirtSize: "--- Shirt Size ---",
        preferedShift: "--- Volunteer Shift ---"
      },
      error: {},
      success: false,
      sending: false,
      shifts: [
        "Morning (07:00 AM - 11:00AM)",
        "Afternoon (10:45 AM - 02:45PM)",
        "Evening (02:30 AM - 06:30PM)",
        "All Day (7:00 AM - 06:30PM)"
      ],
      shirtSizes: [
        "Y-Small",
        "Y-Medium",
        "Y-Large",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL",
        "4XL"
      ]
    };
  },
  methods: {
    async submit() {
      try {
        this.error = {};
        this.sending = true;
        let url = "api/volunteers";
        if (window.location.hostname.includes("localhost")) {
          url = "//localhost:5000/" + url;
        }
        let res = await Resources.post(url, this.volunteer);
        this.volunteer = {
          shirtSize: "--- Shirt Size ---",
          preferedShift: "--- Volunteer Shift ---"
        };
        this.success = true;
      } catch (e) {
        this.error = e;
      } finally {
        this.sending = false;
      }
    }
  }
};
</script>
<style>
.volunteer header {
  background-image: url(/img/codecamp-volunteer.jpg);
}
</style>
