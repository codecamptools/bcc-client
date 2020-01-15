<template>
  <div class="about">
    <div class="row m-auto p-md-3 mt-5">
      <div class="col-12 col-lg-6 d-flex justify-content-center">
        <img
          src="img/codecamp-boise.png"
          alt="about"
          class="text-shadow mb-4 mb-lg-0"
          style="width: 100%;object-fit: contain;"
        />
      </div>
      <div
        class="col-12 col-lg-4 offset-lg-1 d-flex flex-column justify-content-center"
      >
        <h2>About Code Camp</h2>
        <p>
          Code Camp is a free event for developers, hardware geeks, and the
          curious to come and learn from their peers. We will have a full day
          worth of sessions ranging from databases, the latest development
          languages, mobile technologies, and much more.
        </p>
      </div>
    </div>

    <div class="row m-auto p-md-3 mt-5">
      <div
        class="col-12 col-lg-4 d-flex flex-column justify-content-center offset-lg-1 order-2 order-lg-1"
      >
        <h2>Why Boise</h2>
        <p>
          As the third largest city in the Pacific Northwest and the largest
          city in the region, Boise is our core of culture. It is the capital
          city of Idaho and the hub of commerce, innovation, government and
          industry for the state. With a river literally running through it,
          this dynamic and growing city showcases how connectivity to commerce
          coexists with vibrant cultural experiences and easy access to
          recreation and surrounding cities and states.
        </p>
        <p>
          Boise is consistently ranked most popular places to live with its
          people-friendly nature you'll be sure to enjoy your stay.
        </p>
      </div>
      <div
        class="col-12 col-lg-6 offset-lg-1 order-1 order-lg-2 d-flex justify-content-center"
      >
        <div
          class="d-flex justify-content-center rounded z-depth mb-4 mb-lg-0"
          style="width: 600px; height: 337px"
        >
          <iframe
            class="w-100 rounded"
            width="600"
            height="337"
            src="https://www.youtube.com/embed/XRhGeau8RlE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div class="row m-auto p-md-3 mt-5">
      <div class="col-12 col-lg-6 d-flex justify-content-center">
        <img
          src="img/codecamp-collage.png"
          alt="about"
          class="text-shadow mb-4 mb-lg-0"
          style="object-fit: contain; width: 100%;"
        />
      </div>
      <div
        class="col-12 col-lg-4 offset-lg-1 d-flex flex-column justify-content-center"
      >
        <h2>Youth Track</h2>
        <p>
          Do you have young coders? Are you a young person interested in
          technology? Boise Code Camp has an all-day track of coding and
          technology sessions aimed at youth ages 6 to 16. In the last year,
          millions of kids, many of them in our own community, have learned to
          code with the Hour of Code and tools like Scratch and Raspberry Pi.
          Boise Code Camp is representative of our community and the kids in our
          community are starting to code.
        </p>
        <p>
          The youth track is for the novice or experienced kid coder. In our
          Scratch sessions, new coders will find a very approachable platform
          and participants in the Hour of Code will find a very familiar
          interface style. Experienced coders will find challenging material for
          building a web site or can even sneak into an adult focused javscript
          or robotics session and learn what it's like to be a professional
          programmer. Also, what kid doesn't want to learn how to hack Minecraft
          and hang out with other kids who are also interested in technology?
        </p>
        <p>
          Kid coders as young as 6 years old up through high school can present
          so if your kid is interested in presenting see our
          <a
            href="https://sessionize.com/boisecodecamp-2020/"
            target="_blank"
            rel="noopener"
            title="call for speakers"
          >
            call for speakers page</a
          >
        </p>
      </div>
    </div>
    <manifesto />
  </div>
</template>

<script>
import Manifesto from "./Manifesto";
export default {
  name: "About",
  components: {
    Manifesto
  }
};
</script>

<style></style>
