<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const testSkills = ref([
  { name: 'API'},
  { name: 'End-to-End'},
  { name: 'Integration'},
  { name: 'Performance'},
  { name: 'Cypress'},
  { name: 'Playwright'},
]);

const supportSkills = ref([
  { name: 'Technical Support'},
  { name: 'Troubleshooting'},
  { name: 'Log Analysis'},
  { name: 'Infrastructure Management'},
  { name: 'Database Management'},
  { name: 'Technical Documentation'},
  { name: 'Incident Management'},
  { name: 'Escalation Management'},
]);

const devSkills = ref([
  { name: 'Backend Development'},
  { name: 'Debugging'},
  { name: 'Requirements Review'},
  { name: 'CI/CD'},
  { name: 'Code Review'},
  { name: 'ETL'},
  { name: 'Vue.js'},
  { name: 'Express.js'},
  { name: 'JavaScript'},
  { name: 'TypeScript'},
  { name: 'Java'},
  { name: 'Python'},
  { name: 'Git'},
  { name: 'GitHub'},
]);

const infrastructureSkills = ref([
  { name: 'AWS'},
  { name: 'ECS'},
  { name: 'EC2'},
  { name: 'Lambda'},
  { name: 'S3'},
  { name: 'RDS'},
  { name: 'Cloudwatch'},
  { name: 'Wildfly/Jboss'},
  { name: 'RabbitMQ'},
  { name: 'SQL Server'},
  { name: 'MongoDB'},
  { name: 'PostgreSQL'},
  { name: 'SSAS'},
  { name: 'SSRS'},
  { name: 'Windows Server'}
]);

const softSkills = ref([
  { name: 'Communication'},
  { name: 'Collaboration'},
  { name: 'Problem Solving'},
  { name: 'Time Management'},
  { name: 'Adaptability'},
  { name: 'Leadership'},
  { name: 'Training'},
  { name: 'Project Management'},
  { name: 'Training'},
  { name: 'Team Management'},
]);

const stats = ref([
  { label: 'Quality Assurance', value: '5', icon: 'pi pi-hammer' },
  { label: 'Technical Support', value: '8', icon: 'pi pi-search' },
  { label: 'Technical Leadership', value: '4', icon: 'pi pi-arrow-up-right' },
  { label: 'Management', value: '1', icon: 'pi pi-users' }
]);

const navigateToSection = (route) => {
  router.push(route);
};
const downloadResume = () => {
  // Placeholder for resume download functionality
  alert('Resume download would be implemented here');
};
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Hi, I'm 
            <span class="name-highlight">Jake Kohl</span>
          </h1>
          <h2 class="hero-subtitle">
            Quality Assurance Engineer | Test Automation Enthusiast
          </h2>
          <p class="hero-description">
            Passionate about creating comprehensive testing solutions within <b>Cypress</b> and <b>Playwright</b>.
            With an automation first approach to testing and significant experience in <b>technical support</b>, I strive to create scalable testing strategies that does not compromise on speed or quality.
          </p>
          <div class="hero-actions">
            <PrimeButton 
              label="View My Work" 
              icon="pi pi-briefcase" 
              size="large"
              data-test="hero-projects-button"
              @click="navigateToSection('/projects')"
            />
            <PrimeButton 
              label="Download Resume" 
              icon="pi pi-download" 
              severity="secondary"
              size="large"
              outlined
              data-test="hero-resume-button"
              @click="downloadResume"
            />
          </div>
        </div>
        <div class="hero-image">
          <PrimeAvatar 
            image="https://avatars.githubusercontent.com/u/9215669?v=4"
            size="xlarge"
            shape="circle"
            class="profile-avatar"
            data-test="profile-avatar"
          />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <h1 class="section-title">Professional Experience (Years)</h1>
      <div class="content-wrapper">
        <div class="stats-grid">
          <div 
            v-for="stat in stats" 
            :key="stat.label" 
            class="stat-card"
            :data-test="`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`"
          >
            <PrimeCard class="stat-card-inner">
              <template #content>
                <div class="stat-content">
                  <i :class="stat.icon" class="stat-icon"></i>
                  <div class="stat-value">{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              </template>
            </PrimeCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Preview Section -->
    <section class="skills-preview-section" data-test="skills-preview-section">
      <div class="content-wrapper">
        <h3 class="section-title">Technical Expertise</h3>
        <h4 class="skill-category">Development</h4>
        <div class="skills-grid">
          <div 
            v-for="skill in devSkills" 
            :key="skill.name" 
            class="skill-item"
            :data-test="`dev-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`"
          >
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
        <h4 class="skill-category">Testing</h4>
        <div class="skills-grid">
          <div 
            v-for="skill in testSkills" 
            :key="skill.name" 
            class="skill-item"
            :data-test="`test-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`"
          >
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
        <h4 class="skill-category">Infrastructure</h4>
        <div class="skills-grid">
          <div 
            v-for="skill in infrastructureSkills" 
            :key="skill.name" 
            class="skill-item"
            :data-test="`infrastructure-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`"
          >
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
        <h4 class="skill-category">Support</h4>
        <div class="skills-grid">
          <div 
            v-for="skill in supportSkills" 
            :key="skill.name" 
            class="skill-item"
            :data-test="`support-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`"
          >
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
        <h4 class="skill-category">Soft Skills</h4>
        <div class="skills-grid">
          <div 
            v-for="skill in softSkills" 
            :key="skill.name" 
            class="skill-item"
            :data-test="`soft-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`"
          >
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" data-test="cta-section">
      <div class="content-wrapper">
        <PrimeCard class="cta-card">
          <template #content>
            <div class="cta-content">
              <h3>Ready to Work Together?</h3>
              <p>I'm always interested in new opportunities and exciting projects. Let's connect!</p>
              <PrimeButton 
                label="Get in Touch" 
                icon="pi pi-envelope" 
                size="large"
                data-test="contact-cta-button"
                @click="navigateToSection('/contact')"
              />
            </div>
          </template>
        </PrimeCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  color: white;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.name-highlight {
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-avatar {
  width: 250px !important;
  height: 250px !important;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important;
  color: white !important;
  font-size: 6rem !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Stats Section */
.stats-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 4rem 0;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card-inner {
  background: rgba(255, 255, 255, 0.95);
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.stat-card-inner:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.stat-content {
  text-align: center;
  padding: 1rem;
}

.stat-icon {
  font-size: 2.5rem;
  color: #6366f1;
  margin-bottom: 1rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
}

/* Skills Preview Section */
.skills-preview-section {
  background: white;
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1e293b;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.skill-item {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.skill-name {
  font-weight: 600;
  color: #374151;
}

.skill-percentage {
  font-weight: 600;
  color: #6366f1;
}

.skill-progress {
  height: 0.5rem;
}

.skills-cta {
  text-align: center;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  padding: 4rem 0;
}

.cta-card {
  max-width: 600px;
  margin: 0 auto;
  border: none;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.cta-content {
  text-align: center;
  padding: 2rem;
}

.cta-content h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1e293b;
}

.cta-content p {
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-actions {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  
  .profile-avatar {
    width: 180px !important;
    height: 180px !important;
    font-size: 4rem !important;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>