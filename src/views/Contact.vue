<script setup>
import { ref } from 'vue';

const contactInfo = ref([
  {
    type: 'Email',
    value: 'jake.kohl@example.com',
    icon: 'pi pi-envelope',
    link: 'mailto:jake.kohl@example.com',
    description: 'Best way to reach me for professional inquiries'
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/jakekohl',
    icon: 'pi pi-linkedin',
    link: 'https://linkedin.com/in/jakekohl',
    description: 'Connect with me professionally'
  },
  {
    type: 'GitHub',
    value: 'github.com/jakekohl',
    icon: 'pi pi-github',
    link: 'https://github.com/jakekohl',
    description: 'Check out my code and projects'
  },
  {
    type: 'Location',
    value: 'Remote / Available Worldwide',
    icon: 'pi pi-map-marker',
    link: null,
    description: 'Open to remote work opportunities'
  }
]);

const workingHours = ref([
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
  { day: 'Response Time', hours: 'Usually within 24 hours' },
  { day: 'Time Zone', hours: 'Eastern Standard Time (EST)' }
]);

const specialties = ref([
  {
    title: 'Frontend Development',
    description: 'Vue.js, React, TypeScript, and modern frontend frameworks',
    icon: 'pi pi-desktop'
  },
  {
    title: 'Test Automation',
    description: 'Cypress, Playwright, Jest, and comprehensive testing strategies',
    icon: 'pi pi-cog'
  },
  {
    title: 'Full-Stack Solutions',
    description: 'End-to-end application development and architecture',
    icon: 'pi pi-server'
  },
  {
    title: 'Consulting & Mentoring',
    description: 'Technical guidance, code reviews, and team mentoring',
    icon: 'pi pi-users'
  }
]);

const currentStatus = ref({
  availability: 'Available for new projects',
  status: 'open',
  nextAvailable: 'Immediate start possible',
  workType: 'Contract, Consulting, or Full-time'
});

const openExternalLink = (url) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    // In a real app, you'd show a toast notification here
    alert(`Copied ${text} to clipboard!`);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};
</script>

