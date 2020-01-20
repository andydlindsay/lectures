# W3D4 Real World HTTP Servers

### To Do
- [ ] REST
- [ ]

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

### Useful Links
- []()
