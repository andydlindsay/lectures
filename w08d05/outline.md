## Outline

### Why Ruby/Rails week?
- more like the real world
- you get an existing codebase and have to make updates to it
- it might be unfamiliar
- you just need to know what is necessary to get the project done and not become a master of Ruby
- seek breadth not depth
- you will feel overwhelmed by the new language/environment

### LSD
* Logic, Syntax, Data
* The Logic and Data are still the same
* It's the syntax that's different

### Ruby Intro
- We recommend using RVM (Ruby Version Manager) as multiple versions are sometimes necessary
- Ruby is an idiomatic language
  - Using a language in the way that it is meant to be used to solve the problem
- Ruby was meant to be fun and easy to write/read
- Ruby is synchronous (so no need for callbacks/promises)
- Holding onto 10th most popular programming language in the world

### Ruby Basics
- Ruby files end in `.rb`
- Run your files with `$ ruby file.rb`
- Variables are `snake_case`

```bash
$ touch 01_variables.rb
$ ruby 01_variables.rb
```

## `01_variables.rb`

### Comments and Printing to Standard Out

```rb
# print something to the console
print "something" # no new line
puts "something else" # new line
p "also works" # returns the value printed

# put a blank line in the console
puts "I need space"
puts
puts "no problem"

# single line comment

=begin
multi-line
comment
=end
```

### Variables

```rb
# variables don't need to be declared (no const or let)
# and they don't need semicolons
name = 'Alice'

# Ruby is dynamically typed
name = 7
name = true

# nil is equivalent to JS null
# there is no undefined or null in Ruby
name = nil

# Constants in Ruby are capitalized
Name = 'Alice'
# Hungarian notation!
NAME = 'Alice'
```

### Casting Values

```rb
# we don't have == to just check value regardless of type
puts 2 == '2' # false

# === works the same as == for the most part
puts 2 === '2' # false

# casting values
num = "4"
puts num.to_i # 4
other_num = 5
puts other_num.to_s # "5"
```

### String Concatentation

```rb
# string concatenation
puts first_name + " " + last_name
# string interpolation
puts "#{first_name} #{last_name}"
# interpolation only works with double quotes
puts '#{first_name} #{last_name}'
```

## `02_conditionals.rb`

### Conditionals

```rb
# if..else and comparison
# > < >= <= == !=
if (num > 2)
  puts "larger than two"
else
  puts "must be smaller"
end

# we also have else if, not spelt right though
if (first_name == "John" && last_name == "Stamos")
  puts "great name"
elsif (first_name == "Ada" || last_name == "Lovelace")
  puts "also good"
else
  puts "name could be improved"
end

# unless inverts the condition
unless (first_name == "John")
  puts "choose a better name"
else
  puts "you chose well"
end

# reverse if!
hour = 7
puts "good evening" if hour > 5 # outputs string
sunny = false
puts "wear rain jacket" unless sunny # outputs string

# our good friend the switch... I mean case statement
last_name = "Chewie"
case last_name
  when "Stamos"
    puts "hello there"
    exit # === break
  when "Kenobi"
    puts "this is not the code you're looking for"
    exit
  else
    puts "you are seeing the default message"
end

# ternary
num = 7
puts (num < 10) ? "single digits" : "multiple digits"
```

## `03_loops.rb`

### Loops

```rb
# break
i = 0
loop do
  i += 1
  puts i

  # exit the loop
  break if i > 5 # prints 1 through 6
end

# while
i = 0
while i < 5 do # prints 1 through 5
  i += 1
  puts i
end

# until
i = 0
until i > 5 do # prints 1 through 6
  i += 1
  puts i
end

# for..in === for..of ¯\_(ツ)_/¯
names = ['Alice', 'Bob', 'Carol', 'David']
for name in names do
  puts "Hello #{name}!"
end

# each === forEach
names.each do |name|
  puts "Goodbye #{name}!"
end

# select === filter
list = [1, 2, 3, 4, 5]
list.select do |num|
  num >= 3
end

# ranges
(5..10).each do |num|
  puts num # prints 5 through 10
end

# times
10.times { puts "hello world" }
```

## `04_methods.rb`

### Methods
- Ruby uses implicit return, returning the last line of code in the method if there is no explicit `return`
- Methods are not first-class citizens in Ruby as they are in JS
- We cannot pass them around as callbacks (for instance)

- even mathematical operators (+, -, etc) are methods
- 2 + 3 is equivalent to add(2, 3) or add 2, 3 (infix operator)

