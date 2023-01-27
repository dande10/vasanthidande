<template>
  <div class="bg-black min-h-screen">
    <NavigationBar />
    <Nuxt />
    <!-- <TheFooter /> -->
  </div>
</template>


<style lang="postcss" scoped>
.dark-mode {
  @apply text-gray bg-black;
}

.light-mode {
  @apply text-black bg-white;
}
</style>