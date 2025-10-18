<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';

const contactInfo = ref([]);
const specialties = ref([]);

const fetchContactInfo = async () => {
  try {
    const response = await fetch('https://portfolio.jakekohl.dev/contact');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const contactResponse = await response.json();
    contactInfo.value = contactResponse.contact;
    specialties.value = contactResponse.specialties;
  } catch (error) {
    console.error('Failed to fetch contact info:', error);
    contactInfo.value = [];
    specialties.value = [];
  }
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

onMounted(() => {
  fetchContactInfo();
});
</script>
<template>
  <div class="contact-container">
    <div class="content-wrapper">
      <!-- Header Section -->
      <section class="contact-header">
        <div class="header-content">
          <h1 class="page-title">
            <i class="pi pi-envelope mr-3"></i>
            Get in Touch
          </h1>
          <p class="page-subtitle">
            Ready to collaborate? Let's discuss your next project!
          </p>
          <p class="contact-description">
            I'm always excited to work on new projects and help bring your ideas to life.
            Whether you need a full-stack developer, testing specialist, or technical consultant,
            I'm here to help.
          </p>
        </div>
      </section>

      <div class="contact-content">
        <!-- Contact Methods -->
        <section class="contact-methods">
          <h2 class="section-title">Contact Information</h2>
          <div class="contact-grid">
            <PrimeCard
              v-for="contact in contactInfo"
              :key="contact.type"
              class="contact-card"
              :data-test="contact.dataTest"
            >
              <template #content>
                <div class="contact-card-content">
                  <div class="contact-header">
                    <div class="contact-icon">
                      <i :class="contact.icon" class="text-primary" />
                    </div>
                    <h3 class="contact-type">{{ contact.type }}</h3>
                  </div>
                  <div class="contact-value-wrapper">
                    <a v-if="contact.link" :href="contact.link" target="_blank" class="contact-value" :data-test="`contact-url`">
                      {{ contact.value }}
                    </a>
                    <span v-else class="contact-value">{{ contact.value }}</span>
                    <PrimeButton
                      icon="pi pi-copy"
                      size="small"
                      severity="secondary"
                      outlined
                      :data-test="`contact-copy`"
                      @click="copyToClipboard(contact.value)"
                    />
                  </div>
                  <p class="contact-description">{{ contact.description }}</p>
                </div>
              </template>
            </PrimeCard>
          </div>
        </section>

        <!-- Specialties -->
        <section class="specialties-section">
          <h2 class="section-title">What I Can Help You With</h2>
          <div class="specialties-grid">
            <PrimeCard
              v-for="specialty in specialties"
              :key="specialty.title"
              class="specialty-card"
              :data-test="specialty.dataTest"
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
  margin-bottom: 4rem;
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

/* Contact Methods */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.contact-methods {
  margin-bottom: 4rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.contact-card {
  border: none;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.contact-card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon i {
  font-size: 1.75rem;
}

.contact-type {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.contact-value-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-value {
  font-size: 1.1rem;
  color: #6366f1;
  font-weight: 600;
}

.contact-description {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

.contact-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

/* Specialties */
.specialties-section {
  margin-bottom: 2rem;
}

.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.specialty-card {
  border: none;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.specialty-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.3);
}

.specialty-content {
  text-align: center;
  padding: 2rem;
}

.specialty-icon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.specialty-icon i {
  font-size: 2.25rem;
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
  font-size: 1rem;
}

.text-primary {
  color: #6366f1 !important;
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

  .contact-card-content {
    text-align: center;
  }

  .contact-header {
    flex-direction: column;
    text-align: center;
  }

  .contact-value-wrapper {
    justify-content: center;
  }

  .contact-actions {
    justify-content: center;
  }

  .contact-header {
    margin-bottom: 3rem;
  }

  .contact-methods {
    margin-bottom: 3rem;
  }
}
</style>
