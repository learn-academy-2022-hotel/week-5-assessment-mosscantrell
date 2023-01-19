# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# create a method named contains_letter that takes in an array of words, as well as a single letter, and returns an array of the words that contain that letter
# input: an array of words, as well as a single letter
# output: an array of the words that contain the given letter
# use .include?() alongside .select() to determine which words contain the letter, and then return only those words

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def contains_letter(array, letter)
    array.select do |value|
        value.include?(letter)
    end
end
p contains_letter(beverages_array, letter_o)
# output: ["coffee", "soda water"]
p contains_letter(beverages_array, letter_t)
# output: ["tea", "water", "soda water"]


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# create a method that takes in a hash and returns an array with all hash values at their own index, in alphabetical order
# input: hash
# output: array containing all hash values at their own index, in alphabetical order
# use the .values method to access the values within the hash
# then, use .flatten to nullify any nested arrays and have the output display as a single array
# finally use .sort() to arrange the states in the array in alphabetical order
# chain the last three methods together in one line for concise and clean code

def abc_states_array(hash)
    hash.values.flatten.sort
end
p abc_states_array(us_states)
# output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# note: this one was a bit tricky, but not too bad once I learned the .flatten method! I found some information on that through various sites, including this one: https://www.freecodecamp.org/news/common-array-methods-in-ruby/


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# create a class called Bike, initialized with a model, wheels count, and current speed.
# then create a method that returns a sentence with the above bike data
# use string interpolation (#{}) to include the initialized data dynamically in the sentence rather than hardcoding it immediately
# input: relevent information for the initialized values
# expected output: 'The Trek bike has 2 wheels and is going 0 mph.'

# class Bike
#     def initialize(model, wheels, current_speed)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end

#     def bike_info
#         "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
#     end
# end
# my_bike = Bike.new('Trek', '2', '0')
# p my_bike.bike_info
# output: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# create a method that will increase the mph of the bike depending on the number called, and a method that will decrease it no lower than zero
# input: a number
# output: the updated mph based on addition or subtraction of the given number, not going lower than zero
# use '+=' in the pedal_faster method so that the number will continue to update rather than resetting to zero every time
# use '-=' in the brake method so that the number will continue to update
# write a conditional statement in the brake method that ensures the number cannot dip below zero

class Bike
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(speed)
        @current_speed += speed
    end

    def brake(speed)
        if @current_speed < speed
            0
        else
            @current_speed -= speed
        end
    end
end
my_bike = Bike.new('Trek', '2', '0')
p my_bike.pedal_faster(10)
# output: 10
p my_bike.pedal_faster(18)
# output: 28
p my_bike.brake(5)
# output: 23
p my_bike.brake(25)
# output: 0
