<template>
  <div class="font-sans text-gray container m-auto">
    <h1 class="text-4xl">Contact</h1>
    <ContactForm />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import ContactForm from "@/components/ContactForm.vue"
export default {
  name: "Projects",
  components: {
    Icon,
    ContactForm,
  },
  layout: "navigation",
};
</script>
