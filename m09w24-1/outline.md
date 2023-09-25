# External Resources

* [Faker gem](https://github.com/faker-ruby/faker)
* [dotenv gem](https://github.com/bkeepers/dotenv)
* [MVC Diagram](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day3/Lecture/assets/mvc-rails.png)

# Outline

## Rails Module Review
* How does everyone feel about Rails/Ruby?
* Compare and contrast with JS/React/EJS (MVC vs MVVM: React is the view, but also contains business logic in a mini controller)
* What were the expected learning outcomes for the "Rails week"?
* What were the actual learning outcomes?
* Rails for your final? Rails on your resume?
* Migrations (source control for your database)

## Model View Controller Review
- **Model:** Responsible for handling data logic (eg. database queries)
- **View:** Responsible for the UI (User Interface)
- **Controller:** Ties the model and view together, talks to both and shares data between them
- Rails also uses a router (`routes.rb`) sitting between the user requests and the controllers that respond to those requests

![MVC Diagram](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day3/Lecture/assets/mvc-rails.png)

## Rails Libraries
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

## Rails App

### Create the rails app from the command line

```shell
# Generate a new rails application
% rails new <app-name>

# Specify postgres as database
% rails new <app-name> --database=postgresql

# API only rails app
% rails new <app-name> --api

# Don't create a git repo
% rails new <app-name> --skip-git

# Start a rails app
% rails server

# Start the rails console to interact with models and libraries
% rails c
```

### Generate models from the command line

```bash
rails g model Author
rails g model Book
```

### Update migrations

```rb
# db/migrate/..._create_authors.rb
class CreateAuthors < ActiveRecord::Migration[6.0]
  def change
    create_table :authors do |t|
      t.string :first_name
      t.string :last_name
      t.timestamps
    end
  end
end
```

```rb
# db/migrate/..._create_books.rb
class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :publisher
      t.integer :num_pages
      t.references :author, index: true, foreign_key: true
      t.timestamps
    end
  end
end
```

```rb
# app/models/author.rb
class Author < ApplicationRecord
  has_many :books
end
```

```rb
# app/models/book.rb
class Book < ApplicationRecord
  belongs_to :author
end
```

### Update seed file

```rb
# using Faker
puts "Seeding data..."

# create authors
puts "Creating authors"
20.times do
  Author.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  )
end

# grab the newly created authors
authors = Author.all

# create books
puts "Creating books"
200.times do
  Book.create(
    author: authors.sample,
    title: Faker::Book.title,
    publisher: Faker::Book.publisher,
    num_pages: rand(1..500)
  )
end

puts "Done!"
```

### Run migrations

```shell
rails db:migrate
```

### Run seeds

```shell
rails db:seed
```

### Update routes

```rb
# config/routes.rb
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :authors

  resources :authors, only: [:show, :index]
  resources :authors, except: [:edit, :update, :show]

  resources :books

  # singular resources
  get 'profile', to: 'users#show'

  get 'profile', action: :show, controller: 'users'
end
```

```bash
# make `rails routes` slightly more readable?
rails routes | grep -e 'author' -e 'book' -e 'Pref'
```

```
http://localhost:3000/rails/info/routes
```

### Generate controllers

```shell
rails g controller authors
rails g controller books
```

```rb
# app/controllers/authors_controller.rb
class AuthorsController < ApplicationController
  def index
    @authors = Author.all
  end
end
```

```rb
# app/controllers/books_controller.rb
class BooksController < ApplicationController
  def index
    @books = Book.all
  end
end
```

### Create views

```rb
# app/views/authors/index.html.erb
<h1>All the Authors</h1>
<% @authors.each do |author| %>
  <div>
    <h2><%= "#{author.first_name} #{author.last_name}" %></h2>
  </div>
<% end %>
```

```rb
# app/views/books/index.html.erb
<h1>All the Books</h1>
<% @books.each do |book| %>
  <div class="book">
    <%= book.title %>
  </div>
<% end %>
```

### Partials

```rb
# app/views/books/_book.html.erb
<div class="book">
  <%= book.title %>
</div>
```

```rb
# app/views/books/index.html.erb
# the long way
<% @books.each do |book| %>
  <%= render 'book', book: book %>
<% end %>

# or in one line
<%= render @books %>
```

### What if we want to send back JSON instead?

```rb
# app/controllers/authors_controller.rb
class AuthorsController < ApplicationController
  def index
    @authors = Author.all
    render json: @authors
  end
end
```

### Scaffold!

```bash
# try to commit first to show off changes
rails g scaffold publishers
```
