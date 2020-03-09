### Outline
* How does everyone feel about Rails/Ruby?
* Compare and contrast with JS/React/EJS (MVC vs MVVM: React is the view, but also contains business logic in a mini controller)
* What were the expected learning outcomes for the "Rails week"?
* What were the actual learning outcomes?
* Rails for your final? Rails on your resume?
* Migrations (source control for your database)
* Problem solving outside of programming/development?

* MVC review

* Rails in the wild (ecosystem, popular gems, open source projects, job opportunities)
* New features for Rails 5 & 6
* Nested resources
* Namespacing
* Review: Websockets
* Websockets in Rails (ActionCable)

`rails _5.1.5_ new chatty --database=postgresql -T --no-rdoc --no-ri`

Google "rails gem dotenv"
Copy the line of code into the Gemfile
`touch .env`
Edit `/config/database.yml`
Copy connection string from ElephantSQL and paste into `.env`

`rails db:migrate`

`rails g model Author`
`rails g model Book`

`schema_migrations` table holds the migration history (empty it to reset the migrations)

`rails routes -E`

`rails g controller authors`
`rails g controller books`

```ruby
# config/routes.rb
resources :authors do
  resources :books
end
```
