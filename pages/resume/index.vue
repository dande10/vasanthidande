<template>
  <div class="font-sans text-gray container m-auto">
    <h1 class="text-4xl">Resume</h1>
    <p>Reach out to me via my <nuxt-link to="/contact">contact page</nuxt-link> . <a
        href="https://docs.google.com/document/d/1l7RuopvuP9esGjKWby6zESf_54DSMJpU/view?format=doc"
        target="_blank">view</a> or
      <a href="https://docs.google.com/document/d/1l7RuopvuP9esGjKWby6zESf_54DSMJpU/export?format=pdf" target="_blank"
        download>download</a> the resume
    </p>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "Projects",
  components: {
    Icon,
  },
  layout: "navigation",
};
</script>
