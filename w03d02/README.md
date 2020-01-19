# W02D03 CRUD with Express

### To Do
- [ ] Implement CRUD over HTTP with Express
- [ ] Render data for the user using EJS templates
- [ ] Use forms to submit HTTP requests
- [ ] Explore the Post-Redirect-Get pattern
- [ ] Using Chrome DevTools to see requests and responses
- [ ] Practice debugging Express

### Express

* A framework that lets us create routes and write/include middleware easily

### CRUD and BREAD

* There are 5 main operations that we can perform on a particular resource (or group of resources)
  * Create a new resource
  * Retrieve all of the existing resources
  * Retrieve a particular resource
  * Edit a particular resource
  * Delete a particular resource

* We use acronyms to help us remember these operations: **CRUD** and **BREAD**
  * **CRUD**: **C**reate **R**ead **U**pdate **D**elete
  * **BREAD**: **B**rowse **R**ead **E**dit **A**dd **D**elete

### Routes

* A route is made up of a **VERB** and a **PATH**.
* Verbs: **GET**, **POST**, **PUT**, **PATCH**, **DELETE**
* Path: `example.com`**/resource**, `example.com`**/resource/:id**

### REST (Representational State Transfer)

* REST means that the path that we are going to should represent the data being transferred
* An API that uses the REST convention is said to be RESTful
* RESTful routes look like:
  * Browse: `GET  /resource`
  * Read:   `GET  /resource/:id`
  * Edit:   `POST /resource/:id`
  * Add:    `POST /resource`
  * Delete: `POST /resource/:id/delete`

* RESTful API's have some advantages:
  * If I know that your API is RESTful, then I can easily guess at what endpoints you have defined and I don't need to read your documentation to figure it out
  * It also results in clean URLs (ie. /resource instead of /get-my-resource). The desired action is implied by the HTTP verb
  * This method of specifying URLs is chainable (eg. /user/123, /user/123/resource or /user/123/resource/456)

### Forms vs Anchor Tags
* Anchor tags (`<a></a>`) only make `GET` requests
  * Anchor tags are generally used to link between websites or to different pages on the same site
* Forms can make either `GET` or `POST` requests (specified in the form's `method` attribute)
  * Forms are used to collect and submit user information
* If data is being retrieved, use a `GET` request
* If data is being updated/changed/created, use a `POST` request (therefore, a form)
  * NOTE: This includes things like buttons to delete a resource (simply wrap the button in a form)

### Morgan
* During the lecture, we used a package called `morgan` to see incoming requests to our Express server
* We call a package like this a _logger_
* Morgan is an excellent example of using middleware with Express
  * Reminder: middleware sits between the request and the response and is able to perform actions using the `request` and/or the `response` object including adding new keys/values (think `body-parser`)

### The Network Tab
* We can use the _Network_ tab in the Chrome DevTools to see incoming/outgoing network requests
  ![Network Tab]()

### Useful Links
* [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
* [BREAD/CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Express](https://github.com/expressjs/express)
* [Embedded JavaScript (EJS)](https://github.com/mde/ejs)
* [Morgan](https://github.com/expressjs/morgan)
* [Body-Parser](https://github.com/expressjs/body-parser)
* [Delete Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
* [HTTP Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
