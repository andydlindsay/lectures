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

### Add the `capybara-selenium` and `rexml` gems

```rb
group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'

  # these lines vvv
  gem 'capybara-selenium'
  gem 'rexml', '~> 3.2', '>= 3.2.5'

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

### Generate a feature spec file

```shell
% rails g rspec:feature Cars
```

### Search for Capybara cheatsheet
* [Capybara cheatsheet](https://devhints.io/capybara)

```rb
# spec/features/cars_spec.rb
require 'rails_helper'

RSpec.feature "Cars", type: :feature do
  
  scenario 'display the Cars page' do |variable|
    # visit /cars
    visit cars_path
  end

end
```

### Run the test command

```shell
% rspec
```

### Add the `js: true` flag

```rb
# spec/features/cars_spec.rb
RSpec.feature "Cars", type: :feature, js: true do
```

```rb
# spec/features/cars_spec.rb
require 'rails_helper'

RSpec.feature "Cars", type: :feature, js: true do
  
  scenario 'display the Cars page' do |variable|
    # visit /cars
    visit cars_path

    # take a screenshot
    # save_screenshot

    # take a named screenshot so it saves over it
    save_screenshot 'cars_page.png'
  end

end
```

* Screenshots are saved to the `tmp/capybara` folder

### Add the `database_cleaner` gem

```rb
group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  gem 'capybara-selenium'
  gem 'rexml', '~> 3.2', '>= 3.2.5'

  # this line vvv
  gem 'database_cleaner'

  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end
```

```shell
% bundle install
```

### Copy && paste the code from the Compass assignment
* [Compass assignment](https://web.compass.lighthouselabs.ca/days/w10d2/activities/451)

```rb
# spec/support/database_cleaner.rb
RSpec.configure do |config|

  config.before(:suite) do
    if config.use_transactional_fixtures?
      raise(<<-MSG)
        Delete line `config.use_transactional_fixtures = true` from rails_helper.rb
        (or set it to false) to prevent uncommitted transactions being used in
        JavaScript-dependent specs.

        During testing, the app-under-test that the browser driver connects to
        uses a different database connection to the database connection used by
        the spec. The app's database connection would not be able to access
        uncommitted transaction data setup over the spec's database connection.
      MSG
    end
    DatabaseCleaner.clean_with(:truncation)
  end

  config.before(:each) do
    DatabaseCleaner.strategy = :transaction
  end

  config.before(:each, type: :feature) do
    # :rack_test driver's Rack app under test shares database connection
    # with the specs, so continue to use transaction strategy for speed.
    driver_shares_db_connection_with_specs = Capybara.current_driver == :rack_test

    if !driver_shares_db_connection_with_specs
      # Driver is probably for an external browser with an app
      # under test that does *not* share a database connection with the
      # specs, so use truncation strategy.
      DatabaseCleaner.strategy = :truncation
    end
  end

  config.before(:each) do
    DatabaseCleaner.start
  end

  config.append_after(:each) do
    DatabaseCleaner.clean
  end

end
```

```rb
# add this line to the spec
require 'support/database_cleaner'
```

### Follow the instructions in the error message and update `rails_helper.rb`

```rb
# comment out or remove this line
config.use_active_record = false
```

* `rspec` should now run without error, but we still have no output from the database

### Add a before each to the spec

```rb
before :each do
  @car1 = Car.create(
    make: Make.create(make: 'Nissan'),
    model: Model.create(model: 'Centra'),
    style: Style.create(body_style: 'styled'),
    trim: Trim.create(trim_level: 'trimmed'),
    color: 'yellow',
    year: 1986
  )

  @car2 = Car.create(
    make: Make.create(make: 'Toyota'),
    model: Model.create(model: 'Elantra'),
    style: Style.create(body_style: 'unstyled'),
    trim: Trim.create(trim_level: 'trimmed'),
    color: 'red',
    year: 1995
  )

  @car3 = Car.create(
    make: Make.create(make: 'Dodge'),
    model: Model.create(model: 'Solaris'),
    style: Style.create(body_style: 'unstyled'),
    trim: Trim.create(trim_level: 'not trimmed'),
    color: 'pink',
    year: 2011
  )
end
```

* These cars can now be seen in the screenshot
* Comment out `database_cleaner` and show how the records from the previous test remain

### Show off Capybara `page` variable

```rb
# inside a spec
puts page
puts page.methods
puts page.html

# show a failure
expect(page).to have_text 'Hello world'

# show passing
expect(page).to have_text 'All my cars!'
# it will return partial matches

# show case sensitive search
expect(page).to have_text 'ALL MY CARS!'

# convert to regex for case insensitive
expect(page).to have_text /all my cars!/i
```

### Add another scenario

```rb

```



