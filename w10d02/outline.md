## External Resources

* `rspec-rails`
* `database_cleaner`

## Outline

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

# show the new generators that have been added
% rails g
```

### Initialize rspec for the project

```shell
% rails g rspec:install
```

### Review the new `spec` file
* `rails_helper.rb`
* `spec_helper.rb`

### Add validations to a model

```rb
validates :name, presence: true
validates :price, presence: true
```

### Generate a model spec

```shell
% rails g rspec:model Character
```

```rb
require 'rails_helper'

RSpec.describe Character, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  describe 'Validations' do

  end

end
```

```shell
# show the error about rexml
% rspec
```

### Install `rexml` gem

```rb
group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'

  # this line vvv
  gem 'rexml', '~> 3.2', '>= 3.2.5'

  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end
```

### Add some tests for the model validations

```rb
it 'is valid with all attributes given' do
  character = Character.new(
    name: 'Bilbo',
    poem: 'Hello world',
    race: 'Hobbit',
    location: Location.new(
      location: 'The Shire'
    )
  )

  expect(character).to be_valid
end
```

```rb
# test a required field being nil
it 'is not valid without a name' do
  character = Character.new(
    name: nil,
    poem: 'Hello world',
    race: 'Hobbit',
    location: Location.new(
      location: 'The Shire'
    )
  )

  character.save

  # p character.errors.full_messages

  expect(character).to be_invalid
  expect(character.errors.full_messages[0]).to eq('Name can\'t be blank')
end
```

```rb
# test a non-required field being nil
it 'is valid without a race' do
  character = Character.new(
    name: 'Bilbo Baggins',
    poem: 'Hello world',
    race: nil,
    location: Location.new(
      location: 'The Shire'
    )
  )

  expect(character).to be_valid
end
```

### Refactor to use beforeEach

```rb
RSpec.describe Character, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  describe 'Validations' do

    before :each do
      @character = Character.new(
        name: 'Bilbo',
        poem: 'Hello world',
        race: 'Hobbit',
        location: Location.new(
          location: 'The Shire'
        )
      )
    end

    it 'is valid with all attributes given' do
      expect(@character).to be_valid
    end

    it 'is not valid without a name' do
      @character.name = nil
      @character.save

      # p character.errors.full_messages

      expect(@character).to be_invalid
      expect(@character.errors.full_messages[0]).to eq('Name can\'t be blank')
    end

    it 'is not valid without a poem' do
      @character.poem = nil
      @character.save

      # p character.errors.full_messages

      expect(@character).to be_invalid
      expect(@character.errors.full_messages[0]).to eq('Poem can\'t be blank')
    end

    it 'is valid without a race' do
      @character.race = nil

      expect(@character).to be_valid
    end

  end

end
```















### Add the `capybara-selenium` gem

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
  
  scenario 'display the Cars page' do 
    # visit /cars
    visit cars_path
  end

end
```

### Run the test command

```shell
% rspec

# more verbose output
% rspec -fd
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
  
  scenario 'display the Cars page' do 
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
scenario 'display the Cars page and see three cars on that page' do
  visit cars_path

  save_screenshot 'cars_page_test_2.png'

  # look for elements with the class 'car'
  expect(page).to have_css('.car')

  # look for elements with the class 'car' 3 times
  expect(page).to have_css('.car', count: 3)
end
```

### Add another scenario

```rb
scenario 'go to the home page, click a link for one of the cars, visit the info page' do
  visit cars_path

  save_screenshot 'cars_page_test_3.png'

  # click on the detail button (this won't work)
  # click_link 'Detail'

  # be more specific
  # first(:link, 'Detail').click

  # or this
  click_link('Detail', match: :first)

  # look for only one element with class 'car'
  expect(page).to have_css('.car', count: 1)

  save_screenshot 'cars_page_test_4.png'
end
```

### Form Example

```erb
<div class="search-form" id="search-form">
  <%= form_tag({controller: :cars, action: :index}, method: :get) do %>

    <div class="form-component">
      <%= label_tag(:make, 'Make') %>
      <%= select_tag(
        :make, 
        options_from_collection_for_select(Make.all, :id, :make), 
        include_blank: true
      ) %>
    </div>

    <div class="form-component">
      <%= label_tag(:model, 'Model') %>
      <%= select_tag(
        :model,
        options_from_collection_for_select(Model.all, :id, :model),
        include_blank: true
      ) %>
    </div>

    <div class="form-component">
      <%= label_tag(:search_term, 'Search Term') %>
      <%= text_field_tag(:search_term) %>
    </div>

    <div class="form-component">
      <%= submit_tag('Search!') %>
    </div>

  <% end %>
</div>
```

### Linking Example

```erb
<%= link_to 'Detail', car_path(car)  %>
<%= link_to('All Cars', cars_path) %>
```

```rb
def show
  @car = Car.find(params[:id])
end
```

### Simple Search Functionality

```rb
def index
  if params[:search_term].length > 0
    @cars = Car.joins(:model).where("model LIKE ?", "%#{params[:search_term]}%")
  else
    @cars = Car.all
  end
end
```
