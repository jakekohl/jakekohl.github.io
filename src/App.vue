<script setup>
import TopNavBar from './components/TopNavBar.vue';

const nodeEnv = import.meta.env.VITE_NODE_ENV;
console.debug('NODE_ENV:', nodeEnv);

</script>

<template>
  <TopNavBar />
  <ToolBar v-if="nodeEnv === 'DEV'">Development Mode</ToolBar>
  <RouterView />
</template>