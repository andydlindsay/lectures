describe('Text Input', () => {

  beforeEach(() => {
    cy.visit('/');

    // use `as` to alias vars and reference them with @varName
    cy.get('.search')
      .find('.search__form')
      .find('input')
      .as('searchField');
  });

  it('accepts text input', () => {
    cy.get('.search')
      .find('.search__form')
      .find('input')
      .type('Carrie Underwood', { delay: 100 });
  });

  it('can handle backspace', () => {
    cy.get('.search')
      .find('.search__form')
      .find('input')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 });
  });

});
