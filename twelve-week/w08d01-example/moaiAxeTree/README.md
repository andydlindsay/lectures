# W8D1 - Unit & Integration Testing

Today we'll talk about the differences and usage between unit, integration and end to end testing using a small project.

## Review 

### Static testing

It's mostly all about the linter, very cheap and makes sure that we have no syntax errors, typos etc.

### Unit testing

Testing the mechanics of a function, or a set of instructions, making sure that the output is always consistent. Still pretty cheap, and makes you think about how your function should work.

### Feature testing (or integration testing)

How the user will interact with a specific component or function and making sure it works well with other functions and factors. Relatively time consuming

### End-to-end testing

Closely based on your user flow ( user experience), making sure that the workflow of your app is working through multiple features. Expense to structure, but with the right tools (proper workflow with jest or Cypress) it can be maintainable easily.

## When to write tests

### Code & Test

When you have an idea, it's easy to just write the code and then the testing later, it's okay to approach it like that, but it's dangerous if you procrastinate on the text writing.

### Test driven

A highly regarded approach, writing your tests while thinking what your code should do is a very good way to make sure you cover all the test cases. It's also making it easier to have confidence in what you are coding because your test framework can watch your code and confirm or infirm based on the tests.

## How to write tests

### Setup & Teardown

It's important when we write tests to prepare as close as possible as the real world usage to make sure the test reflects what will happen when a user or other code will react with it. It's then important to properly setup the test conditions and make sure that once the test has been executed, you tear down all changes to leave ideally no traces for the next test.

### Appropriate Scoping

Depending on how you will build your tests, it's important to scope your variables appropriately to make sure thatthere won't be leaks or interferences in other tests.

### Debugging

If a test is not working and it's hard to know why, you can use the debug() function or the prettyDOM (from dom-testing-library) to output elements and see how the page was built and seen from the eyes of the jest DOM.

### Coverage

As we seen in class, the basic App.test.js made by create-react-app makes for a great coverage, however it doesn't give us great confidence. It's important to think about the code coverage of our tests, but it's more important to have solid tests with a little less coverage than easy tests with a lot of coverage. (It's okay to not have 100% coverage, it's almost impossible !)

## Tools to test with React

### Jest

Jest is the framework we use to run our tests. It's there to help us manipulate the DOM, render our React elements when using external libraries, and give us a way to see our code coverage. It's readily available in create-react-app, so no need to configure. 

- 'npm run test' will start Jest in watch mode and run the tests
- 'npm run test -- --coverage' will start Jest in watch mode and show your coverage status after each test 

https://jestjs.io/

#### JestDOM

JestDOM is a set of matchers (like .toHaveClass() or toBeVisible()) to help you target elements in the DOM to facilitate your testing.

https://github.com/testing-library/jest-dom

### DOM Testing Library

DOM Testing Library is a set of tools to help you target DOM elements.

#### getBy & queryBy

One small thing about getBy and queryBy to be aware of is that getBy will throw an error if the element is not found. queryBy will return only null, so it's up to the context to guide you which you should use.

https://testing-library.com/docs/dom-testing-library/intro

### React Testing Library

Build on top of the DOM Testing Library, the React one gives us more possibilities to target and render React elements to make them possible to test.

https://testing-library.com/docs/react-testing-library/intro
