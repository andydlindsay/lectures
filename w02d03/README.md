# W02D03 - Networking with TCP and HTTP

### To Do
- [ ] Discuss networking and the need for protocols
- [ ] TCP introduction
- [ ] TCP demo
- [ ] HTTP fundamentals
- [ ] Simple HTTP client example

### What is networking?
- Communication between machines on a network

### What is a protocol?
- A defined standard for how requests and responses are sent between network devices

### The OSI Model
- **O**pen **S**ystems **I**nterconnection Model developed by the International Organization for Standardization (ISO)
- Conceptual model of how data is transmitted over a network

1. **Physical** - physical pieces of hardware
2. **Datalink** - how the physical device is connect to the network
3. **Network** - communication between devices over the network
4. **Transport** - splits up the network communication into ports (~65000 of them)
5. **Session** - establishes a session between two connected devices
6. **Presentation** - data translation layer (encryption and decryption)
7. **Application** - the application (client or server)

### TCP/IP Model
1. **Network Access** - physical devices and how they connect to the network
2. **Internetwork** - communication between devices on the network
3. **Transport** - splits up the network communication into ports
4. **Application** - clients and servers/applications and services/sessions and encryption

### Transport Layer Protocols
- Break data into packets to be sent over the network layer
- Give each packet a header with origin and destination
- **UDP**: **U**ser **D**atagram **P**rotocol
  - Smaller header size (8 bytes) which results in smaller packet sizes
  - _Connectionless_ ie. there is no need to establish or maintain a connection
  - No error recovery (any corrupted packets are discarded)
  - Packets can arrive in any order
  - Useful for streaming/low latency applications
- **TCP**: **T**ransportation **C**ontrol **P**rotocol
  - Larger header size (20 bytes)
  - Requires a connection (3-way handshake)
  - Corrupted packets are reported to the server and are re-sent
  - Packets arrive in order
  - Useful when guaranteed communication is needed

### HTTP
- **H**yper**T**ext **T**ransfer **P**rotocol
- Protocol for how messages are formatted and transmitted
- Call and response communication
- _State-less_: no memory of any previous communication
- Routes to resources are made up of methods (verbs) and paths
- **METHODS**: GET, POST, PUT, PATCH, DELETE
- **PATHS**: `/users`, `/unicorns/123`
- Returns status codes for each communication (eg. 200, 202, 302, 404, 500)
- Response headers contain information about the response such as media type and content size
- Reponse body contains the content (JSON, html, etc)

### Useful Links
* [OSI Model](https://en.wikipedia.org/wiki/OSI_model)
* [Net package documentation](https://nodejs.org/api/net.html)
* [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
* [Request Package](https://www.npmjs.com/package/request)
