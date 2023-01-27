<
<template>
  <div class="text-gray flex w-100">
    <div class="w-1/2">

      <div class="w-16 h-16 p-4 col">
        <NuxtLink to="/">
          <img src="../static/logo_2.png" alt="logo" class="" />
        </NuxtLink>
      </div>
    </div>
    <div class="col w-1/2 text-right mt-4 hidden md:block">
      <NuxtLink to="/about" class="p-4"> ABOUT </NuxtLink>
      <NuxtLink to="/blog" class="p-4"> BLOG </NuxtLink>
      <NuxtLink to="/resume" class="p-4"> RESUME </NuxtLink>
      <NuxtLink to="/contact" class="p-4"> CONTACT </NuxtLink>

      <!-- todo -->
      <!-- <button class="btn border border-white capitalize" @click="changeMode">
        {{ btnLabel }}
      </button> -->
    </div>
    <div class="p-4 text-right w-1/2 block md:hidden">


      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button" @click="navMenu">
        <Icon icon="mdi:hamburger-menu" color="#e31b6d" />
      </button>
      <!-- Dropdown menu -->
      <div id="dropdown" v-show="navMenuShow"
        class="absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-1/2 pr-10 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="/about"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ABOUT</a>
          </li>
          <li>
            <a href="/blog"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">BLOG</a>
          </li>
          <li>
            <a href="/resume"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">RESUME</a>
          </li>
          <li>
            <a href="/contact"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CONTACT
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
export default {
  name: "NavigationBar",
  components: {
    Icon,
  },
  data() {
    return {
      navMenuShow: false
    }
  },

  computed: {
    btnLabel() {
      return "dark"
      // return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  },
  methods: {
    changeMode() {
      // this.$colorMode.preference =
      //   this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
    navMenu() {
      this.navMenuShow = !this.navMenuShow
    }
  }
};
</script>
<style>
.nuxt-link-active,
.nuxt-link-exact-active {
  color: #e31b6d !important;
}
</style>
