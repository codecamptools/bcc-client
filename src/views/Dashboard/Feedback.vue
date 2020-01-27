<template>
  <div id="feedback">
    <div id="feedback-form" class="panel panel-default">
      <alert name="feedback"
        >We are contantly trying to improve Boise Code Camp. We welcome your
        feedback</alert
      >
      <form @submit.prevent="submit" class="form panel-body" role="form">
        <fieldset :disabled="sending">
          <div class="form-group">
            <textarea
              class="form-control"
              name="body"
              required
              placeholder="Please provide us with your feedback here..."
              rows="10"
              v-model.trim="feedback"
            ></textarea>
          </div>
        </fieldset>
        <button class="btn btn-primary pull-right" type="submit">Send</button>
      </form>
    </div>
    <div class="d-flex flex-wrap justify-content-between">
      <span class="text-primary">Feedback</span>
      <span class="mr-3 mt-2 text-secondary">{{
        done ? "Thank you for providing us with your feedback" : ""
      }}</span>
    </div>
  </div>
</template>

<script>
import { Resources } from "../../Services/Resources";
export default {
  name: "Profile",
  data() {
    return {
      feedback: "",
      sending: false,
      done: false
    };
  },
  methods: {
    async submit() {
      try {
        this.sending = true;
        await Resources.post("api/feedback", {
          user: this.$auth.user,
          feedback: this.feedback
        });
      } catch (e) {}
      this.feedback = "";
      this.done = true;
      this.sending = false;
    }
  }
};
</script>

<style></style>
