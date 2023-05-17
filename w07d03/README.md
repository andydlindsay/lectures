# W07D03 - React Developer Workflow

### To Do
* [ ] Node Version and NVM
* [ ] React DevTools
* [ ] Building Components in Isolation
  * [ ] Fragments
  * [ ] Styling with hardcoded values
  * [ ] Passing props
  * [ ] Default props
  * [ ] Looping and arrays
  * [ ] Conditional rendering
  * [ ] Managing state
  * [ ] Controlled inputs
  * [ ] Handling DOM events

### Node Version and NVM
* Working on a variety of projects can mean having to switch quickly between different versions of Node.
* We recommend using a **version manager** such as NVM to help with this process.

```bash
# example nvm commands
$ nvm list # list all the Node versions currently installed
$ nvm install 14 # install version 14
$ nvm use 14 # switch temporarily to version 14
$ nvm alias default 14 # make version 14 the default
$ nvm use default # switch to the default version
```

#### Note: Changing Node versions may mean that some installed packages might not work. It is common to delete the `node_modules` folder and run `npm install` again to make sure the compatible version of each package has been installed.

### React DevTools
* Most modern browsers have extensions/plugins that give us insight into our React applications.
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for Chrome.
* The React DevTools allows us to see/edit state and props for a component and see which hooks are being used within a component.
* They also allow us to view the _component hierarchy_ (the parent/child relationship between components).

### Building Components in Isolation
* Ideally, components should be developed in isolation. This makes them easier to style and forces us to think of just this component, not how it fits into the overall app.
* We want to consider the props that the component will accept and the various different ways that the component might be displayed (eg. disabled, loading, error).
* There are a variety of tools that can help us with this such as [Storybook](https://storybook.js.org/), but a straight-forward way to develop components in isolation is to render them individually in `App.js`.

### Useful Links
* [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)
