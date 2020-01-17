# W02D03 CRUD with Express

### To Do
- [ ] Implement CRUD over HTTP with Express
- [ ] Use forms to submit HTTP requests
- [ ] Practice debugging Express

### Express

A framework that lets us create routes and write/include middleware.

### CRUD and BREAD

* There are 5 main operations that we can perform on a particular resource (or group of resources)

* Create/Add
  * Create a new resource
* Read/Browse
  * Retrieve all of the resource
* Read
  * Retrieve a particular resource
* Update/Edit
  * Edit a particular resource
* Delete
  * Delete a resource

* We use acronyms to help us remember these operations: **CRUD** and **BREAD**
  * **CRUD**: **C**reate **R**ead **U**pdate **D**elete
  * **BREAD**: **B**rowse **R**ead **E**dit **A**dd **D**elete

### Routes

A route is made up of a **VERB** and a **PATH**.

Verbs: **GET**, **POST**, **PUT**, **PATCH**, **DELETE**

Path: `example.com`**/resource**, `example.com`**/resource/:id**

### REST (Representational State Transfer)

REST means that the path that we are going to should represent the data being transferred.

An API that uses the REST convention is said to be RESTful.

RESTful routes look like:

* Browse: `GET  /resource`
* Read:   `GET  /resource/:id`
* Edit:   `POST /resource/:id`
* Add:    `POST /resource`
* Delete: `POST /resource/:id/delete`

RESTful API's have some advantages:

* If I know that your API is RESTful, then I can easily guess at what endpoints you have defined and I don't need to read your documentation to figure it out. 
* It also results in clean URLs (ie. /resource instead of /get-my-resource). The desired action is implied by the HTTP verb.
* This method of specifying URLs is chainable (eg. /user/123, /user/123/resource or /user/123/resource/456).

### Useful Links
* [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
* [BREAD/CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Express](https://github.com/expressjs/express)
* [Embedded JavaScript (EJS)](https://github.com/mde/ejs)
* [Morgan](https://github.com/expressjs/morgan)
* [Body-Parser](https://github.com/expressjs/body-parser)
* [Delete Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
* [HTTP Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
