describe('Home Page', () => {

  const brandText = 'Jake Kohl';
  const menuItems = [
    { dataTest: 'nav-home', label: 'Home' },
    { dataTest: 'nav-projects', label: 'Projects' },
    { dataTest: 'nav-contact', label: 'Contact' },
  ];
  const socialLinks = [
    { dataTest: 'social-github', link: 'https://github.com/jakekohl' },
    { dataTest: 'social-linkedin', link: 'https://linkedin.com/in/jacob-jp-kohl' },
  ];
  const sections = [ 'hero-section', 'stats-section', 'skills-section', 'cta-section' ];

  it('should display the home page with the Top Navigation Menubar', () => {
    cy.visit('/');
    cy.verifyTopNavMenubar(brandText, menuItems, socialLinks);
    sections.forEach((section) => {
      cy.verifySectionVisibility(section);
    });
  });

  it('should inform the user whose portfolio they are looking at', () => {
    cy.visit('/');
    cy.getDataTest('hero-section').should('be.visible').within(() => {
      cy.contains('Jake Kohl').should('be.visible');
      cy.contains('Quality Assurance Engineer').should('be.visible');
      cy.contains('Test Automation Enthusiast').should('be.visible');
      cy.getDataTest('profile-avatar').should('be.visible').children().should('have.attr', 'src').and('include', 'https://avatars.githubusercontent.com/');
    });
  });

  it('should allow user to navigate to the projects page through the hero section', () => {
    cy.visit('/');
    cy.getDataTest('hero-section').should('be.visible').within(() => {
      cy.clickDataTest('hero-projects-button');
    });
    cy.url().should('include', '/projects');
  });

  it.skip('should allow a user to directly download a resume from the hero section', () => {
    cy.visit('/');
    cy.getDataTest('hero-section').should('be.visible').within(() => {
      cy.clickDataTest('hero-resume-button');
    });
  });
  
});