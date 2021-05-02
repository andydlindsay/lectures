# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
