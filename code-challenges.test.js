// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// RED

describe("codeMaker", () => {
    it("takes in a string and returns that string codified with numbers and letters", () => {
        expect(codeMaker(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeMaker(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeMaker(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.

// GREEN
// create a function takes in a string, and codifies that string following specific parameters. a = 4, e = 3, i = 1, o = 0.
// input: a string of letters
// output: the same string with a, e, i, and o changed to 4, 3, 1, and 0 respectively
// use .replaceAll() to specify which letters are changing to what and to change each instance of that letter, chaining as many times as needed to achieve the result

const codeMaker = (string) => {
    let code = string.replaceAll('a', '4').replaceAll('e', '3').replaceAll('i', '1').replaceAll('o', '0').replaceAll('A', '4').replaceAll('E', '3').replaceAll('I', '1').replaceAll('O', '0')
    return code
}
console.log(codeMaker(secretCodeWord1))
// output: L4ck4d41s1c4l
console.log(codeMaker(secretCodeWord2))
// output: G0bbl3dyg00k
console.log(codeMaker(secretCodeWord3))
// output: 3cc3ntr1c

// notes: 
// While the above code works technically, it is also super clunky and repetitive. In a potential refactor, I would love to clean this up. However, after researching, most opinions I have seen share the sentiment that it is fine to chain code so long as it is working and consistent. I will do further research to hopefully find a way to replace values more efficiently!
// much of my research and insight came from this resource: https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// RED

describe("containsLetter", () => {
    it("takes in an array of words and a letter, and returns an array of the provided words that contain the provided letter", () => {
        expect(containsLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(containsLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

// GREEN
// create a function that takes in an array of words, as well as a single letter, and returns a new array with the words containing the given letter
// input: an array of words and one letter
// output: a new array of the words that contain the given letter
// first, filter over the given array so that a subset of that array is returned
// use .includes() to search for the given letter within the array, and make this the condition the filter needs to meet to stop iterating
// also, use .toUpperCase() to account for instances of the provided letter that are capitalized

const containsLetter = (array, letter) => {
    let newArr = array.filter(value => {
        return value.toUpperCase().includes(letter.toUpperCase())
    })
    return newArr
}
console.log(containsLetter(fruitArray, letterA))
// output: [ 'Mango', 'Apricot', 'Peach' ]
console.log(containsLetter(fruitArray, letterE))
// output: [ 'Cherry', 'Blueberry', 'Peach' ]

// notes: 
// The biggest struggle I had with this code was getting it to run without an error. My terminal was showing that I was getting the right output, but I continued to receive the error that 'array.filter' was not a function. Thanks to a classmate looking over my code, I realized I had forgotten to place fruitArray in my test.


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// RED
describe("fullHouse", () => {
    it("takes in an array of numbers and determines if it is a full house (one pair, one three of a kind)", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})


// b) Create the function that makes the test pass.

// GREEN
// create a function that takes in an array of numbers and determines whether those numbers make a full house (one pair, one three of a kind)
// input: an array of numbers
// output: boolean value
// first, sort the array from least to greatest using .sort()
// then, using square bracket notation on the sorted array (orderedArray[0]), determine whether the values match on index zero and one, AND that they match on two, three, and four

const fullHouse = (array) => {
    let orderedArray = array.sort((a, b) => a - b)
    if (orderedArray[0] === orderedArray[1] && orderedArray[2] === orderedArray[3] && orderedArray[3] === orderedArray[4]) {
        return true
    } else {
        return false
    }
}
console.log(fullHouse(hand1))
// output: true
console.log(fullHouse(hand2))
// output: false
console.log(fullHouse(hand3))
// output: false
console.log(fullHouse(hand4))
// output: true

// Note: I did some research on this one before hand, but ultimately the methods I found online seemed far more involved than what I was looking to achieve. Doing it my way, I can encapsulate everything in one function without having to jump through hoops or go back and forth to determine whether the array values match. Sorting them from greatest to least would also work, you would simply have to flip your if statement to have indexes 0, 1 and 2 matching, as well as 3 and 4.