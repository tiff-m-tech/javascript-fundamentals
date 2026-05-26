const input = require("readline-sync");

/**** DEBUGGING SYNTAX & RUNTIME ERRORS: PRACTICE 2 ****/

/*
    MISSION: PRE-FLIGHT DIAGNOSTICS
    
    This program contains several errors. Some will prevent the code from 
    even starting (syntax), while others will "crash the ship" only after 
    the program is running (runtime).
    
    Task: Fix the errors so the mission can proceed to launch.
*/

// --- 1. INITIALIZATION ---

console.log("--- INITIALIZING MISSION CONTROL ---");

/* 
    TODO: Un-comment the line below and run the program to see the error message,
    then fix the code and re-run to verify.
*/
let pilotName = input.question("Enter Pilot Name: ");

// --- 2. ENGINE STATUS CHECK ---

let engineStatus = "Off";
let checkEngines = input.question("Perform engine diagnostic? (Y/N): ");

/* 
    TODO: Un-comment the if/else statement below and run the program to see the error message,
    then fix the code and re-run to verify.
*/
if (checkEngines === "Y") {
    let engineHealth = 100;
    console.log(`Engine Health at ${engineHealth}%`);
    engineStatus = "Ready";
} else {
    console.log("Skipping engine diagnostic...");
}

// --- 3. CARGO WEIGHT CALCULATION ---

console.log("\n--- CARGO BAY CHECK ---");

/* 
    TODO: Un-comment the line below and run the program to see the error message,
    then fix the code and re-run to verify.
*/
let crateCount = input.questionInt("How many crates are being loaded? ");

/* 
    TODO: Un-comment the three lines of code below and run the program to see the error message,
    then fix the code and re-run to verify.
*/
let weightPerCrate = 50;
let totalWeight = crateCount * weightPerCrate;
console.log(`Total Cargo Weight: ${totalWeight}kg`);

// --- 4. FINAL LAUNCH LOGIC ---

console.log("\n--- FINAL STATUS ---");

/* 
    TODO: Un-comment the if/else statement below and run the program to see the error message,
    then fix the code and re-run to verify.
*/
if (engineStatus === "Ready" && totalWeight < 1000) {
    console.log("All systems GO. Launching " + pilotName + "into orbit!");
} else {
    console.log("Launch ABORTED. Check engine status or cargo weight.");
}