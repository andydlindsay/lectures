# W03D03 HTTP Cookies & User Authentication

### To Do
- [ ] HTTP and cookies
- [ ] Live Code: Register user with email and password
- [ ] Storing passwords
- [ ] Encrypted cookies
- [ ] HTTP Secure (HTTPS)
- [ ] Server-side sessions

### HTTP and Cookies
* **HTTP** is a stateless protocol which means that the participants are not required to remember any previous communication
* **Cookies**:
  * Allow us to store information about a user between HTTP requests
  * Stored as key/value pairs in the client's browser
  * Are passed to the server with every HTTP request by the browser
  * Usually used to store a unique value that identifies a particular user

### Storing Passwords
* We **never** want to store passwords as plain text
* Passwords should always be _hashed_ 
* **Hashing**:
  * The original string is passed into a function that performs some kind of transformation on it and returns a different string (the _hash_)
  * This is a one way process: a hashed value cannot be retrieved
* We make hashing more secure by adding a _salt_ to the original string prior to hashing
* This [helps to protect against Rainbow Table attacks](https://stackoverflow.com/questions/420843/how-does-password-salt-help-against-a-rainbow-table-attack)

### Encrypted Cookies
* Plain text cookies can be manipulated by users
* It's better practice to use _encrypted_ cookies
* **Encryption**:
  * Similar to hashing, the string is scrambled/transformed by a function
  * This is a two-way process: encrypted strings can be decrypted by the intended recipient

### HTTP Secure (HTTPS)
* HTTPS uses Transport Layer Security (TLS) to encrypt communication between client and server
* Encrypted using asymmetric cryptography which uses a public key and private key system
* The public key is available to anyone who wants it and is used to encrypt the communication
* The private key is known only to the receiver and is used to decrypt the communication

### Server-side Sessions
* As it sounds, session information is stored on the server instead of the client
* The client stores a unique session id which is used to access the session data on the server

### When to use...
* Plain Text Cookies:
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
* [Asymmetric Cryptography](https://searchsecurity.techtarget.com/definition/asymmetric-cryptography)
* [Client Session vs Server Session](http://www.rodsonluo.com/client-session-vs-server-session)
