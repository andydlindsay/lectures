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

### Generate some fake data

```shell
# create a model/migration
rails g model Make make:string
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
