<script setup>
import { ref } from 'vue';

const experience = ref([
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Lead frontend development for enterprise applications using Vue.js and React. Implemented comprehensive testing strategies with Cypress and Jest.',
    achievements: [
      'Improved application performance by 40% through code optimization',
      'Led migration from legacy systems to modern Vue.js architecture',
      'Established automated testing protocols reducing bugs by 60%'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2019 - 2021',
    description: 'Built scalable web applications from ground up using Node.js, Vue.js, and Python. Collaborated with cross-functional teams to deliver high-quality products.',
    achievements: [
      'Developed 5+ production applications serving 10,000+ users',
      'Implemented CI/CD pipelines reducing deployment time by 70%',
      'Mentored junior developers and established best practices'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Digital Agency',
    period: '2017 - 2019',
    description: 'Created custom web solutions for clients across various industries. Focused on responsive design and user experience optimization.',
    achievements: [
      'Delivered 20+ client projects with 98% satisfaction rate',
      'Introduced automated testing increasing project reliability',
      'Optimized website performance achieving 95+ Lighthouse scores'
    ]
  }
]);

const education = ref([
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    year: '2017',
    highlights: [
      'Graduated Magna Cum Laude (3.8 GPA)',
      'President of Programming Club',
      'Capstone project: AI-powered web application'
    ]
  }
]);

const skills = ref({
  technical: [
    { name: 'Vue.js / Nuxt.js', level: 95 },
    { name: 'React / Next.js', level: 90 },
    { name: 'JavaScript / TypeScript', level: 95 },
    { name: 'Node.js / Express', level: 85 },
    { name: 'Python / Django', level: 80 },
    { name: 'HTML5 / CSS3 / SCSS', level: 95 },
    { name: 'Git / GitHub', level: 90 },
    { name: 'Docker / CI/CD', level: 75 }
  ],
  testing: [
    { name: 'Cypress', level: 90 },
    { name: 'Playwright', level: 85 },
    { name: 'Jest / Vitest', level: 85 },
    { name: 'Testing Library', level: 90 },
    { name: 'Selenium', level: 80 }
  ],
  tools: [
    { name: 'VS Code', level: 95 },
    { name: 'Figma', level: 80 },
    { name: 'AWS / Vercel', level: 75 },
    { name: 'Postman', level: 85 },
    { name: 'Jira / Trello', level: 85 }
  ]
});

const certifications = ref([
  {
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    year: '2022'
  },
  {
    name: 'Cypress Certified Professional',
    issuer: 'Cypress.io',
    year: '2023'
  }
]);

const interests = ref([
  'Open Source Contributions',
  'Tech Mentoring',
  'UI/UX Design',
  'Automation & DevOps',
  'Machine Learning',
  'Photography'
]);
</script>

