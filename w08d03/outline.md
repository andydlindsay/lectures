1. Install Cypress with `npm install --save-dev cypress`
2. Open Cypress with `node_modules/.bin/cypress open`
3. Create a script called `cypress` to run the above
4. Remove the example tests
5. Create a new file `cypress/integration/init.spec.js`

```js
describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true);
  });
});
```

6. Start the app server running and add a new test to visit the site

```js
it('can visit the home page', () => {
  cy.visit('http://localhost:8002');
});
```

7. Add a new spec file `cypress/integration/filters.spec.js`

```js
describe('Filters', () => {

  it('can toggle the explicit check box', () => {
    cy.visit('http://localhost:8765');
    
    cy.get('.filters__form-group')
      .first()
      .find('input')
      .as('explicitCheck');

    cy.get('@explicitCheck')
      .uncheck()
      .should('not.be.checked');
  });

});
```

8. Add the `baseUrl` key to `cypress.json`

```json
"baseUrl": "http://localhost:8765"
```

9. Convert affected files to use `cy.visit('/');` instead
10. Show the changes in Cypress in Settings => Configuration highlighting the `baseUrl` key
11. Add another checkbox test

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

12. Pull the repeating `cy.visit('/');` out to a `beforeEach`

```js
beforeEach(() => {
  cy.visit('/');
});
```

13. Demonstrate clicking a label to toggle a checkbox

```js
it('toggles the checkbox by clicking on the label', () => {
  cy.get('.filters__form-group')
    .contains('EP')
    .click()
    .siblings('input')
    .should('be.checked');
});
```
