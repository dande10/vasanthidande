<template>
  <div class="font-sans text-gray container m-auto">
    <h1 class="text-4xl">Blog</h1>
    <Articles :articles="articles" />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import Articles from '../../components/articles.vue';
export default {
  name: "Projects",
  components: {
    Icon,
    Articles,
  },
  data() {
    return {
      articles: [
        {
          url: "/blog/using-github-discussions-as-your-blog-engine",
          title: "Using Github discussions in blog",
          description: "From a random idea to an actual blog implementation",
          tools: [
            "platform",
            "Experiments"
          ],
          time: "31/10/2021",
          readingTime: "6 min read"
        },
        {
          url: "/blog/advanced-vue-concepts-v-memo",
          title: "Looking at the new v-memo directive in Vue 3.2",
          description: "See how we can optimise parts of our templates with this new directive",
          tools: [
            "Vue",
            "Performance"
          ],
          time: "24/11/2021",
          readingTime: "2 min read"
        }
      ]
    }
  },
  layout: "navigation",
};
</script>
