import Aura from '@primevue/themes/aura';

// https://primevue.org/configuration/
const config = { 
  theme: {
    preset: Aura,
    options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false
    }
  },
  ptOptions: {
      mergeSections: true,
      mergeProps: false
  },
  ripple: true,
}

export default {
  config
};