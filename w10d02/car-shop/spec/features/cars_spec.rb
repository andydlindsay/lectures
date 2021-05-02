require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Cars", type: :feature, js: true do

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
  
  scenario 'display the Cars page' do |variable|
    # visit /cars
    # visit cars_path
    visit '/cars'

    # take a screenshot
    # save_screenshot

    # take a named screenshot so it saves over it
    save_screenshot 'cars_page.png'

    # page variable
    # puts page
    # puts page.methods
    # puts page.html

    expect(page).to have_text /all my cars!/i
  end

  scenario 'display the Cars page and see three cars on that page' do |variable|
    visit cars_path
  end

end
