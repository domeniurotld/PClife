<template>
  <div class="main-layout">
      <Header />
      <!-- <hr class="section-divider"> -->
    <router-view/>
    <Footer />
    <ScrollToTopButton />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
// import Footer from '~/components/Footer.vue'
import ScrollToTopButton from '~/components/ScrollToTopButton.vue';
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>