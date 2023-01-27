<template>
  <div class="font-sans">
    <Particlescomponent />
    <div
      class="absolute text-2xl text-gray text-center w-100 m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-8">
      <div>
        <h2>
          Hello, I am
          <span class="name">
            <span class="text-pink font-bold">VASANTHI DANDE</span>
          </span>
        </h2>
        <h2>Front end developer</h2>
        <p class="text-base">Working with my hands to make magic happen on the internet. View my blog Articles, Resumé,
          Contact Me, or
          send me an email at dande.vasanthi@gmail.com.
        </p>
        <div class="flex text-center items-center justify-center mt-2">
          <a href="https://github.com/dande10" class="mr-2">
            <Icon icon="ant-design:github-filled" />
          </a>
          <a href="https://twitter.com/dande_vasanthi" class="mr-2">
            <Icon icon="icon-park:twitter" />
          </a>
          <a href="https://www.linkedin.com/in/vasanthi-dande/">
            <Icon icon="entypo-social:linkedin-with-circle" color="#0a66c2" />
          </a>
        </div>
      </div>
      <div class="mt-2">
        <NuxtLink to="/about">
          <button class="btn btn-info fade-in text-blue">View all &nbsp;</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import Particlescomponent from "../components/ParticlesJS.vue";
export default {
  name: "IndexPage",
  components: {
    Icon,
    Particlescomponent,
  },
};
</script>
