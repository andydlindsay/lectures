* How is Ruby different to JS & Node?
  * Conventions
  * Paradigms
  * Usage In The Wild
  * Concurrency Model
  * Inheritance Model
* Similarities between the two
* Blocks in Ruby
* Debugging Tips
  * Using raise with .inspect
  
## Ruby vs JS
-  

## Why Ruby/Rails week?
- more like the real world
- you get an existing codebase and have to make updates to it
- it might be unfamiliar
- you just need to know what is necessary to get the project done and not become a master of Ruby
- seek breadth not depth
- you will feel overwhelmed by the new language/environment

## Ruby Basics
- Ruby files end in `.rb`
- Run your files with `$ ruby file.rb`
- We recommend using RVM (Ruby Version Manager) as multiple versions are sometimes necessary
- Ruby is an idiomatic language
  - Using a language in the way that it is meant to be used to solve the problem
- We have `irb` in the terminal to open the REPL for Ruby
- Variables do not need to be declared

```rb
name = 'Andy'
```

- Ruby is dynamically typed meaning that the variable data type is inferred during usage
- Constants in Ruby are capitalized

```rb
Name = 'Andy'
# Hungarian notation!
NAME = 'Andy'
```

- All data in Ruby is represented as an object
  - boolean, symbol, number, array, string, hash

- The only thing in Ruby that isn't an object is a method
- Function vs method
- Calling a method with the incorrect number of arguments (more OR less) will result in an error being thrown
- Ruby uses implicit return, returning the last line of code in the method if there is no explicit `return`

```rb
def my_method (arg1, arg2)
  if (arg1)
    return 'hello'
  end
  arg1 + arg2
end

puts my_method 5, 10
```

- methods are not first-class citizens in Ruby as they are in JS
- we cannot pass them around as callbacks (for instance)
- Ruby is synchronous (so no need for callbacks/promises)

- don't need semicolons or brackets
- special methods end in ? or !
  - `?` methods return a boolean value (like isActive in JS)
  - `!` methods perform some kind of mutation
  - Hungarian notation again!

- even mathematical operators (+, -, etc) are methods
- 2 + 3 is equivalent to add(2, 3) or add 2, 3 (infix operator)

- nil is equivalent to JS null
- there is no undefined or null in Ruby
- can use `.nil?` to check if an object is nil

- 
