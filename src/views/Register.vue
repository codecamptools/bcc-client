<template>
  <section class="register">
    <hero-sm bg="" />
    <div class="container-fluid pt-5 pl-lg-5 pr-lg-5 bg-white">
      <div class="row">
        <div class="col-12 col-lg-10 m-auto">
          <div class="timer-section">
            <div id="countdown">
              <ul
                class="pl-2 d-flex flex-column flex-md-row justify-content-center"
              >
                <li>
                  <p class="days">{{ days }}</p>
                  <p class="timeRefDays">days</p>
                </li>
                <li>
                  <p class="hours">{{ hours }}</p>
                  <p class="timeRefHours">hours</p>
                </li>
                <li>
                  <p class="minutes">{{ minutes }}</p>
                  <p class="timeRefMinutes">minutes</p>
                </li>
                <li>
                  <p class="seconds">{{ seconds }}</p>
                  <p class="timeRefSeconds">seconds</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <article class="content-item page">
            <h1 class="page-title">Register For Code Camp</h1>
            <p><strong>Skip the line register online?</strong></p>
            <p>
              Tickets for Boise Code Camp are limited so be sure to get yours to
              secure your access.
            </p>
            <div class="card-deck mb-3">
              <div
                class="card p-3 d-flex flex-column align-items-center justify-content-center bg-dark text-light"
              >
                <i class="fa fa-fw fa-calendar fa-2x mb-3"></i>
                <h3>When</h3>
                <p>Saturday, {{ conference.date }}</p>
                <p>8:00 AM - 6:00 PM MST</p>
                <a
                  class="d-flex text-light flex-column align-items-center justify-content-center"
                  :href="gcal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-fw fa-calendar-check-o"></i>
                  <small>Save Event</small>
                </a>
              </div>
              <div
                class="card p-3 d-flex flex-column align-items-center justify-content-center bg-primary text-white"
              >
                <i class="fa fa-fw fa-map-marker fa-2x mb-3"></i>
                <h3>Where</h3>
                <p>{{ conference.venue }}</p>
                <p>{{ conference.address }}</p>
                <a
                  class="d-flex text-white flex-column align-items-center justify-content-center"
                  :href="directions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-fw fa-map"></i>
                  <small>Get Directions</small>
                </a>
              </div>
            </div>
            <div>
              <!-- TODO Update this embed link -->
              <iframe
                src="//eventbrite.com/tickets-external?eid=89480814525&amp;ref=etckt"
                scrolling="auto"
                allowtransparency="true"
                width="100%"
                height="498"
                frameborder="0"
              ></iframe>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      interval: 0,
      now: Date.now(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  computed: {
    conference() {
      return this.$store.state.event;
    },
    startTime() {
      return this.conference.dTime;
    },
    gcal() {
      return `https://www.google.com/calendar/render?action=TEMPLATE&text=Boise+Code+Camp+2020&details=Code+Camp+is+a+free+event+for+developers%2C+hardware+geeks%2C+and+the+curious+to+come+and+learn+from+their+peers.+We+will+have+a+full+day+worth+of+sessions+ranging+from+databases%2C+the+latest+development+languages%2C+mobile+technologies%2C+and+much+more.&location=1700+W+University+Dr%2C+Boise%2C+ID+83725&dates=20200321T140000Z%2F20200321T120000Z`;
    },
    directions() {
      return `https://www.google.com/maps/place/Boise+State/@43.602941,-116.2040951,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb89c745ebb729df8!8m2!3d43.602941!4d-116.2019064`;
    }
  },
  mounted() {
    this.interval = setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    updateTime() {
      this.now = Date.now();
      // Find the distance between now and the count down date
      var distance = this.startTime.getTime() - this.now;
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }
};
</script>

<style>
.register header {
  background-image: url(/img/codecamp-register.jpg);
}
.timer-section {
  padding: 0px 0px 0px 0px;
  width: 100%;
}
#countdown > table {
  margin: 10px auto 0;
}
#countdown ul {
  list-style: outside none none;
  text-align: center;
  margin-bottom: 2rem;
}
#countdown li {
  display: inline-block;
  margin-right: 15px;
  min-width: 80px;
  padding: 10px 20px;
  text-align: center;
  background: var(--primary);
  position: relative;
}
#countdown p {
  color: #fff;
  display: block;
  margin: 0;
  padding: 0;
}
.timeRefDays,
.timeRefHours,
.timeRefMinutes,
.timeRefSeconds {
  font-size: 15px !important;
  text-transform: uppercase;
}
p.days,
p.hours,
p.minutes,
p.seconds {
  font-size: 48px !important;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
</style>
