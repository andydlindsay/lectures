# M03W07 - HTTP Cookies & User Authentication

### To Do
- [ ] HTTP and cookies
- [ ] Login user with username and password
- [ ] Protect endpoints against non-logged in users
- [ ] Clearing a cookie (aka user logout)
- [ ] Register user with username and password

### HTTP and Cookies
* **HTTP** is a stateless protocol which means that the participants are not required to remember any previous communication
* **Cookies**:
  * Allow us to store information about a user between HTTP requests
  * Stored as key/value pairs in the client's browser
  * Are passed to the server with every HTTP request by the browser
  * Usually used to store a unique value that identifies a particular user

### Reading Cookies
* Cookies come in with the request
* We could parse the request header ourselves, but it's easier to use a library like `cookie-parser`
* `cookie-parser` will parse the cookies and add them to the `request` object

```js
app.get('/protected', (req, res) => {
  const userId = req.cookies.userId;
  // do something with the userId
});
```

### Setting Cookies
* Cookies are set on the `response` object
* The browser will receive the reponse and store the cookie as directed

```js
app.post('/login', (req, res) => {
  // other authenticatey stuff
  res.cookie('userId', user.id); // set the cookie's key and value
  
  res.redirect('/');
});
```

### Clearing Cookies
* Cookies are cleared using the `response` object
* Only the cookie name (`key`) needs to be provided (no value necessary)

```js
app.post('/logout', (req, res) => {
  res.clearCookie('userId'); // instruction to the browser to remove the `userId` cookie

  res.redirect('/');
});
```

### Useful Links
* [Restrictions on Cookies](https://flaviocopes.com/cookies/#restrictions-of-cookies)
* [cookie-parser](https://www.npmjs.com/package/cookie-parser)
