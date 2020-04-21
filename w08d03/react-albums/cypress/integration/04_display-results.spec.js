describe('Display Results', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('loads results from an API', () => {
    cy.fixture('itunes.json').as('itunesResponse');

    cy.server();
    cy.route({
      method: 'GET',
      url: 'search*',
      delay: 500,
      response: '@itunesResponse'
    }).as('getSearch');

    cy.get('.search__form')
      .find('input:first')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');
      
    cy.get('.spinner').as('spinner')
      .should('be.visible');

    cy.wait('@getSearch')
      .get('main')
      .contains('Homework')
      .should('be.visible');

    cy.get('@spinner')
      .should('not.be.visible');

    cy.contains('Explicit')
      .click();

    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
