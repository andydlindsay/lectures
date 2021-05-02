## External Resources

* Faker: https://github.com/faker-ruby/faker

## Outline

### Create a new Rails app

```shell
# Generate a new rails application
% rails new <app-name>
```

### Add rspec-rails to the Gemfile

```rb
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  # this line!
  gem 'rspec-rails'
end
```

```shell
% bundle install
```

### Initialize rspec for the project

```shell
% rails g rspec:install
```

### Review the new `spec` file
* `rails_helper.rb`
* `spec_helper.rb`

### Generate the tables

```shell
# create a model/migration
% rails g model Make make:string

% rails g model Model model:string

% rails g model Trim trim_level:string

% rails g model Style body_style:string

% rails g model Car make:references model:references trim:references style:references year:integer color:string
```

### Try to start the server and show the warning on the webpage

```shell
% rails s
```

### Run the migrations

```shell
% rails db:migrate
```

### Review the schema file (`db/schema.rb`)
* Represents the current state of the database structure
* This file is auto-generated; do not edit it

### Install faker for seeding
* Check out the faker docs
* [Faker docs](https://github.com/faker-ruby/faker)

```rb
# in Gemfile
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails'
  
  # this line!
  gem 'faker'
end
```

```shell
% bundle install
```

### Start the Rails console

```shell
% rails c
```

```rb
> Car

> Car.all

> Faker

> Faker::Name.name

> Faker::Vehicle.style
```

* Loads the models and other files, but doesn't actually start the server
* Useful for testing/interacting with data

### Seed the data

```rb
# db/seeds.rb
# create makes
puts "creating makes"
5.times do
  Make.create(make: Faker::Vehicle.make)
end

# create models
puts "creating models"
5.times do
  Model.create(model: Faker::Vehicle.model)
end

# create styles
puts "creating styles"
5.times do
  Style.create(body_style: Faker::Vehicle.car_type)
end

# create trims
puts "creating trims"
5.times do
  Trim.create(trim_level: Faker::Vehicle.style)
end

makes = Make.all.uniq.to_a
models = Model.all.uniq.to_a
trims = Trim.all.uniq.to_a
styles = Style.all.uniq.to_a

# create cars
puts "creating cars"
50.times do
  Car.create(
    make: makes.sample,
    model: models.sample,
    trim: trims.sample,
    style: styles.sample,
    color: Faker::Color.color_name,
    year: rand(1980..2021)
  )
end
```

* `create` vs `create!`: exclamation mark throws an error if validation fails, basic `create` does not

### Test in the console

```shell
% rails c
```

```rb
> Car.all

> Car.first

> Car.first.make

> Car.find(50)

> car = Car.find(5)

> car.make

> car.model
```

### Add the `capybara-selenium` gem

```rb
group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'

  # this line vvv
  gem 'capybara-selenium'

  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end
```

* [Helper Code](https://thoughtbot.com/blog/headless-feature-specs-with-chrome#capybara-configuration)

```rb
# spec/rails_helper.rb
require "selenium/webdriver"

Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end

Capybara.register_driver :headless_chrome do |app|
  capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
    chromeOptions: { args: %w(headless disable-gpu) }
  )

  Capybara::Selenium::Driver.new app,
    browser: :chrome,
    desired_capabilities: capabilities
end

Capybara.javascript_driver = :headless_chrome
```




- testing again?!? testing is important
- review types of tests
  - static
  - unit
  - feature/integration
  - e2e
  - manual
- disadvantages of feature testing
- code coverage revisited
- review tools used
  - rspec
    - test runner
  - phantomjs
    - headless browser
  - capybara
    - dom traversal
    - fill in forms
    - click on links
    - test for the presence of elements/text on the page
- continuous integration
  - test each time a branch is pushed
  - staging environment
  - lets you know (via Slack) if a build fails
- continuous deployment
  - watches master and deploys to production
- www.github.com/features/actions
- startups tend not to test (it's expensive)

- rspec spec --format documentation

# Feature testing with Rails and RSpec

* What is integration (or feature) testing?
* How is it different from unit testing?
* Continuous integration / Continuous Delivery (or Deployment)
* Using [RSpec](https://relishapp.com/rspec/rspec-rails/docs) and [Capybara](http://cheatrags.com/capybara) for feature testing.
