<template>
  <div class="sponsor">
    <a class="d-flex flex-column justify-content-center align-items-center" :href="sponsor.url">
      <img :src="sponsor.logo" :alt="sponsor.name" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Sponsor",
  props: {
    sponsor: {
      required: true,
      type: Object
    }
  }
};
</script>

<style>
.sponsor a{
  text-decoration: none;
}
.sponsor img {
  filter: grayscale(1);
  height: 80px;
  width: 80px;
  object-fit: contain;
}
</style>