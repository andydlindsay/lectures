require 'rails_helper'

RSpec.feature "Cars", type: :feature do
  
  scenario 'display the Cars page' do |variable|
    # visit /cars
    visit cars_path


  end

end
