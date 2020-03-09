# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
