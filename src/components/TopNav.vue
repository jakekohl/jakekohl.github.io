<script setup>
import { useRouter } from 'vue-router';

import { ref } from 'vue';

const router = useRouter();

const items = ref([
  {
    label: 'About',
    icon: 'pi pi-info-circle',
    command: () => {
      router.push('/about');
    }
  },
  {
    label: 'Projects',
    icon: 'pi pi-briefcase',
    items: [
      {
        label: 'This Site',
        icon: 'pi pi-face-smile'
      }
    ]
  },
])

</script>

<template>
  <div class="card">
    <PrimeMenubar :model="items">
      <template #start>
        <i class="pi pi-home"/>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span>{{ item.label }}</span>
          <PrimeBadge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
          <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
        </a>
      </template>
      <template #end>
        <div>
          <i class="pi pi-user" />
          <p> Contact Me </p>
        </div>
      </template>
    </PrimeMenubar>
  </div>
</template>

<scss>
  
</scss>