# CRUD with AJAX

### HTML vs AJAX
* HTML
  * Limited to GET and POST
  * Page reloads on each request
  * User waits while pages are loaded
* AJAX
  * Able to use all HTTP verbs
  * JavaScript is used to "refresh" the page
  * Data is sent "behind the scenes"

### Changes to the backend when using AJAX
* Update endpoints to use other verbs (optional)
* Update endpoints to respond with JSON
* Data endpoints usually have a prefix of `/api`
  * We would expect `GET /cars` to give us back a webpage with cars in it
  * We would expect `GET /api/cars` to return raw data about the cars

### Changes to the frontend when using AJAX
* Handle all form submission with JavaScript and prevent the default behaviour
* Update the DOM using JavaScript
* "Fetch" information on initial page load