<template>
  <div class="about-container" data-testid="about-page">
    <div class="content-wrapper">
      <!-- Header Section -->
      <section class="about-header" data-testid="about-header">
        <div class="header-content">
          <PrimeAvatar 
            icon="pi pi-user" 
            size="xlarge"
            class="profile-avatar"
            data-testid="about-profile-avatar"
          />
          <div class="header-text">
            <h1 class="page-title" data-testid="about-title">About Jake Kohl</h1>
            <p class="page-subtitle" data-testid="about-subtitle">
              Full-Stack Developer & Test Automation Specialist
            </p>
            <p class="about-description" data-testid="about-description">
              With over 5 years of experience in modern web development, I'm passionate about creating 
              robust, scalable applications and implementing comprehensive testing strategies. I believe 
              in writing clean, maintainable code and delivering exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      <PrimeDivider />

      <!-- Experience Section -->
      <section class="experience-section" data-testid="experience-section">
        <h2 class="section-title">Professional Experience</h2>
        <PrimeTimeline :value="experience" class="custom-timeline">
          <template #content="slotProps">
            <PrimeCard class="experience-card" :data-testid="`experience-${slotProps.index}`">
              <template #content>
                <div class="experience-header">
                  <h3 class="job-title">{{ slotProps.item.title }}</h3>
                  <PrimeTag :value="slotProps.item.period" severity="info" />
                </div>
                <h4 class="company-name">{{ slotProps.item.company }}</h4>
                <p class="job-description">{{ slotProps.item.description }}</p>
                <div class="achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    <li v-for="achievement in slotProps.item.achievements" :key="achievement">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </template>
            </PrimeCard>
          </template>
        </PrimeTimeline>
      </section>

      <PrimeDivider />

      <!-- Skills Section -->
      <section class="skills-section" data-testid="skills-section">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-categories">
          <!-- Technical Skills -->
          <PrimePanel header="Development & Programming" class="skills-panel" data-testid="technical-skills">
            <div class="skills-grid">
              <div 
                v-for="skill in skills.technical" 
                :key="skill.name" 
                class="skill-item"
                :data-testid="`technical-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <PrimeProgressBar :value="skill.level" class="skill-progress" />
              </div>
            </div>
          </PrimePanel>

          <!-- Testing Skills -->
          <PrimePanel header="Testing & QA" class="skills-panel" data-testid="testing-skills">
            <div class="skills-grid">
              <div 
                v-for="skill in skills.testing" 
                :key="skill.name" 
                class="skill-item"
                :data-testid="`testing-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <PrimeProgressBar :value="skill.level" class="skill-progress" />
              </div>
            </div>
          </PrimePanel>

          <!-- Tools & Platforms -->
          <PrimePanel header="Tools & Platforms" class="skills-panel" data-testid="tools-skills">
            <div class="skills-grid">
              <div 
                v-for="skill in skills.tools" 
                :key="skill.name" 
                class="skill-item"
                :data-testid="`tools-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <PrimeProgressBar :value="skill.level" class="skill-progress" />
              </div>
            </div>
          </PrimePanel>
        </div>
      </section>

      <PrimeDivider />

      <!-- Education & Certifications -->
      <section class="education-section" data-testid="education-section">
        <div class="education-grid">
          <!-- Education -->
          <div class="education-block">
            <h2 class="section-title">Education</h2>
            <PrimeCard 
              v-for="edu in education" 
              :key="edu.degree" 
              class="education-card"
              data-testid="education-card"
            >
              <template #content>
                <h3 class="degree-title">{{ edu.degree }}</h3>
                <h4 class="school-name">{{ edu.school }}</h4>
                <PrimeTag :value="edu.year" severity="success" class="year-tag" />
                <ul class="highlights">
                  <li v-for="highlight in edu.highlights" :key="highlight">
                    <i class="pi pi-star mr-2 text-yellow-500"></i>
                    {{ highlight }}
                  </li>
                </ul>
              </template>
            </PrimeCard>
          </div>

          <!-- Certifications -->
          <div class="certifications-block">
            <h2 class="section-title">Certifications</h2>
            <PrimeCard 
              v-for="cert in certifications" 
              :key="cert.name" 
              class="certification-card"
              :data-testid="`certification-${cert.name.toLowerCase().replace(/\s+/g, '-')}`"
            >
              <template #content>
                <div class="cert-header">
                  <i class="pi pi-certificate text-primary text-2xl mr-3"></i>
                  <div>
                    <h3 class="cert-name">{{ cert.name }}</h3>
                    <p class="cert-issuer">{{ cert.issuer }}</p>
                    <PrimeTag :value="cert.year" severity="info" />
                  </div>
                </div>
              </template>
            </PrimeCard>
          </div>
        </div>
      </section>

      <PrimeDivider />

      <!-- Personal Interests -->
      <section class="interests-section" data-testid="interests-section">
        <h2 class="section-title">Personal Interests</h2>
        <div class="interests-grid">
          <PrimeChip 
            v-for="interest in interests" 
            :key="interest" 
            :label="interest" 
            icon="pi pi-heart"
            class="interest-chip"
            :data-testid="`interest-${interest.toLowerCase().replace(/\s+/g, '-')}`"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header Section */
.about-header {
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  backdrop-filter: blur(10px);
}

.header-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
}

.profile-avatar {
  width: 150px !important;
  height: 150px !important;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important;
  color: white !important;
  font-size: 4rem !important;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.5rem;
  color: #6366f1;
  font-weight: 600;
  margin-bottom: 1rem;
}

.about-description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #64748b;
}

/* Section Titles */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Experience Section */
.experience-section {
  margin-bottom: 3rem;
}

.custom-timeline {
  color: white;
}

.experience-card {
  margin: 1rem 0;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.job-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.company-name {
  font-size: 1.25rem;
  color: #6366f1;
  font-weight: 600;
  margin-bottom: 1rem;
}

.job-description {
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.achievements h5 {
  color: #374151;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.achievements ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievements li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  color: #64748b;
  line-height: 1.5;
}

/* Skills Section */
.skills-section {
  margin-bottom: 3rem;
}

.skills-categories {
  display: grid;
  gap: 2rem;
}

.skills-panel {
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  margin-bottom: 1rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
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

/* Education Section */
.education-section {
  margin-bottom: 3rem;
}

.education-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.education-card,
.certification-card {
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.education-card:hover,
.certification-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.degree-title,
.cert-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.school-name,
.cert-issuer {
  color: #6366f1;
  font-weight: 600;
  margin-bottom: 1rem;
}

.year-tag {
  margin-bottom: 1rem;
}

.highlights {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlights li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #64748b;
}

.cert-header {
  display: flex;
  align-items: flex-start;
}

.text-primary {
  color: #6366f1 !important;
}

/* Interests Section */
.interests-section {
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.interests-section .section-title {
  color: #1e293b;
  text-shadow: none;
}

.interests-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.interest-chip {
  background: #e0e7ff !important;
  color: #3730a3 !important;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .education-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>