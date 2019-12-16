<template>
  <div class="home">
    <hero />
    <main class="container pl-lg-5 pr-lg-5 bg-white">
      <section class="mt-5">
        <h1>Sponsorship Levels</h1>
        <p>
          Several sponsorship levels are available to suit your organization and
          contributing couldn’t be easier. Details about our sponsorship levels
          are below.
        </p>
        <div class="pricing-table mt-3 d-flex">
          <table class="table table-striped table-responsive-md table-bordered">
            <thead>
              <tr>
                <th>
                  <h4 class="m-0"><b>Levels</b></h4>
                </th>
                <th>
                  <span>Platinum</span>
                  <br />
                  <span>$1,500</span>
                </th>
                <th>
                  <span>Gold</span>
                  <br />
                  <span>$1,000</span>
                </th>
                <th>
                  <span>Silver</span>
                  <br />
                  <span>$500</span>
                </th>
                <th>
                  <span>
                    Friend
                  </span>
                  <br />
                  <span>$100</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Acknowlegement prior to the Keynote Speaker with chance to say
                  a few words
                </td>
                <td>✓</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Space for a booth in the main reception area
                </td>
                <td>✓</td>
                <td>✓</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Sponsor bingo booth, required for raffle prize
                </td>
                <td>✓</td>
                <td>✓</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Your Organization flyer will be included in every registration
                  packet
                </td>
                <td>✓</td>
                <td>✓</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Guaranteed speaker sessions
                </td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Linked banner on the Boise Code Camp Website
                </td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Speaker Dinner invitation &amp; recognition
                </td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>
                  Complementary t-shirts
                </td>
                <td>3</td>
                <td>2</td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="mt-5">
        <h1>Platinum Plus</h1>
        <p>
          New for 2020, we are offering opportunities to become a "Platinum
          Plus" sponsor. The prices below includes a Platinum sponsorship.
        </p>
        <div class="pricing-table mt-3 d-flex">
          <table class="table table-striped table-responsive-md table-bordered">
            <thead>
              <tr>
                <th>
                  <h4 class="m-0"><b>Platinum Plus</b></h4>
                </th>
                <th>
                  <span>Title</span>
                  <br />
                  <span>$15,000</span>
                </th>
                <th>
                  <span>Shirt Sponsor</span>
                  <br />
                  <span>$4,500</span>
                </th>
                <th>
                  <span>Keynote</span>
                  <br />
                  <span>$3,750</span>
                </th>
                <th>
                  <span
                    >Track Tier 1
                    <sup>(T1)</sup>
                  </span>
                  <br />
                  <span>$3,500</span>
                </th>
                <th>
                  <span
                    >Track Tier 2
                    <sup>(T2)</sup>
                  </span>
                  <br />
                  <span>$2,500</span>
                </th>
                <th>
                  <span>
                    Youth Track
                    <sup>(T1)</sup>
                  </span>
                  <br />
                  <span>$2,000</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Presented by... on all Material
                  <small><sup>(Must secure by Feb 1st)</sup></small>
                </td>
                <td>✓</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Invitation to the Advisory Board
                </td>
                <td>✓</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Single color logo on one arm of T-Shirts
                  <small><sup>(Must secure by Feb 1st)</sup></small>
                </td>
                <td>✓</td>
                <td>✓</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Logo placement on Keynote Stage
                </td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Acknowlegement in media coorespondances
                </td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>
                  Opportunity to provide a featured article on Boise Code Camp
                  Website
                </td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Keynote from "../components/Keynote";
import About from "../components/About";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";

export default {
  name: "home",
  components: {
    Hero,
    Keynote,
    About,
    Speakers,
    Sponsors
  }
};
</script>

<style scoped>
table {
  font-size: 0.75rem;
  margin: auto;
}

tr,
th,
td {
  text-align: center;
  vertical-align: middle;
}
th {
  align-items: center;
}
td {
  font-size: 2rem;
  font-weight: bold;
}
td:first-child {
  text-align: left;
  font-size: 1rem;
  font-weight: normal;
}
</style>
