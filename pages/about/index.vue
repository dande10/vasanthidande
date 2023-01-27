<template>
  <div class="font-sans text-gray container m-auto p-5">
    <h1 class="text-4xl text-blue">
      About Me
    </h1>
    <p class="mt-10">Here you will find more information about me, what I do, and my current skills mostly
      in terms of
      programming and
      technology
    </p>
    <div class="grid md:grid-cols-1 mt-10">
      <div class="">
        <h2 class="text-2xl text-blue">My Skills</h2>
        <div class="mt-4">
          <span
            class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">HTML</span>
          <span
            class="bg-gray text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray dark:text-black">CSS</span>
          <span
            class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">HTML5</span>
          <span
            class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Vue
            JS</span>
          <span
            class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">JavaScript</span>
          <span
            class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">SASS</span>
          <span
            class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Vuex</span>
          <span
            class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">Vue-router</span>

        </div>
      </div>

    </div>
    <Articles :articles="articles" />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import Articles from "@/components/articles.vue";
export default {
  name: "About",
  components: {
    Icon,
    Articles
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
