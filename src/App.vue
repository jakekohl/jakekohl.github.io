<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div id="app">
    <Nav />
    <button data-entity="toggle-dark-mode" @click="toggleDark()">
    Toggle Dark Mode
    </button>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/partials/nav.vue';

export default {
  name: 'app',
  components: {
    Nav
  }  
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.dark {
  background: #16171d;
  color: #fff;
}
</style>