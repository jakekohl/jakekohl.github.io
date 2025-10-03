<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const router = useRouter();
const route = useRoute();

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    dataTest: 'nav-home',
    command: () => {
      router.push('/');
    }
  },
  {
    label: 'Projects',
    icon: 'pi pi-briefcase',
    dataTest: 'nav-projects',
    command: () => {
      router.push('/projects');
    }
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    dataTest: 'nav-contact',
    command: () => {
      router.push('/contact');
    }
  }
]);

const socialLinks = ref([
  {
    icon: 'pi pi-github',
    link: 'https://github.com/jakekohl',
    dataTest: 'social-github'
  },
  {
    icon: 'pi pi-linkedin',
    link: 'https://linkedin.com/in/jacob-jp-kohl',
    dataTest: 'social-linkedin'
  }
]);

const currentPath = computed(() => route.path);

const isActiveRoute = (label) => {
  const routeMap = {
    'Home': '/',
    'About': '/about',
    'Projects': '/projects',
    'Contact': '/contact'
  };
  return currentPath.value === routeMap[label];
};
</script>

<template>
  <header data-test="nav-top-menubar">
    <div class="navigation-wrapper">
      <PrimeMenubar :model="items" class="professional-menubar">
        <template #start>
          <div class="brand-section" @click="router.push('/')" data-test="brand-slot">
            <span class="brand-text">Jake Kohl</span>
          </div>
          <Divider type="vertical" />
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
          <a 
            v-ripple 
            class="flex items-center nav-item" 
            :class="{ 'active-nav': isActiveRoute(item.label) }"
            v-bind="props.action"
            :data-test="item.dataTest"
          >
            <i :class="item.icon" class="mr-2"></i>
            <span>{{ item.label }}</span>
            <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
          </a>
        </template>
        <template #end>
          <div class="social-links">
            <a v-for="link in socialLinks" :key="link.link" :href="link.link" target="_blank" rel="noopener" class="social-link" :data-test="link.dataTest">
              <i :class="link.icon"></i>
            </a>
          </div>
        </template>
      </PrimeMenubar>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navigation-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.professional-menubar {
  border: none;
  background: transparent;
  padding: 0.75rem 0;
}

.brand-section {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.brand-section:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  letter-spacing: -0.025em;
}

.nav-item {
  padding: 0.75rem 1.75rem;
  margin: 0 0.3rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  color: #475569;
  text-decoration: none;
}

.nav-item:hover {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  transform: translateY(-1px);
}

.active-nav {
  background: #6366f1;
  color: white !important;
}

.active-nav:hover {
  background: #4f46e5;
  color: white !important;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-link {
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #64748b;
  text-decoration: none;
}

.social-link:hover {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .brand-text {
    font-size: 1.25rem;
  }
  
  .navigation-wrapper {
    padding: 0 0.5rem;
  }
}
</style>