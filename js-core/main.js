// Make a alert window
// The alert stops the render process of the DOM.
// alert("Hello world!");

// You like to output something to the console?
// Then use console.log
console.log('Hello console.')

// Let's start with funny types
// String, Number, Boolean, undefined, null, Array and Object
// You must not define the type of the variable
let a = 10

// Output the type of the variable with typeof
console.log('Type of vat a: ' + typeof a)

// a is now a number
// lets change it to a string

a = 'Hallo world'

// Now a is a string. Very nice or?
console.log('Type of vat a: ' + typeof a)

// If you don't assign a value to a variable then it will be a type of undefined.
// This can kill you if you have an array or object.
let b
console.log('Type of vat b: ' + typeof b)

// True/ False
let c = 1 // This will be true
let d = 0 // False
let e = 55 // True
let f = -99 // False

// Checks only value
console.log(c == true) // This wil be true

// Checks type and value. Same in PHP ;)
console.log(c === true) // This wil be false

// Want to have a read only variable then you should use the const
const h = 'Hello world'
// Now you can no more define a new value to h.
// h = 1 will not work

// Make a for loop
for (let i = 0; i < 10; i++) {
    console.log('For loop: ' + i)
}

// Make e while
let j = 0

while (j < 10) {
    console.log('While loop: ' + j)
    j++
}

// Using arrays
// Let's say it's the temp of our room for every hour
// More: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array
const k = [
    15,   // 0
    15.5, // 1
    14.5, // 2
    15.1, // 3
    16.3, // 4
    16.8, // 5
    17.2, // 6
    16.6, // 7
    18.2, // 8
    19.3, // 9
    20    // 10
]

let first = k[0] // Get the first item
console.log('First temp of our room is ' + first + '℃')

let last = k[k.length - 1] // Get the last item
// With .length you will get the size of a variable.
// For array and object it will count the num of keys
// For string the length of the string
console.log('Last temp of our room is ' + last + '℃')

// You can define breakpoints in tab Sources, but you can also define in the JS
// With debugger you trigger the breakpoint
// debugger
