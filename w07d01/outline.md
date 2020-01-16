## Goals
* Review important concepts from the weekend
* Review ES6 features including object/array destructuring, spread and property shorthand
* Convert interface designs to component-based UI
* Create a project with Create React App
* Build components in isolation with Storybook
* Using components in an application

## There are a lot of new concepts that the students will have read about on the weekend. Review the following topics before live coding.

* Imperative vs Declarative
* JSX, rules and errors
* The role of Webpack and Babel
* Anatomy of a React Component

## Spend some time reviewing user interface designs and the component structures to match

## Demo
* Create a new app using `create-react-app`
* Remove unneeded files in preparation for building out the project
* 


## What is React?
- a framework for a website front end
- for building UI
- breaking down a webpage into (reusable) components

## Components
- core part of React
- components === functions
- describe and encapsulate visual stuff
- visual/behavioural stuff "is a function of" data

## Create a new app using create-react-app
- explore the folder structure that create-react-app gives us
- run the app and look at a "blank" react app
- constant reload of the app while the dev server is running
- create a very simple component inside app.js
- use the simple component multiple times to demo component reuse
- talk about JSX (format/embed html-like stuff in JavaScript)
- compare JSX to EJS `<%= %>` vs `{ }`

- switch gears to Storybook (install)
- talk about component-driven development
- take a screenshot of the final design and draw rectangles around "components"
- go into src/stories
- remove the default stories
- create stories around the simple component in App.js
- **make sure to export the component first!!**

## Break

- create a new folder called `components` to organize the code
- pull the simple component out of App.js
- update the `.stories.js` file to import the Hello component from the `components` directory

- create a new component
- add inline styles to the component file
- in Scheduler you don't have to write any css (already provided just add the correct class names)
- 
