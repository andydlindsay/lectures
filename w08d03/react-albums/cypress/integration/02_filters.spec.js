describe('Filters', () => {

  it('can toggle the explicit check box', () => {
    cy.visit('/');
    
    cy.get('.filters__form-group')
      .first()
      .find('input')
      .first()
      .as('explicitCheck');

    cy.get('@explicitCheck')
      .uncheck()
      .should('not.be.checked');
  });

});
