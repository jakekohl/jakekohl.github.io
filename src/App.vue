<script setup>
import TopNav from './components/TopNav.vue';
</script>

<template>
  <div id="app" class="min-h-screen">
    <TopNav />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
@import './styles/styles.scss';

body {
  margin: 0;
  padding: 0;
  font-family: var(--font-family-primary);
  background: linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-accent-blue-dark) 50%, var(--color-accent-blue-darker) 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
}

main {
  padding-top: 80px; /* Account for fixed navigation height */
}

</style>
