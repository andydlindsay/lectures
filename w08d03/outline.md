# Outline

### Jest vs Cypress
* Jest
  * Command line test runner
  * Based around testing `assertions`
  * Used for unit and integration testing (mostly)
* Cypress
  * Runs its own browser to execute the tests in
  * Performs operations and interacts with the site the way that a user would (eg. typing into input fields, clicking on buttons)
  * Used for integration and E2E testing (mostly)

### Install Cypress
* `npm install --save-dev cypress`
* Open Cypress with `node_modules/.bin/cypress open`
* Create a script called `cypress` to run the above
* Remove the example tests, edit `cypress.json`

```json
{
  "viewportWidth": 1280,
  "viewportHeight": 1200
}
```

### Create a new file `cypress/integration/01_cypress.spec.js`

```js
describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true);
  });
});
```

### Start the app server running and add a new test to visit the site

```js
it('can visit the home page', () => {
  cy.visit('http://localhost:3000');
});
```

### Add a new spec file `cypress/integration/02_filters.spec.js`

```js
describe('Filters', () => {

  it('can toggle the explicit check box', () => {
    cy.visit('http://localhost:8765');
    
    cy.get('.filters__form-group')
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

});
```

### Add the `baseUrl` key to `cypress.json`

```json
"baseUrl": "http://localhost:3000"
```

### Convert affected files to use `cy.visit('/');` instead
* Show the changes in Cypress in Settings => Configuration highlighting the `baseUrl` key

### Add another checkbox test

```js
it('can toggle the 1900s check box', () => {
  cy.visit('/');

  cy.get('.filters__form-group')
    .contains('1900s')
    .parent()
    .find('input')
    .uncheck()
    .should('not.be.checked');
});
```

### Pull the repeating `cy.visit('/');` out to a `beforeEach`

```js
beforeEach(() => {
  cy.visit('/');
});
```

### Demonstrate clicking a label to toggle a checkbox

```js
it('toggles a check box by clicking on the label', () => {
  cy.contains('EP')
    .click();

  cy.get('#EP')
    .should('be.checked');
});
```

### Add a new spec file `cypress/integration/03_text-input.spec.js`

```js
describe('Text Input', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('accepts text input', () => {
    cy.get('.search__form')
      .find('input')
      .type('Carrie Underwood', { delay: 100 })
      .should('have.value', 'Carrie Underwood');
  });
});
```

### Add another test to handle backspace

```js
it('can handle backspace', () => {
  cy.get('.search__form')
    .find('input')
    .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
    .should('have.value', 'Bee Gees');
});
```

### Refactor the tests to use `beforeEach`

```js
describe('Text Input', () => {
  beforeEach(() => {
    cy.visit('/');
    // use `as` to alias vars and reference them with @varName
    cy.get('.search__form')
      .find('input')
      .as('searchField');
  });

  it('accepts text input', () => {
    cy.get('@searchField')
      .type('Carrie Underwood', { delay: 100 })
      .should('have.value', 'Carrie Underwood');
  });

  it('can handle backspace', () => {
    cy.get('@searchField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });
});
```

### Add `itunes.json` to `cypress/fixtures`

### Add a new spec file `cypress/integration/04_display-results.spec.js`

```js
describe('Display Results', () => {
  it('displays results from an API', () => {
    cy.visit('/');

    // load the hardcoded data as @itunesResponse
    cy.fixture('itunes.json')
      .as('itunesResponse');

    // create a server for requests to be made to
    cy.server();
    // route all requests that match to the cypress server
    cy.route({
      method: 'GET',
      url: 'search*',
      delay: 500,
      response: '@itunesResponse'
    }).as('getSearch');

    // get the search input and type into it
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk')
      
    // get the spinner that should be visible
    cy.get('.spinner')
      .should('be.visible');

    // wait while the search results come back then verify them
    cy.wait('@getSearch')
      .get('main')
      .contains('Homework')
      .should('be.visible');

    // get the spinner and it shouldn't be visible
    cy.get('.spinner')
      .should('not.be.visible');

    // untick the Explicit box to remove one album
    cy.contains('Explicit')
      .click();

    // check that that album has been removed
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });
});
```
