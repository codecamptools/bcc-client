<template>
  <div class="text-center h-100 d-flex flex-column justify-content-between">
    <img
      class="rounded img-fluid grayscale action w-75 m-2 align-self-center"
      :src="speaker.profilePicture"
      @error="
        speaker.profilePicture = `https://tinygraphs.com/squares/${speaker.fullName}`
      "
      :alt="speaker.fullName"
      @click="setActive(speaker)"
    />
    <div class="card-body p-2">
      <div class="card-title text-primary action" @click="setActive(speaker)">
        {{ speaker.fullName }}
      </div>
      <div class="card-text">
        <sup class="text-muted">{{ speaker.tagLine }}</sup>
      </div>
    </div>
    <div class="card-footer">
      <a
        v-for="link in speaker.links"
        :key="link.linkType"
        :href="link.url"
        target="_blank"
        :title="link.linkType"
      >
        <i
          class="fa fa-fw fa-globe"
          :class="'fa-' + link.linkType.toLowerCase()"
        ></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["speaker"],
  name: "Speaker",
  methods: {
    setActive() {
      this.$emit("setActive", this.speaker);
    }
  }
};
</script>

<style></style>
