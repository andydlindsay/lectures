# Outline

### Node version and NVM

```bash
$ node --version

$ nvm list
$ nvm install 16
$ nvm alias default 16
```

### Demo React DevTools
* [DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* Demo the DevTools in the browser

### Build components in isolation
* Ideally, components should be developed in isolation. This makes them easier to style and forces us to think of just this component, not how it fits into the overall app.
* We want to consider the props that the component will accept and the various different ways that the component might be displayed (eg. disabled, loading, error).
* There are a variety of tools that can help us with this, but a straight-forward way to develop components in isolation is to render them individually in `App.js`.

Main Page
* [ ] Fragments
* [ ] Passing props
* [ ] Default props
* [ ] Passing children

Login Form
* [ ] Managing state
* [ ] Controlled inputs
* [ ] Handling DOM events

Navigation
* [ ] Looping and arrays
* [ ] Conditional rendering
