# External Resources

* [dotenv gem](https://github.com/bkeepers/dotenv)
* [MVC Diagram](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day3/Lecture/assets/mvc-rails.png)

# Outline

## Rails Week Review
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
- **Active Support**
  - Collection of helper methods for Ruby
- **Action Mailer**
  - Allows you to send emails
- **Action Cable**
  - Websockets for Rails
- **Active Storage**
  - For uploading files to storage in the cloud
- Rails bundles all these libraries together to create a framework

## Rails App

### Create the rails app from the command line

```shell
# Generate a new rails application
% rails new <app-name>

# Specify postgres as database
% rails new <app-name> --database=postgresql

# API only rails app
% rails new <app-name> --api

# Start a rails app
% rails server
```

### Update `config/database.yml`

```yml
development:
  <<: *default
  database: database-name

  # The specified database role being used to connect to postgres.
  # To create additional roles in postgres see `$ createuser --help`.
  # When left blank, postgres will use the default role. This is
  # the same name as the operating system user that initialized the database.
  username: database-user

  # The password associated with the postgres role (username).
  password: database-password

  # Connect on a TCP socket. Omitted by default since the client uses a
  # domain socket that doesn't need configuration. Windows does not have
  # domain sockets, so uncomment these lines.
  host: database-host

  # The TCP port the server listens on. Defaults to 5432.
  # If your server runs on a different port number, change accordingly.
  port: database-port
```

### Use environment variables instead

```bash
% touch .env
```

```Gemfile
gem 'dotenv-rails', groups: [:development, :test]
```

```bash
% bundle
```

```env
DATABASE_URL=database-connection-string
```

```yml
# comment out the unneeded connection info
development:
  <<: *default
  url: <%= ENV['DATABASE_URL'] %>
```

### Generate models from the command line

```bash
rails g model Author
rails g model Book

# or with scaffold
rails g scaffold authors
rails g scaffold books
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
# db/seeds.rb
puts "Seeding Data..."

agatha = Author.create(first_name: 'Agatha', last_name: 'Christie')
stephen = Author.create(first_name: 'Stephen', last_name: 'King')
jay_kay = Author.create(first_name: 'J.K.', last_name: 'Rowling')

Book.create(title: 'Murder on the Orient Express', num_pages: 347, author_id: agatha.id)
Book.create(title: 'A Pocket Full of Rye', num_pages: 220, author_id: agatha.id)
Book.create(title: 'Death on the Nile', num_pages: 335, author_id: agatha.id)

Book.create(title: 'It', num_pages: 1035, author_id: stephen.id)
Book.create(title: 'The Shining', num_pages: 640, author_id: stephen.id)
Book.create(title: 'Misery', num_pages: 805, author_id: stephen.id)
Book.create(title: 'The Green Mile', num_pages: 2324, author_id: stephen.id)

Book.create(title: "Harry Potter and the Philosopher's Stone", num_pages: 375, author_id: jay_kay.id)
Book.create(title: "Harry Potter and the Deathly Hallows", num_pages: 575, author_id: jay_kay.id)
Book.create(title: "Harry Potter and the Chamber of Secrets", num_pages: 643, author_id: jay_kay.id)

puts "Done!"
```

### Run migrations
* `schema_migrations` table holds the migration history (empty it to reset the migrations)

```shell
rails db:migrate
```

### Run seeds

```shell
rails db:seed
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

### Update routes

```rb
# config/routes.rb
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :authors do
  end

  resources :books do
  end
end
```

### Create views

```rb
# app/views/authors/index.html.erb
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Authors</title>
</head>
<body>
  <h1>All the Authors</h1>
  <% @authors.each do |author| %>
    <div>
      <h2><%= "#{author.first_name} #{author.last_name}" %></h2>
    </div>
  <% end %>
</body>
</html>
```

```rb
# app/views/books/index.html.erb
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Books</title>
</head>
<body>
  <h1>All the Books</h1>
  <% @books.each do |book| %>
    <div>
      <%= book.title %>
    </div>
  <% end %>
</body>
</html>
```

### Use nested routes

```rb
# config/routes.rb
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :authors do
    resources :books
  end
end
```

* Update books controller

```rb
# app/controllers/books_controller.rb
class BooksController < ApplicationController
  def index
    @author = Author.find(params[:author_id]);
    @books = @author.books
  end
end
```

* Update books index view

```rb
# app/views/books/index.html.erb
<body>
  <h2>Books for <%= @author.first_name + ' ' + @author.last_name %></h2>
  <%= link_to 'Home', authors_path  %>
  <% @books.each do |book| %>
    <div>
      <%= book.title %>
    </div>
  <% end %>
</body>
```

* Update authors index view

```rb
# app/views/authors/index.html.erb
<body>
  <h1>All the Authors</h1>
  <% @authors.each do |author| %>
    <div>
      <h2><%= "#{author.first_name} #{author.last_name}" %> - <%= link_to 'Books', author_books_path(author)  %></h2>
    </div>
  <% end %>
</body>
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
