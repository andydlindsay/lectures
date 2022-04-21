"use strict";

/* Question 02

Implement a function fetchDataForUser, which fetches data from a remote JSON api and then returns a part of it.

Since this is a network call, it will need to be an asynchronous function and return the data via a callback.

The JSON-based data will be fetched from this URL, and others like it:
https://gist.githubusercontent.com/kvirani/f7d65576cc1331da1c98d5cad4f82a69/raw/4baad7566f0b6cd6f651c5d3558a015e226428b5/data.json

The callback should be called with two arguments:
1. error: if request comes back with an err, pass it through to this callback. otherwise set this to null
2. data: if there is no error, this should be the object representing the wins and losses for the given username. If there is an error, this should be set to null.

Use the request library (https://www.npmjs.com/package/request) to fetch data.
The request library is already installed in this project, and you can require and use it.

*/

const fetchDataForUser = function(url, username, callback) {
  // IMPLEMENT ME
};


// Don't change below:
module.exports = { fetchDataForUser };
