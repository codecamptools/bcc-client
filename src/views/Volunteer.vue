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
      <div class="row mt-5">
        <div class="col-12 col-lg-10 m-auto">
          <h2>Volunteer Sign Up</h2>
        </div>
        <form @submit.prevent="submit" class="mt-3"></form>
      </div>
    </main>
  </div>
</template>

<script>
import Hero from "../components/Hero";

export default {
  name: "home",
  components: {
    Hero
  }
};
</script>
<style>
.volunteer header {
  background-image: url(/img/codecamp-volunteer.jpg);
}
</style>
