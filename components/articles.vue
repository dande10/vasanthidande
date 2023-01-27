<template>
  <div class="h-full md:w-full lg:w-auto flex flex-col justify-center xl:pl-14 mt-12 lg:mt-0">
    <div class="latest-posts w-full px-0 md:px-4 lg:px-8 py-8 container mx-auto svelte-n8s4ja">
      <h2 class="text-md tracking-wide uppercase">Latest articles</h2>
      <div class="mt-8 mx-auto space-y-8" v-for="(article, key) in articles" :key="key">
        <div class="w-full"><a :href="article.url" class="block h-full">
            <article
              class="card border bg-gray-800 border-gray-600 h-full relative flex flex-col hover:border-primary svelte-3yagab">
              <div class="p-4 rounded-lg filter drop-shadow-xl flex-grow">
                <div class="flex flex-col justify-between">
                  <h1 class="text-md md:text-xl font-semibold">{{ article.title }}</h1>
                  <p class="text-md leading-tight mt-4 text-gray-300">{{ article.description }}</p>
                  <div v-for="(tool, index) in article.tools" :key="index">
                    <div class="flex space-x-2 mt-4 items-center"><span
                        class="tag px-2 py-1 border border-current rounded text-sm leading-none svelte-v24o7l"
                        style="--label-h: 48; --label-s: 96.9; --label-l: 50">{{ tool }}</span></div>
                  </div>
                </div>

                <div class="flex justify-between text-sm pt-4">
                  <div class="flex">
                    <Icon icon="simple-line-icons:calender" color="#17a2b8" />
                    <div class="align-middle">{{ article.time }}</div>
                  </div>
                  <div class="flex">
                    <Icon icon="material-symbols:nest-clock-farsight-analog-outline-rounded" color="#e31b6d" />
                    <span class="align-middle">{{ article.readingTime }}</span>
                  </div>
                </div>
              </div>

            </article>
          </a>
        </div>
      </div>
      <div class="mt-8 text-center"><a href="/blog" class="inline-block px-16 py-2 font-bold text-white uppercase"><span
            class="inline-block mr-2 text-primary font-bold">+</span>View all
        </a></div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "Articles",
  components: {
    Icon,
  },
  props: {
    articles: {
      type: Array,
      default: []
    }
  },
}
</script>