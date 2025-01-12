<script setup>
import 'primeicons/primeicons.css';
import { topNavMenu } from '../utils/navMenus'
import { ref } from "vue";

const items = ref(topNavMenu);

</script>
<template>
  <div class="card">
    <Menubar :model="items" class="full-width-menu">
      <template #start>
        <a href="/jakekohl.github.io/" class="icon">
          <i class="p pi-home" style="font-size: 2.5rem"></i>
        </a>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.label }}</span>
          <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
          <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
        </a>
      </template>
      <template #end>
        <!-- What can we do with this space? -->
      </template>
    </Menubar>
  </div>
</template>

<style lang="scss">
.full-width-menu {
  width: 100%;
}

</style>