- special methods end in ? or !
  - `?` methods return a boolean value (like isActive in JS)
  - `!` methods perform some kind of mutation
  - Hungarian notation again!

```rb
# writing our own methods
def say_hello name # starts with a definition
  puts "hello #{name}, nice to meet you"
end

# invoke with or without parens
say_hello "Bob"
say_hello("Bob")

# calling a method with too many/too few arguments will result in an error
say_hello("Bob", "Hoskins")

# methods in ruby have implicit return
def full_name(first_name, last_name)
  first_name + " " + last_name
end
puts full_name('Ada', 'Lovelace') # "Ada Lovelace"

# arguments are passed by value
def change_it(val)
  val = 5
end
num = 10
puts num # 10
change_it(num)
puts num # 10
```

## `05_hashes.rb`

### Hashes

```rb
# hashes
# associative array... a way of storing key/value pairs
user = {
  "username" => "johns",
  "password" => "1234",
  "logged_in" => false
}
puts user
# access properties with square brackets
puts user["logged_in"] # false

# symbols
# "a string that you can't change"
# perfect as keys for hashes
user = {
  :username => "adal",
  :password => "5678",
  :logged_in => true
}
puts user[:logged_in] # true

# and even better short-hand
user = {
  username: "bobh",
  password: "password",
  logged_in: true
}
puts user[:username] # "bobh"

# what about dynamic keys?
my_key = 'username'
user[my_key] # nil
# convert the string to a symbol
user[my_key.to_sym] # 'bobh'
```

## `06_lambdas.rb`

### Blocks and Lambdas

```rb
# blocks define a chunk of code to be executed
# can be do..end or {}
dogs = ["Odie", "Lassie", "Dioji"]

dogs.each do |dog|
  # inside a block
  puts dog
end

dogs.each { |dog|
  # also inside a block
  puts dog
}

# lambdas
# "named blocks"
do_thing = lambda { |dog| puts dog } # lambda keyword
say_something = -> { puts "I'm giving up on you" } # lambda literal

# use & to convert a lambda to a block
dogs.each &do_thing

# defining a method that takes a lambda
def my_method(&block)
  block.call # .call to invoke the block
end
my_method &say_something # w/o parens
my_method(&say_something) # w/ parens
```

## `07_classes.rb`

### Classes

* Declare a class in Ruby with the class keyword.

```Ruby
class Car
end
```

#### __Initialize__
* Initialize is a special method in classes that is called when a class object is created with .new
* Initialize methods are used to set the initial state of an object.

```Ruby
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end

my_car = Car.new("red", 2007, "matrix")
```

#### __Accesor && Readers__
* You can set default read and write methods for instance variables with accessor and readers.

```rb
class Car
 attr_accessor :color
 attr_reader :year
 attr_writer :model
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end

# equivalent to
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
 def color
   @color
 end
 def color=(value)
   @color = value
 end
 def year
   @year
 end
 def model=(value)
   @model = value
 end
end
```

## Bonus (time allowing)

### Imports

```rb
# load ruby code from another file
load "ruby2.rb"
```

### Gems

* [rubygems.org](https://rubygems.org/)
* `bundle init` creates a Gemfile, equivalent to `npm init -y`
* __Gemfile:__ a file that works with bundler to track and load a list of dependencies

```rb
# bundle init
# bundle add rainbow

# external packages are required; not loaded
require 'rainbow'

this = Rainbow('this').red
is = Rainbow('is').green
neat = Rainbow('neat').orange

puts this + " " + is + " " + neat
puts "#{this} #{is} #{neat}"
```

### Errors

```rb
# you can raise an exception (a form of error)
raise "whoa error"

=begin
Traceback (most recent call last):
ruby.rb:305:in `<main>': whoa error (RuntimeError)
=end
```

### String Methods

```rb
first_name = 'John'

puts first_name # "John"
puts first_name.size # 4
puts first_name.include?("Joh") # true
puts first_name.index("h") # 2
puts first_name.upcase # JOHN
puts first_name.downcase # john

ruby_creator = "Yukihiro Matsumoto"
puts ruby_creator.split(' ').class # array

# methods ending in ? return a boolean
puts ruby_creator.nil? # false
puts ruby_creator.start_with?("Yuki") # true

# methods ending in ! modify an object in place
puts ruby_creator # "Yukihiro Matsumoto"
ruby_creator.downcase
puts ruby_creator # "Yukihiro Matsumoto"
ruby_creator.downcase!
puts ruby_creator # "yukihiro matsumoto"
```
