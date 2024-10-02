<template>
    <header class="header">
      <div class="row desktop-only align-items-center">
        <div class="col-auto logo">
          <img src="/assets/logos/logo-transparent.png" alt="Logo" @click="goToRoute('/')"/>
        </div>
        <nav class="nav nav-right">
          <button class="tab-button" @click="scrollToSection('tic')">Produse TIC</button>
          <button class="tab-button" @click="scrollToSection('utilaje')">Utilaje</button>
          <button class="tab-button" @click="scrollToSection('contact')">Contact</button>
        </nav>
      </div>

      <div class="col mobile-only">
        <div class="logo" style="padding: 0;">
          <img src="/assets/logos/logo-transparent.png" alt="Logo" @click="goToRoute('/')"/>
        </div>
        <nav class="nav nav-left">
          <button class="tab-button" @click="scrollToSection('tic')">Produse TIC</button>
          <button class="tab-button" @click="scrollToSection('utilaje')">Utilaje</button>
          <button class="tab-button" @click="scrollToSection('contact')">Contact</button>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      goToRoute(route) {
        this.$router.push(route);
      },
      scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
  </script>
  
  <style scoped>
  
    .desktop-only {
      width:100%; 
      flex-direction:row; 
      display: flex;
    }
  
    .mobile-only {
      display: none; 
    }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }
  
  .logo img {
    height: 100px;
    cursor: pointer;
  }
  
  .nav {
    display: flex;
    gap: 1rem;
  }
  
  .nav-left {
    flex: 1;
  }
  
  .nav-right {
    flex: 1;
    justify-content: flex-end;
  }
  
  .tab-button {
    font-size: 1.6rem;
    border: none;
    background: #d92b24;
    color: white;
    text-align: center;
    align-items: center;
    display: flex;
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .desktop-only {
      display: none;
    }
  
    .mobile-only {
      width: 100%; 
      display: flex; 
      flex-direction: column;
    }
  
    .header {
      flex-direction: column;
      align-items: center;
      padding: 0;
    }
  
    .nav {
      width: 100%;
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
  
    .nav-left, .nav-right {
      align-items: center;
    }
  
    .tab-button {
      font-size: 1.1rem;
    }
  }
  </style>
  