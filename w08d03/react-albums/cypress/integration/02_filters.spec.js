describe('Filters', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can toggle the explicit check box', () => {    
    cy.get('.filters__form-group')
      .first()
      .find('input')
      .as('explicitCheck');

    cy.get('@explicitCheck')
      .uncheck()
      .should('not.be.checked');
  });

  it('can toggle the 1900s check box', () => {
    cy.get('.filters__form-group')
      .contains('1900s')
      .parent()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('toggles the checkbox by clicking on the label', () => {
    cy.get('.filters__form-group')
      .contains('EP')
      .click()
      .siblings('input')
      .should('be.checked');
  });
});
