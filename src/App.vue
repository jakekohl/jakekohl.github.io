<script setup>
import TopNavBar from './components/TopNavBar.vue';

const nodeEnv = import.meta.env.VITE_NODE_ENV;
console.debug('NODE_ENV:', nodeEnv);

</script>

<template>
  <TopNavBar />
  <ToolBar v-if="process.env.NODE_ENV === 'development'">Development Mode</ToolBar>
  <RouterView />
</template>