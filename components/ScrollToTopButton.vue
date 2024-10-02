<template>
    <div v-if="isVisible" class="scroll-to-top" @click="scrollToTop">
      <Icon name="material-symbols:arrow-upward-rounded" size="2rem"/>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      handleScroll() {
        // Show button if scrolled down more than 100px
        this.isVisible = window.scrollY > 100;
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  .scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #5d5b5b;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 24px;
  }
  </style>
  