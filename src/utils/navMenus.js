export const topNavMenu = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/');
    }
  },
  {
    label: 'Background',
    icon: 'pi pi-star',
    items: [
      {
        label: 'Me',
        icon: 'pi pi-file',
        command: () => {
          router.push('/about');
        }
      },
      {
        label: 'Professional',
        icon: 'pi pi-briefcase',
        command: () => {
          router.push('/professional');
        }
      },
      {
        label: 'Education',
        icon: 'pi pi-graduation-cap',
        command: () => {
          router.push('/education');
        }
      },
      {
        label: 'Running',
        icon: 'pi pi-play',
        command: () => {
          router.push('/running');
        }
      }
    ]
  },
  {
    label: 'Projects',
    icon: 'pi pi-code',
    command: () => {
      router.push('/projects');
    }
  },
  {
    label: 'Online',
    icon: 'pi pi-at',
    command: () => {
      router.push('/online');
    }
  },
];

export const leftNavMenu = [];