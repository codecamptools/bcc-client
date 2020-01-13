<template>
  <footer class="mt-5">
    <div class="container pt-5 text-center">
      <div class="row d-flex flex-wrap align-items-center">
        <div class="col-md-3 col-10 mx-auto pb-3 text-center">
          <img
            src="../assets/invert.png"
            alt="codecamp logo"
            class="img-fluid"
          />
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="col-md-4 col-sm-6 col-6 p-0 float-left mb-3">
            <h5 class="mb-4 font-weight-bold text-uppercase">Links</h5>
            <ul class="list-group">
              <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                <router-link to="register">Register</router-link>
              </li>
              <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="/sponsor-packet" rel="preload" title="sponsor packet"
                  >Sponsor</a
                >
              </li>
              <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                <router-link to="volunteer">Volunteer</router-link>
              </li>
              <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                <router-link v-if="$auth.isAuthenticated" to="dashboard"
                  >Manage</router-link
                >
                <router-link v-else to="login">Login</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-6 col-6 mb-3 p-0 float-left">
            <h5 class="mb-4 font-weight-bold text-uppercase">Connect</h5>
            <ul class="list-group">
              <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                <a
                  href="https://www.linkedin.com/company/boise-code-camp/about/"
                  ><i class="fa fa-linkedin mr-1"></i> LinkedIn</a
                >
              </li>
              <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://twitter.com/boisecodecamp"
                  ><i class="fa fa-twitter mr-1"></i> Twitter</a
                >
              </li>
              <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://github.com/codecamptools" target="_blank"
                  ><i class="fa fa-github mr-1"></i> Github</a
                >
              </li>
              <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                <a href="https://www.facebook.com/boisecodecamp" target="_blank"
                  ><i class="fa fa-facebook mr-1"></i> Facebook</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white py-3 small">
      <div class="d-flex justify-content-center align-items-center">
        <a class="mr-4" href="../privacy.html">Privacy &amp; terms</a>
        <a href="../sitemap.xml">Sitemap</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Foot"
};
</script>

<style>
footer {
  font-size: 12pt;
}
</style>
