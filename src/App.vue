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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
}

main {
  padding-top: 1rem;
}
</style>
