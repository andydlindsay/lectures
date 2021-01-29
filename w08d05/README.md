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
