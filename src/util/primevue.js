import Card from 'primevue/card';
import Menubar from 'primevue/menubar';

import Badge from 'primevue/badge';

import Avatar from 'primevue/avatar';

export default {
  install: (app) => {
    app.component('PrimeCard', Card);
    app.component('PrimeMenubar', Menubar);
    app.component('PrimeAvatar', Avatar)
    app.component('PrimeBadge', Badge)
  }
}