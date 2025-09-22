<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();

const skills = ref([
  { name: 'Vue.js', level: 90 },
  { name: 'JavaScript/TypeScript', level: 95 },
  { name: 'Test Automation', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 }
]);

const stats = ref([
  { label: 'Years Experience', value: '5+', icon: 'pi pi-calendar' },
  { label: 'Projects Completed', value: '25+', icon: 'pi pi-briefcase' },
  { label: 'Technologies Mastered', value: '15+', icon: 'pi pi-cog' },
  { label: 'Happy Clients', value: '20+', icon: 'pi pi-heart' }
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
  <div class="home-container" data-testid="home-page">
    <!-- Hero Section -->
    <section class="hero-section" data-testid="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title" data-testid="hero-title">
            Hi, I'm 
            <span class="name-highlight">Jake Kohl</span>
          </h1>
          <h2 class="hero-subtitle" data-testid="hero-subtitle">
            Full-Stack Developer & Test Automation Specialist
          </h2>
          <p class="hero-description" data-testid="hero-description">
            Passionate about creating robust, scalable applications and comprehensive testing solutions. 
            I specialize in modern web technologies and automated testing frameworks to deliver high-quality software.
          </p>
          <div class="hero-actions">
            <PrimeButton 
              label="View My Work" 
              icon="pi pi-briefcase" 
              size="large"
              @click="navigateToSection('/projects')"
              data-testid="hero-projects-button"
            />
            <PrimeButton 
              label="Download Resume" 
              icon="pi pi-download" 
              severity="secondary"
              size="large"
              outlined
              @click="downloadResume"
              data-testid="hero-resume-button"
            />
          </div>
        </div>
        <div class="hero-image">
          <PrimeAvatar 
            icon="pi pi-user" 
            size="xlarge"
            class="profile-avatar"
            data-testid="profile-avatar"
          />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section" data-testid="stats-section">
      <div class="content-wrapper">
        <div class="stats-grid">
          <div 
            v-for="stat in stats" 
            :key="stat.label" 
            class="stat-card"
            :data-testid="`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`"
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
    <section class="skills-preview-section" data-testid="skills-preview-section">
      <div class="content-wrapper">
        <h3 class="section-title">Technical Expertise</h3>
        <div class="skills-grid">
          <div 
            v-for="skill in skills" 
            :key="skill.name" 
            class="skill-item"
            :data-testid="`skill-${skill.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`"
          >
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percentage">{{ skill.level }}%</span>
            </div>
            <PrimeProgressBar 
              :value="skill.level" 
              class="skill-progress"
            />
          </div>
        </div>
        <div class="skills-cta">
          <PrimeButton 
            label="Learn More About Me" 
            icon="pi pi-arrow-right" 
            severity="secondary"
            @click="navigateToSection('/about')"
            data-testid="about-cta-button"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" data-testid="cta-section">
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
                @click="navigateToSection('/contact')"
                data-testid="contact-cta-button"
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
}
</style>