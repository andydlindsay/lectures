# W03D03 HTTP Cookies & User Authentication

### To Do
- [ ] HTTP and cookies
- [ ] Live Code: Register user with email and password
- [ ] Storing passwords
- [ ] Encrypted cookies
- [ ] HTTP Secure (HTTPS)
- [ ] Server-side sessions

### HTTP and Cookies
* **HTTP** is a stateless protocol which means that the server is not required to remember any previous communications with the client
* **Cookies**:
  * Allow us to store key/value pairs in the client's browser
  * Are passed to the server with every HTTP request by the browser
  * Usually used to store a value that identifies the user

### Storing Passwords
* We **never** want to store passwords as plain text
* Passwords should always be _hashed_ 
* **Hashing**:
  * The original string is passed into a function that performs some kind of transformation on it and returns a different string (the _hash_)
  * This is a one way process: a hashed value cannot be retrieved

### Encrypted Cookies
* Plain text cookies can be manipulated by users
* It's better practice to use _encrypted_ cookies
* **Encryption**:
  * Similar to hashing, the string is scrambled/transformed by a function
  * This is a two way process: encrypted strings can be decrypted by the intended recipient

### HTTP Secure (HTTPS)
* 

### Server-side Sessions
* 

### When to use...
* Plain Cookies:
  * Almost never use plain cookies
  * Maybe for:
    * Language selection
    * Shopping cart for non-logged in users
    * Analytics
* Encrypted Cookies:
  * Do this by default
  * Only store the user_id (can be used to look up values in a database or object)
* Server-side Sessions:
  * Not worth the hassle for small projects
  * If you need to store lots of session data
  * If you frequently change session data
  * If you want the ability to invalidate a specific users' session

### Useful Links
* [Plain Text Offenders](https://github.com/plaintextoffenders/plaintextoffenders/blob/master/offenders.csv)
* [How Does Encryption Work?](https://medium.com/searchencrypt/what-is-encryption-how-does-it-work-e8f20e340537)
* [What is HTTPS?](https://www.cloudflare.com/learning/ssl/what-is-https/)
* []()
