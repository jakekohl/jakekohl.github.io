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
      items: [
          {
              label: 'Personal Site',
              icon: 'pi pi-link',
              url: 'https://github.com/jakekohl/jakekohl.github.io'
          },
          {
              label: 'Just-Run (WIP)',
              icon: 'pi pi-play',
              url: 'https://github.com/jakekohl/just-run'
          },
          {
              label: 'GitHub Activity Tracker',
              icon: 'pi pi-github',
              url: 'https://github.com/jakekohl/github-activity-tracker'
          },
          {
              label: 'Quick One-Off Tools',
              icon: 'pi pi-wrench',
              url: 'https://github.com/jakekohl/quick-tools'
          }
      ]
  },
  {
      label: 'Online',
      icon: 'pi pi-at',
      items: [
          {
              label: 'Email',
              icon: 'pi pi-envelope',
              url: `mailto:jacob.jp.kohl@gmail.com`
          },
          {
              label: 'LinkedIn',
              icon: 'pi pi-linkedin',
              url: `https://www.linkedin.com/in/jacob-jp-kohl/`
          },
          {
              label: 'GitHub',
              icon: 'pi pi-github',
              url: 'https://github.com/jakekohl'
          },
          {
              label: 'Strava',
              icon: 'fa-brands fa-strava',
              url: 'https://www.strava.com/athletes/5883542'
          },
          {
              label: 'X (Formerly Known as Twitter)',
              icon: 'fa-brands fa-x-twitter',
              url: 'https://twitter.com/jacobofwonder'
          },
          {
              label: 'Threads',
              icon: 'fa-brands fa-threads',
              url: 'https://www.threads.net/jacobofwonder/'
          },
          {
              label: 'BlueSky',
              icon: 'fa-brands fa-bluesky',
              url: 'https://bsky.app/profile/jacobofwonder.bsky.social'
          },
          {
              label: 'Mastodon',
              icon: 'fa-brands fa-mastodon',
              url: 'https://mastodon.social/@jacobofwonder'
          },
          {
              label: 'Twitch',
              icon: 'pi pi-twitch',
              url: 'https://www.twitch.tv/hawkeye_ow'
          }, 
      ]
  }
];

export const leftNavMenu = [];