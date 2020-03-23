# W8D4 Intro to Ruby

### Why ruby and rails?

Ruby week  => job sym week 
in most jobs you inherit a large code base   
and have to add new features

- What is the minimum depth you have to go into ruby/rails to make the most impact.  
- how do you become okay at ruby in order to finish the contract  

languages are largely transferable, if you know the one you know many  

You will feel overwhelmed with the new code base and language. This week is to learn how to deal with that.

### __idiomatic ruby__

* using ruby the way it's meant to be used, agreed upon best practices

If doing something feels harder than it should, look for a more idiomatic way.   
It is usually shorter code and more human readable.   
research what the best practices are.   

### Interactive Ruby

Typing __irb__ into your terminal will start the interactive ruby command line tool.  
This allows you to write ruby code in your terminal.  

irb always shows the result/return of the expressions we run.  

### Minimalist

Ruby is a minimalist language you can remove extra syntax/noise in a lot of cases.

you don't need  
 - semicolon  
 - brackets  
 - return  

### Ecosystem

__gems__

rubygems.org  
RubyGems is a package manager for ruby libraries and programs called gems. Similar to node packages and NPM.

```
$ gem install gem_name
```
__gemspec:__ file defines the gem, like a readme with info on author, version summary...  for gems

__Gemfile:__ a file that works with bundler to track and load a list of dependencies.
for ruby projects.

```
$ bundle init
$ bundle install
```
will install all of a projects dependencies. 

### Syntax

You declare a class in Ruby with the class keyword.

```Ruby
class Car
end
```

__Initialize__
Initialize is a special method in classes that is called when a class object is created with .new
Initialize methods are used to set the initial state of an object.

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

__Accesor && Readers__

You can set default read and write methods for instance variables with accessor and readers.

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
