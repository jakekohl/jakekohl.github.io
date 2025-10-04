import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import Badge from 'primevue/badge';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Chip from 'primevue/chip';
import Divider from 'primevue/divider';
import Panel from 'primevue/panel';
import Timeline from 'primevue/timeline';
import ProgressBar from 'primevue/progressbar';

export default {
  install: (app) => {
    app.component('PrimeCard', Card);
    app.component('PrimeMenubar', Menubar);
    app.component('PrimeAvatar', Avatar);
    app.component('PrimeBadge', Badge);
    app.component('PrimeButton', Button);
    app.component('PrimeTag', Tag);
    app.component('PrimeChip', Chip);
    app.component('PrimeDivider', Divider);
    app.component('PrimePanel', Panel);
    app.component('PrimeTimeline', Timeline);
    app.component('PrimeProgressBar', ProgressBar);
  },
};
