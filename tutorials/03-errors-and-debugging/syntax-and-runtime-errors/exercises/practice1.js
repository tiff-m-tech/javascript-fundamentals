/**** DEBUGGING SYNTAX & RUNTIME ERRORS: PRACTICE 1 ****/

/*
    Fix the errors. Some will be caught by your editor (Syntax), 
    and some will only show up when you run the code (Runtime).
*/

/** EXERCISE 1: THE SYNTAX TRAP **/

let fuel = 90;

/*
    TODO: Un-comment the line below and run the program to see the error message,
    then fix the code and re-run to verify.
*/
console.log(`Fuel level is "  fuel + '%`);

/** EXERCISE 2: THE RUNTIME CRASH **/

/* 
    TODO: Un-comment the line below and run the program to see the error message,
    then fix the code and re-run to verify. 
*/
let navCoordinate = "Sector-7G";

console.log(navCoordinate);

/** EXERCISE 3: THE TYPO BLUNDER **/

let oxygen = 100;

/* 
    TODO: Un-comment the line below and run the program to see the error message,
    then fix the code and re-run to verify. 
*/
console.log(oxygen.toString());

// HINT: toString is not a property — it's a method! Do a little research
// on the difference if you need to.
