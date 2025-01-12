import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import GitGraph from '../views/GitGraph.vue'
import Education from '../views/Education.vue'
import Professional from '../views/Professional.vue'
import Running from '../views/Running.vue'
import Online from '../views/Online.vue'
import Projects from '../views/Projects.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/gitgraph', component: GitGraph },
  { path: '/education', component: Education },
  { path: '/professional', component: Professional },
  { path: '/running', component: Running },
  { path: '/online', component: Online },
  { path: '/projects', component: Projects },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;