<template>
  <div class="contact-container" data-testid="contact-page">
    <div class="content-wrapper">
      <!-- Header Section -->
      <section class="contact-header" data-testid="contact-header">
        <div class="header-content">
          <h1 class="page-title" data-testid="contact-title">
            <i class="pi pi-envelope mr-3"></i>
            Get in Touch
          </h1>
          <p class="page-subtitle" data-testid="contact-subtitle">
            Ready to collaborate? Let's discuss your next project!
          </p>
          <p class="contact-description" data-testid="contact-description">
            I'm always excited to work on new projects and help bring your ideas to life. 
            Whether you need a full-stack developer, testing specialist, or technical consultant, 
            I'm here to help.
          </p>
        </div>
      </section>

      <div class="contact-content">
        <!-- Current Status -->
        <section class="status-section" data-testid="status-section">
          <PrimeCard class="status-card">
            <template #header>
              <div class="status-header">
                <i class="pi pi-circle-fill status-indicator" :class="currentStatus.status === 'open' ? 'text-green-500' : 'text-orange-500'"></i>
                <h2>Current Availability</h2>
              </div>
            </template>
            <template #content>
              <div class="status-grid">
                <div class="status-item">
                  <strong>Status:</strong>
                  <PrimeTag 
                    :value="currentStatus.availability" 
                    :severity="currentStatus.status === 'open' ? 'success' : 'warning'"
                    data-testid="availability-status"
                  />
                </div>
                <div class="status-item">
                  <strong>Start Date:</strong>
                  <span>{{ currentStatus.nextAvailable }}</span>
                </div>
                <div class="status-item">
                  <strong>Work Type:</strong>
                  <span>{{ currentStatus.workType }}</span>
                </div>
              </div>
            </template>
          </PrimeCard>
        </section>

        <!-- Contact Methods -->
        <section class="contact-methods" data-testid="contact-methods">
          <h2 class="section-title">Contact Information</h2>
          <div class="contact-grid">
            <PrimeCard 
              v-for="contact in contactInfo" 
              :key="contact.type" 
              class="contact-card"
              :data-testid="`contact-${contact.type.toLowerCase()}`"
            >
              <template #content>
                <div class="contact-card-content">
                  <div class="contact-icon">
                    <i :class="contact.icon" class="text-primary"></i>
                  </div>
                  <div class="contact-details">
                    <h3 class="contact-type">{{ contact.type }}</h3>
                    <p class="contact-value">{{ contact.value }}</p>
                    <p class="contact-description">{{ contact.description }}</p>
                    <div class="contact-actions">
                      <PrimeButton 
                        v-if="contact.link"
                        label="Open" 
                        icon="pi pi-external-link" 
                        size="small"
                        outlined
                        @click="openExternalLink(contact.link)"
                        :data-testid="`${contact.type.toLowerCase()}-link`"
                      />
                      <PrimeButton 
                        label="Copy" 
                        icon="pi pi-copy" 
                        size="small"
                        severity="secondary"
                        outlined
                        @click="copyToClipboard(contact.value)"
                        :data-testid="`${contact.type.toLowerCase()}-copy`"
                      />
                    </div>
                  </div>
                </div>
              </template>
            </PrimeCard>
          </div>
        </section>

        <!-- Working Hours -->
        <section class="hours-section" data-testid="hours-section">
          <h2 class="section-title">Working Hours & Response Time</h2>
          <PrimeCard class="hours-card">
            <template #content>
              <div class="hours-grid">
                <div 
                  v-for="hour in workingHours" 
                  :key="hour.day" 
                  class="hours-item"
                  :data-testid="`hours-${hour.day.toLowerCase().replace(/\s+/g, '-')}`"
                >
                  <div class="hours-label">{{ hour.day }}</div>
                  <div class="hours-value">{{ hour.hours }}</div>
                </div>
              </div>
            </template>
          </PrimeCard>
        </section>

        <!-- Specialties -->
        <section class="specialties-section" data-testid="specialties-section">
          <h2 class="section-title">What I Can Help You With</h2>
          <div class="specialties-grid">
            <PrimeCard 
              v-for="specialty in specialties" 
              :key="specialty.title" 
              class="specialty-card"
              :data-testid="`specialty-${specialty.title.toLowerCase().replace(/\s+/g, '-')}`"
            >
              <template #content>
                <div class="specialty-content">
                  <div class="specialty-icon">
                    <i :class="specialty.icon" class="text-primary"></i>
                  </div>
                  <h3 class="specialty-title">{{ specialty.title }}</h3>
                  <p class="specialty-description">{{ specialty.description }}</p>
                </div>
              </template>
            </PrimeCard>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section" data-testid="contact-cta">
          <PrimeCard class="cta-card">
            <template #content>
              <div class="cta-content">
                <h2>Ready to Get Started?</h2>
                <p>Let's discuss your project and how I can help bring your vision to life.</p>
                <div class="cta-actions">
                  <PrimeButton 
                    label="Send Email" 
                    icon="pi pi-envelope" 
                    size="large"
                    @click="openExternalLink('mailto:jake.kohl@example.com?subject=Project Inquiry')"
                    data-testid="email-cta"
                  />
                  <PrimeButton 
                    label="View LinkedIn" 
                    icon="pi pi-linkedin" 
                    size="large"
                    severity="secondary"
                    outlined
                    @click="openExternalLink('https://linkedin.com/in/jakekohl')"
                    data-testid="linkedin-cta"
                  />
                </div>
              </div>
            </template>
          </PrimeCard>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
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
.contact-header {
  text-align: center;
  color: white;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.page-subtitle {
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.contact-description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto;
}

/* Status Section */
.status-section {
  margin-bottom: 3rem;
}

.status-card {
  border: none;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.status-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.status-header h2 {
  margin: 0;
  color: #1e293b;
  font-size: 1.5rem;
  font-weight: 700;
}

.status-indicator {
  font-size: 1rem;
  animation: pulse 2s infinite;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0;
}

.status-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.status-item strong {
  color: #374151;
  font-weight: 600;
}

.status-item span {
  color: #64748b;
}

/* Contact Methods */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.contact-methods {
  margin-bottom: 3rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.contact-card {
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.contact-card-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: start;
}

.contact-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon i {
  font-size: 1.5rem;
}

.contact-type {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.contact-value {
  font-size: 1rem;
  color: #6366f1;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.contact-description {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.contact-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* Working Hours */
.hours-section {
  margin-bottom: 3rem;
}

.hours-card {
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.hours-grid {
  display: grid;
  gap: 1.5rem;
}

.hours-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 0.5rem;
  border-left: 4px solid #6366f1;
}

.hours-label {
  font-weight: 600;
  color: #374151;
}

.hours-value {
  color: #64748b;
  text-align: right;
}

/* Specialties */
.specialties-section {
  margin-bottom: 3rem;
}

.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.specialty-card {
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.specialty-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.specialty-content {
  text-align: center;
}

.specialty-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.specialty-icon i {
  font-size: 2rem;
}

.specialty-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.specialty-description {
  color: #64748b;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  margin-bottom: 2rem;
}

.cta-card {
  border: none;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.cta-content {
  text-align: center;
  padding: 2rem;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.text-primary {
  color: #6366f1 !important;
}

.text-green-500 {
  color: #10b981 !important;
}

.text-orange-500 {
  color: #f59e0b !important;
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .specialties-grid {
    grid-template-columns: 1fr;
  }
  
  .status-grid {
    grid-template-columns: 1fr;
  }
  
  .hours-item {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hours-value {
    text-align: center;
  }
  
  .contact-card-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>