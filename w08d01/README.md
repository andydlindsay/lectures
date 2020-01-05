# W8D1 - Unit & Integration Testing

### To Do
- [ ] Review: Different types of testing
- [ ] Review: Test-Driven Development
- [ ] Considerations when writing tests
- [ ] Tools for testing React

### Types of Testing
- **Static**
  * Mostly about the linter
  * Syntax testing, variable names, etc
  * Linter/prettifier rules are defined by the company you work for
  * Cheap
- **Unit**
  * Testing the mechanics of a function making sure that the output is consistent
  * Cheap
- **Integration**
  * Making sure that different parts of the code work together
  * How the user will interact with a specific component or feature and making sure it works well with other functions
  * Expensive
- **End-to-end**
  * Closely based on your user flow (user experience), making sure that the workflow of your app is working through multiple features
  * Expensive

### Test-Driven Development
- Tests are written before the code is written
- We use a process called Red-Green-Refactor
- Red: The test is failing
- Green: The test is passing
- Refactor: Improve the existing code safe in the knowledge that the functionality is testable

### Considerations when writing tests

#### Setup & Teardown

It's important when we write tests as close as possible to the real world usage to make sure the test reflects what will happen when a user or other code interacts with it. It's then important to properly setup the test conditions and make sure that once the test has been executed, you tear down all changes to leave no traces for the next test.

#### Appropriate Scoping

Depending on how you will build your tests, it's important to scope your variables appropriately to make sure that there won't be leaks or interference with other tests.

#### Debugging

If a test is not working and it's hard to know why, you can use the `debug()` function or the `prettyDOM` function (from `dom-testing-library`) to output elements and see how the page was built and seen from the eyes of the jest DOM.

#### Coverage

A coverage report shows us how much of our code is covered by the tests we've written. It's important to think about the code coverage of our tests, but it's more important to have solid tests with a little less coverage than easy tests with a lot of coverage. It's okay to not have 100% coverage, it's almost impossible!

### Tools for testing React

#### Jest

Jest is the framework we use to run our tests. It's there to help us manipulate the DOM, render our React elements when using external libraries, and give us a way to see our code coverage. It's readily available in create-react-app, so no need to configure. 

- `npm run test` will start Jest in watch mode and run the tests
- `npm run test -- --coverage` will start Jest in watch mode and show your coverage status after each test 

#### JestDOM

JestDOM is a set of matchers (like `.toHaveClass()` or `.toBeVisible()`) to help you target elements in the DOM to facilitate your testing.

#### DOM Testing Library

DOM Testing Library is a set of tools to help you target DOM elements.

#### React Testing Library

Built on top of the DOM Testing Library, the React one gives us more possibilities to target and render React elements to make them possible to test.

#### NOTE: getBy & queryBy

One small thing about `getBy` and `queryBy` to be aware of is that `getBy` will throw an error if the element is not found. `queryBy` will return only null, so it's up to the context to guide you which you should use.

Notes and example app based on [Francis' lecture](https://github.com/FrancisBourgouin/lhl-12-w8d1)

### Useful Links
* [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
* [Which query should I use?](https://testing-library.com/docs/guide-which-query)
* [Jest-DOM](https://github.com/testing-library/jest-dom)
