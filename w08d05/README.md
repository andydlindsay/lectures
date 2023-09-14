# W08D05 - Intro to Ruby

### To Do
* [ ] Ruby Intro
* [ ] Variables
* [ ] Conditionals
* [ ] Loops
* [ ] Methods
* [ ] Hashes
* [ ] Blocks and Lambdas
* [ ] Classes

### Comments and Printing to Standard Out

```rb
# single line comment

=begin
multi-line
comment
=end
```

```rb
# print something to the console
print "something" # no new line
puts "something else" # new line
p "also works" # returns the value printed
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

# single line if statement
hour = 7
puts "good evening" if hour > 5 # outputs string

# also works with unless
sunny = false
puts "wear rain jacket" unless sunny # outputs string

# ternary
num = 7
puts num < 10 ? "single digits" : "multiple digits"
```

### Loops

```rb
# loop
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
names = ['Alice', 'Bob', 'Carol', 'Dean']
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

### Methods
- Ruby uses implicit return, returning the last line of code in the method if there is no explicit `return`
- Methods are not first-class citizens in Ruby as they are in JS (eg. we cannot pass them around as callbacks)
- Special methods end in `?` or `!`
  - `?` methods return a boolean value
  - `!` methods perform some kind of mutation

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

### Hashes
* Hashes are collections of key/value pairs in Ruby (similar to objects in JS)

```rb
# hash creation
user = {
  "username" => "johns",
  "password" => "1234",
  "logged_in" => false
}
puts user
# access properties with square brackets
puts user["logged_in"] # false

# symbols are often used as keys for hashes
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

### Blocks and Procs
* Blocks define a chuck of code to be executed
* They can be defined with do..end or {}

```rb
dogs = ["Odie", "Lassie", "Dioji"]

dogs.each do |dog|
  # inside a block
  puts dog
end

dogs.each { |dog|
  # also inside a block
  puts dog
}
```

* Procs are blocks stored in memory
* This functionality is similar to how callbacks work in JS

```rb
# proc creation
do_thing = Proc.new do |dog| 
  puts dog
end

# use & to convert a proc to a block
dogs.each &do_thing

# defining a method that takes a proc
def my_method(&block)
  block.call # .call to invoke the block
end

# methods can also accept blocks "invisibly" and call them using the `yield` keyword
def my_method
  yield # invoke the block
end

# invoke the method and pass the stored proc
my_method &say_something # w/o parens
my_method(&say_something) # w/ parens
```

### Classes
* You declare a class in Ruby with the class keyword.

```Ruby
class Car
end
```

#### Initialize
* `initialize` is a special method in classes that is called when a class object is created with .new
* `initialize` methods are used to set the initial state of an object.

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

#### Accesor && Readers
* You can set default read and write methods for instance variables with accessor and readers.

```Ruby
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
```

Same as

```Ruby
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
