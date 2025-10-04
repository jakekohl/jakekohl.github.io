describe('Projects', () => {
  beforeEach(() => {
    cy.visit('/projects');
  });

  it('should show a list of current projects', () => {
    const currentProjects = [
      {
        title: 'Personal Portfolio Website',
        status: 'In Development',
        images: [],
      },
    ];

    cy.getDataTest('ongoing-projects').should('be.visible').within(() => {
      currentProjects.forEach((project) => {
        cy.validateProjectCard(project);
      });
    });
  });

  it.skip('should show a list of completed projects', () => {
    const completedProjects = [];

    cy.getDataTest('completed-projects').should('be.visible').within(() => {
      completedProjects.forEach((project) => {
        cy.validateProjectCard(project);
      });
    });
  });
});
