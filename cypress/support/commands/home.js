/**
 * Verify the top navigation menubar
 * @param {string} brandText - The text for the brand slot
 * @param {Object[]} menuItems - The menu items to verify
 * @param {Object[]} socialLinks - The social links to verify
 */
Cypress.Commands.add('verifyTopNavMenubar', (brandText, menuItems, socialLinks) => {
  cy.getDataTest('nav-top-menubar').should('exist').should('be.visible').within(() => {
    cy.getDataTest('brand-slot').should('exist').should('be.visible').should('have.text', brandText);
    menuItems.forEach((item) => {
      cy.getDataTest(item.dataTest).should('exist').should('be.visible').should('have.text', item.label);
    });
    socialLinks.forEach((link) => {
      cy.getDataTest(link.dataTest).should('exist').should('be.visible').should('have.attr', 'href', link.link);
    });
  });
});

/**
 * Verify the visibility of a section
 * @param {string} sectionSelector - The selector for the section
 */
Cypress.Commands.add('verifySectionVisibility', (sectionSelector) => {
  cy.getDataTest(sectionSelector).should('exist').should('be.visible');
});
