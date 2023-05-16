# W07D03 - React Developer Workflow

### To Do
* [ ] Node version and NVM
* [ ] Create a new React application with Create-React-App
* [ ] React DevTools
* [ ] Building components in isolation
* [ ] Bringing it all together
  * [ ] Fragments
  * [ ] Passing props
  * [ ] Passing children
  * [ ] Looping and arrays
  * [ ] Managing state
  * [ ] Handling DOM events
  * [ ] Controlled inputs
  * [ ] Conditional rendering

### Node version and NVM
* Working on a variety of projects can mean having to switch quickly between different versions of Node.
* We recommend using a **version manager** such as NVM to help with this process.

```bash
# example nvm commands
$ nvm list # list all the Node versions currently installed
$ nvm install 14 # install version 14
$ nvm use 14 # switch temporarily to version 14
$ nvm alias default 14 # make version 14 the default
```

### Build components in isolation
* Ideally, components should be developed in isolation. This makes them easier to style and forces us to think of just this component, not how it fits into the overall app.
* We want to consider the props that the component will accept and the various different ways that the component might be displayed (eg. disabled, loading, error).
* There are a variety of tools that can help us with this, but a straight-forward way to develop components in isolation is to render them individually in `App.js`.
