# single line comment

=begin
multi-line
comment
=end

# print something to the console
print "something" # no new line
puts "something else" # new line
p "also works" # returns the value printed

# put a blank line in the console
puts

# no need for const or let
first_name = "John"
last_name = "Stamos"
bool = false

# constants must start with an uppercase letter
My_constant = "always the same value"
# usually constants with be all caps
MY_OTHER_CONSTANT = "never changing"
# trying to reassign a constant will result in a warning
# MY_OTHER_CONSTANT = "something else" # warning!

# casting values
num = "4"
puts num.to_i # 4
other_num = 5
puts other_num.to_s # "5"

puts

# string concatenation
puts first_name + " " + last_name
# string interpolation
puts "#{first_name} #{last_name}"
# interpolation only works with double quotes
puts '#{first_name} #{last_name}'

puts

# math operators
num = 2 * 3 # also + - / %
puts num # 6

puts

# if..else and comparison
# > < >= <= == !=
if (num > 2)
  puts "larger than two"
else
  puts "must be smaller"
end

puts

# we also have else if, not spelt right though
if (first_name == "John" && last_name == "Stamos")
  puts "great name"
elsif (first_name == "Ada" || last_name == "Lovelace")
  puts "also good"
else
  puts "name could be improved"
end

puts

# unless inverts the condition
unless (first_name == "John")
  puts "choose a better name"
else
  puts "you chose well"
end

puts

# reverse if!
hour = 7
puts "good evening" if hour > 5 # outputs string
sunny = false
puts "wear rain jacket" unless sunny # outputs string

puts

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

puts

# ternary
num = 7
puts (num < 10) ? "single digits" : "multiple digits"

puts 

# loops
i = 0
loop do
  i += 1
  puts i

  # exit the loop
  break if i > 5 # prints 1 through 6
end

puts

i = 0
while i < 5 # prints 1 through 5
  i += 1
  puts i
end

puts

i = 0
until i > 5 # prints 1 through 6
  i += 1
  puts i
end

puts

# for..in === for..of ¯\_(ツ)_/¯
names = ['Alice', 'Bob', 'Carol', 'David']
for name in names
  puts "Hello #{name}!"
end

puts

# each === forEach
names.each do |name|
  puts "Goodbye #{name}!"
end

puts

# ranges
(5..10).each do |num|
  puts num # prints 5 through 10
end

puts

# times
10.times { puts "hello world" }

puts

# return the class of an object
puts num.class # Integer
puts first_name.class # String
puts bool.class # FalseClass

puts

# string methods
puts first_name # "John"
puts first_name.size # 4
puts first_name.include?("Joh") # true
puts first_name.index("h") # 2
puts first_name.upcase # JOHN
puts first_name.downcase # john

puts

ruby_creator = "Yukihiro Matsumoto"
puts ruby_creator.split(' ').class # array

puts

# methods ending in ? return a boolean
puts ruby_creator.nil? # false
puts ruby_creator.start_with?("Yuki") # true

puts

# methods ending in ! modify an object in place
puts ruby_creator # "Yukihiro Matsumoto"
ruby_creator.downcase
puts ruby_creator # "Yukihiro Matsumoto"
ruby_creator.downcase!
puts ruby_creator # "yukihiro matsumoto"

puts

# writing our own methods
def say_hello name # starts with a definition
  puts "hello #{name}, nice to meet you"
end
say_hello "Bob"

# calling a method with too many/too few arguments will result in an error
# say_hello("Bob", "Hoskins")

puts

# methods in ruby have implicit return
def full_name(first_name, last_name)
  first_name + " " + last_name
end
puts full_name('Ada', 'Lovelace') # "Ada Lovelace"

puts

# arguments are passed by value
def change_it(val)
  val = 5
end
num = 10
puts num # 10
change_it(num)
puts num # 10

puts

# hashes
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

puts

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

puts

# lambdas
# "named blocks"
do_thing = lambda { |dog| puts dog } # lambda keyword
say_something = -> { puts "I'm giving up on you" } # lambda literal

# use & to convert a lambda to a block
dogs.each &do_thing

puts

# defining a method that takes a lambda
def my_method(&block)
  block.call # .call to invoke the block
end
my_method &say_something # w/o parens
my_method(&say_something) # w/ parens

puts

# ruby is synchronous
puts "before read"
puts File.read('ruby2.rb') # long running processes will block execution
puts "after read"

puts

# you can raise an exception (a form of error)
# raise "whoa error"
=begin
Traceback (most recent call last):
ruby.rb:305:in `<main>': whoa error (RuntimeError)
=end

# load ruby code from another file
load "ruby2.rb"
