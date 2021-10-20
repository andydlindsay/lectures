# W10D02 - Feature Testing with RSpec and Rails

### To Do
- [ ] Install `rspec-rails`
- [ ] Write model tests
- [ ] Setup Capybara
- [ ] Write feature tests

### End-to-End Testing
* Tests business logic (user stories)
* Mimics a user/client
* Checks if feature requirements have been completed

### Drawbacks of E2E Testing
* Performance: running unit tests is much more efficient than end-to-end testing
* Cost: running a seperate server just for the end to end tests is costly ($$)

### Capybara
* We'll be using the Capybara testing tool which emulates a client for end-to-end testing
* It will allow us to spool up a server, click on various UI elements, and check assertions against actual pages
