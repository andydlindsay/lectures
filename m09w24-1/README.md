# M09W24 - Rails Review

### To Do
- [ ] Ruby Conversation
- [ ] MVC Review
- [ ] Quickly build simple Rails app

### Model View Controller Review
- **Model:** Responsible for handling data logic (eg. database queries)
- **View:** Responsible for the UI (User Interface)
- **Controller:** Ties the model and view together, talks to both and shares data between them
- Rails also uses a router (`routes.rb`) sitting between the user requests and the controllers that respond to those requests

![MVC Diagram](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day3/Lecture/assets/mvc-rails.png)

### Rails Libraries
- Rails is a framework made up of a collection of libraries
- **Active Record**
  - An Object Relational Mapper (ORM)
  - Allows you to query and modify the application data in an intuitive way
- **Action View**
  - Handles template lookup and rendering
  - Provides helpers for building forms and other UI elements
- **Action Controller**
  - Controller library
  - Controller's make sense of the request and decide what should be returned to the client
- **Action Dispatch**
  - The Rails router
  - Handles incoming requests and forwards them to the correct controller
- **Action Cable**
  - Websockets for Rails

### Useful Links
- [react-rails gem](https://github.com/reactjs/react-rails)
- [`dotenv` for Rails](https://github.com/bkeepers/dotenv)

#### Some notes borrowed from Travis' [lecture](https://github.com/tborsa/lectures/blob/master/week10/day1/notes.md) and Vas' [lecture](https://web.compass.lighthouselabs.ca/activities/433/lectures/3022)
