<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive Vue.js portfolio built with PrimeVue components, featuring automated testing with Cypress and Playwright.',
    technologies: ['Vue.js', 'PrimeVue', 'Vite', 'Cypress', 'Playwright'],
    skillsLeveraged: [
      'Frontend Development',
      'Component Architecture', 
      'Automated Testing',
      'Responsive Design',
      'Git Version Control',
      'CI/CD Pipeline',
      'AI Agentic Development'
    ],
    status: 'In Development',
    github: 'https://github.com/jakekohl/jakekohl.github.io',
    demo: 'https://jakekohl.github.io',
    features: [
      'Responsive design with professional styling',
      'Component-based architecture',
      'Automated testing setup',
      'GitHub Pages deployment',
    ],
    dataTest: 'project-portfolio'
  }
]);
</script>

<template>
  <div class="projects-container">
    <div class="content-wrapper">
      <div class="projects-header">
        <h1 class="projects-title">
          <i class="pi pi-briefcase mr-3"></i>
          My Projects
        </h1>
        <p class="projects-subtitle">
          A showcase of my development work and technical expertise
        </p>
      </div>

      <div class="projects-grid">
        <PrimeCard 
          v-for="project in projects" 
          :key="project.title" 
          class="project-card"
          :data-test="project.dataTest"
        >
          <template #header>
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <PrimeTag 
                :value="project.status" 
                :severity="project.status === 'In Development' ? 'info' : 'success'"
                class="project-status"
                data-test="project-status"
              />
            </div>
          </template>
          <template #content>
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-technologies">
              <h4>Technologies Used:</h4>
              <div class="tech-chips">
                <PrimeChip 
                  v-for="tech in project.technologies" 
                  :key="tech" 
                  :label="tech" 
                  icon="pi pi-code"
                  class="tech-chip"
                />
              </div>
            </div>

            <div v-if="project.skillsLeveraged" class="project-skills">
              <h4>Skills Leveraged:</h4>
              <div class="skills-chips">
                <PrimeChip 
                  v-for="skill in project.skillsLeveraged" 
                  :key="skill" 
                  :label="skill" 
                  icon="pi pi-star"
                  class="skill-chip"
                />
              </div>
            </div>

            <div v-if="project.features" class="project-features">
              <h4>Key Features:</h4>
              <ul>
                <li v-for="feature in project.features" :key="feature">
                  <i class="pi pi-check mr-2"></i>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </template>
          <template #footer>
            <div class="project-actions">
              <PrimeButton 
                v-if="project.github"
                label="View Code" 
                icon="pi pi-github" 
                outlined 
                @click="window.open(project.github, '_blank')"
              />
              <PrimeButton 
                v-if="project.demo"
                label="Live Demo" 
                icon="pi pi-external-link" 
                @click="window.open(project.demo, '_blank')"
              />
            </div>
          </template>
        </PrimeCard>
      </div>

      <div class="coming-soon">
        <PrimeCard class="coming-soon-card">
          <template #content>
            <div class="text-center">
              <i class="pi pi-clock text-6xl text-primary mb-4"></i>
              <h3>More Projects Coming Soon!</h3>
              <p>I'm constantly working on new projects and will update this portfolio regularly.</p>
            </div>
          </template>
        </PrimeCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.projects-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.projects-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.projects-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  height: fit-content;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  margin: 0;
  color: #1e293b;
  font-size: 1.5rem;
  font-weight: 600;
}

.project-status {
  margin-left: 1rem;
}

.project-description {
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-technologies h4,
.project-skills h4,
.project-features h4 {
  color: #374151;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
}

.tech-chips,
.skills-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-chip {
  background: #e0e7ff;
  color: #3730a3;
}

.skill-chip {
  background: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.project-features ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.project-features li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #64748b;
}

.project-features i {
  color: #10b981;
}

.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.coming-soon {
  text-align: center;
}

.coming-soon-card {
  max-width: 500px;
  margin: 0 auto;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.text-primary {
  color: #6366f1 !important;
}

@media (max-width: 768px) {
  .projects-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .project-status {
    margin-left: 0;
    margin-top: 0.5rem;
  }
  
  .project-actions {
    flex-direction: column;
  }
}
</style>