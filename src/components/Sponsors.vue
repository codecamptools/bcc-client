<template>
  <div class="sponsors container-fluid pl-lg-5 pr-lg-5 bg-white">
    <div
      class="row m-auto pl-3 pt-4"
      :class="level"
      v-for="(sponsors, level) in sponsorMap"
      :key="level"
    >
      <div class="col-12" v-if="!hide(level)">
        <small class="uppercase"
          ><b>{{ level }}</b></small
        >
      </div>
      <div
        class="col-6 col-sm-2 mt-2 sponsor"
        v-for="s in sponsors"
        :key="s.id"
      >
        <sponsor :sponsor="s" v-if="level != 'friends'" />
        <small v-else>{{ s.name }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import Sponsor from "./Sponsor.vue";
export default {
  name: "Sponsors",
  props: ["hideGolds", "hideSilvers", "hideFriends"],
  computed: {
    sponsors() {
      return this.$store.state.sponsors;
    },
    platinums() {
      return this.sponsors.filter(s => s.level == "platinum");
    },
    golds() {
      return this.sponsors.filter(s => s.level == "gold" && !this.hideGolds);
    },
    silvers() {
      return this.sponsors.filter(
        s => s.level == "silver" && !this.hideSilvers
      );
    },
    friends() {
      return this.sponsors.filter(
        s => s.level == "friend" && !this.hideFriends
      );
    },
    sponsorMap() {
      return {
        platinums: this.platinums,
        golds: this.golds,
        silvers: this.silvers,
        friends: this.friends
      };
    }
  },
  methods: {
    hide(level) {
      try {
        if (!this[level].length) {
          return true;
        }
        level = level[0].toUpperCase() + level.slice(1);
        return this[`hide${level}`];
      } catch (e) {
        return false;
      }
    }
  },
  components: {
    Sponsor
  }
};
</script>

<style>
.golds .sponsor img {
  height: 100px;
  width: 100px;
}

.platinums .sponsor img {
  filter: grayscale(0);
  height: 125px;
  width: 125px;
}
</style>
