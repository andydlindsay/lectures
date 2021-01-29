def get_name
  puts "What is your name?"
  @name = gets.chomp
end

def get_phone
  puts "What is your phone number?"
  @phone = gets.chomp
end

get_name
get_phone

puts

puts @name
puts @phone
