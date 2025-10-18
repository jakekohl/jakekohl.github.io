<script setup>
import { ref, computed } from 'vue';

import { onMounted } from 'vue';

const projects = ref([]);

const fetchProjects = async () => {
  try {
    const response = await fetch('https://portfolio.jakekohl.dev/projects');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    projects.value = data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    projects.value = [];
  }
};

onMounted(() => {
  fetchProjects();
});

const ongoingProjects = computed(() => projects.value.filter(project => project.status === 'In Development') || []);
const completedProjects = computed(() => projects.value.filter(project => project.status === 'Completed') || []);

const hasOngoingProjects = computed(() => ongoingProjects.value.length > 0);
const hasCompletedProjects = computed(() => completedProjects.value.length > 0);

// Methods for handling external navigation
const openExternalLink = (url) => {
  if (url) {
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open external link:', error);
      // Fallback: try to navigate in the same window
      window.location.href = url;
    }
  }
};

const openGithubRepo = (githubUrl) => {
  openExternalLink(githubUrl);
};

const openLiveDemo = (demoUrl) => {
  openExternalLink(demoUrl);
};
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

      <!-- Ongoing Projects Section -->
      <div v-if="hasOngoingProjects" class="projects-section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="pi pi-clock mr-2"></i>
            Ongoing Projects
          </h2>
          <p class="section-subtitle">Projects currently in development</p>
        </div>

        <div class="projects-grid" data-test="ongoing-projects">
          <PrimeCard
            v-for="project in ongoingProjects"
            :key="project.title"
            class="project-card"
            :data-test="project.dataTest"
          >
            <template #header>
              <div class="project-header">
                <h3 class="project-title" data-test="project-title">{{ project.title }}</h3>
                <PrimeTag
                  :value="project.status"
                  :severity="project.status === 'In Development' ? 'info' : 'warning'"
                  class="project-status"
                  data-test="project-status"
                />
              </div>
            </template>
            <template #content>
              <p class="project-description" data-test="project-description">{{ project.description }}</p>

              <!-- Project Images -->
              <div v-if="project.images && project.images.length > 0" class="project-images" data-test="project-images">
                <h4>Project Screenshots:</h4>
                <div class="images-grid">
                  <div
                    v-for="(image, index) in project.images"
                    :key="index"
                    class="image-container"
                  >
                    <img
                      :src="image.src"
                      :alt="image.alt"
                      class="project-image"
                      @error="$event.target.style.display='none'"
                    />
                    <p v-if="image.caption" class="image-caption">{{ image.caption }}</p>
                  </div>
                </div>
              </div>

              <div class="project-technologies" data-test="project-technologies">
                <h4>Technologies Used:</h4>
                <div class="tech-chips">
                  <PrimeChip
                    v-for="tech in project.technologies"
                    :key="tech"
                    :label="tech"
                    class="tech-chip"
                  />
                </div>
              </div>

              <div v-if="project.skillsLeveraged" class="project-skills" data-test="project-skills">
                <h4>Skills Leveraged:</h4>
                <div class="skills-chips">
                  <PrimeChip
                    v-for="skill in project.skillsLeveraged"
                    :key="skill"
                    :label="skill"
                    class="skill-chip"
                  />
                </div>
              </div>

              <div v-if="project.features" class="project-features" data-test="project-features">
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
                  data-test="project-code-button"
                  @click="openGithubRepo(project.github)"
                />
                <PrimeButton
                  v-if="project.demo"
                  label="Live Demo"
                  icon="pi pi-external-link"
                  data-test="project-demo-button"
                  @click="openLiveDemo(project.demo)"
                />
              </div>
            </template>
          </PrimeCard>
        </div>
      </div>

      <!-- Completed Projects Section -->
      <div v-if="hasCompletedProjects" class="projects-section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="pi pi-check-circle mr-2"></i>
            Completed Projects
          </h2>
          <p class="section-subtitle">Finished projects and accomplishments</p>
        </div>

        <div class="projects-grid">
          <PrimeCard
            v-for="project in completedProjects"
            :key="project.title"
            class="project-card completed-project"
            :data-test="project.dataTest"
          >
            <template #header>
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <PrimeTag
                  value="Completed"
                  severity="success"
                  class="project-status"
                  data-test="project-status"
                />
              </div>
            </template>
            <template #content>
              <p class="project-description">{{ project.description }}</p>

              <!-- Project Images -->
              <div v-if="project.images && project.images.length > 0" class="project-images">
                <h4>Project Screenshots:</h4>
                <div class="images-grid">
                  <div
                    v-for="(image, index) in project.images"
                    :key="index"
                    class="image-container"
                  >
                    <img
                      :src="image.src"
                      :alt="image.alt"
                      class="project-image"
                      @error="$event.target.style.display='none'"
                    />
                    <p v-if="image.caption" class="image-caption">{{ image.caption }}</p>
                  </div>
                </div>
              </div>

              <div class="project-technologies">
                <h4>Technologies Used:</h4>
                <div class="tech-chips">
                  <PrimeChip
                    v-for="tech in project.technologies"
                    :key="tech"
                    :label="tech"
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
                  @click="openGithubRepo(project.github)"
                />
                <PrimeButton
                  v-if="project.demo"
                  label="Live Demo"
                  icon="pi pi-external-link"
                  @click="openLiveDemo(project.demo)"
                />
              </div>
            </template>
          </PrimeCard>
        </div>
      </div>

      <!-- Coming Soon Section -->
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

.projects-section {
  margin-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
  color: white;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.section-subtitle {
  font-size: 1rem;
  opacity: 0.8;
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
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.15);
}

.completed-project {
  border-left: 4px solid #10b981;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem 1.5rem 0 1.5rem;
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
  color: #1f2937;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
  padding: 0 1.5rem;
}

.project-images {
  margin-bottom: 2rem;
  padding: 0 1.5rem;
}

.project-images h4 {
  color: #1f2937;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.image-container {
  text-align: center;
}

.project-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-image:hover {
  transform: scale(1.05);
}

.image-caption {
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 0.5rem;
  font-style: italic;
  font-weight: 500;
}

.project-technologies h4,
.project-skills h4,
.project-features h4 {
  color: #1f2937;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
}

.project-technologies,
.project-skills,
.project-features {
  padding: 0 1.5rem;
}

.tech-chips,
.skills-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-chip {
  background: #dbeafe;
  color: #1e40af;
  border: 2px solid #3b82f6;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
}

.tech-chip:hover {
  background: #bfdbfe;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
}

.skill-chip {
  background: #dcfce7;
  color: #166534;
  border: 2px solid #22c55e;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(34, 197, 94, 0.2);
}

.skill-chip:hover {
  background: #bbf7d0;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(34, 197, 94, 0.3);
}

.project-features ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.project-features li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #4b5563;
  font-weight: 500;
}

.project-features i {
  color: #10b981;
}

.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.coming-soon {
  text-align: center;
}

.coming-soon-card {
  max-width: 500px;
  margin: 0 auto;
  border: none;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
}

.text-primary {
  color: #6366f1 !important;
}

@media (max-width: 768px) {
  .projects-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .images-grid {
    grid-template-columns: 1fr;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.5rem;
  }

  .project-status {
    margin-left: 0;
    margin-top: 0.5rem;
  }

  .project-actions {
    flex-direction: column;
    padding: 0 1.5rem;
  }

  .project-description,
  .project-images,
  .project-technologies,
  .project-skills,
  .project-features {
    padding: 0 1.5rem;
  }
}
</style>
