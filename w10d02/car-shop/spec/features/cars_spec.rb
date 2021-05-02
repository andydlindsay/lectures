require 'rails_helper'
require 'support/database_cleaner'

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
