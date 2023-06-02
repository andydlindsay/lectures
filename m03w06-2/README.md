# M03W06 - CRUD with Express

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

### Forms vs Anchor Tags
* Anchor tags (`<a></a>`) only make `GET` requests
  * Anchor tags are generally used to link between websites or to different pages on the same site
* Forms can make either `GET` or `POST` requests (specified in the form's `method` attribute)
  * Forms are used to collect and submit user information
* If data is being retrieved, use a `GET` request
* If data is being updated/changed/created, use a `POST` request (therefore, a form)
  * NOTE: This includes things like buttons to delete a resource (simply wrap the button in a form)

### Useful Links
* [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
* [BREAD/CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Express](https://github.com/expressjs/express)
* [Embedded JavaScript (EJS)](https://github.com/mde/ejs)
* [Body-Parser](https://github.com/expressjs/body-parser)
* [Delete Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
* [HTTP Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
