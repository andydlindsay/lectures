# Outline

```bash
bin/rails g model Author
```

```rb
class CreateAuthors < ActiveRecord::Migration[7.1]
  def change
    create_table :authors do |t|
      t.string :full_name
      t.string :email

      t.timestamps
    end
  end
end
```

```rb
class Author < ApplicationRecord
  validates :full_name, presence: true
end
```

```bash
bin/rails db:migrate
```

```rb
# rails console
author = Author.new
author.save # false
author.errors.full_messages # ["Full name can't be blank"]
```

```rb
# seeds.rb
Author.find_or_create_by(
  full_name: 'Dr Seuss',
  email: 'dr@seuss.com'
)

Author.find_or_create_by(
  full_name: 'Robert Munsch',
  email: 'rob@munsch.ca'
)
```

```bash
bin/rails db:seed
```

```bash
bin/rails g model Book
```

```rb
class CreateBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :books do |t|
      t.string :title
      t.references :author, foreign_key: true

      t.timestamps
    end
  end
end
```

```rb
# seeds.rb
author_one = Author.find_or_create_by(
  full_name: 'Dr Seuss',
  email: 'dr@seuss.com'
)

author_two = Author.find_or_create_by(
  full_name: 'Robert Munsch',
  email: 'rob@munsch.ca'
)

Book.find_or_create_by(
  title: 'Hop on Pop',
  author: author_one
)

Book.find_or_create_by(
  title: 'Class Clown',
  author: author_two
)

Book.find_or_create_by(
  title: 'Fox in Socks',
  author: author_one
)
```

```rb
class Book < ApplicationRecord
  belongs_to :author
end
```

```bash
bin/rails db:migrate
bin/rails db:seed
```

```rb
# updated author model
class Author < ApplicationRecord
  validates :full_name, presence: true

  has_many :books
end
```
