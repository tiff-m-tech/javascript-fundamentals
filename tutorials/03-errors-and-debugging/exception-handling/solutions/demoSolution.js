/**** EXCEPTION HANDLING: SOLUTION ****/

/*
    Up until now, your code has executed in a perfect environment. However, in software 
    development, unexpected issues occur—such as trying to use a system tool that doesn't 
    exist or evaluating bad data. When JavaScript encounters an unhandled problem, it throws 
    a fatal error, instantly crashes the program, and refuses to run any remaining code 
    below it.

    To prevent these total program shutdowns, you can build a structural safety net using 
    three connected code blocks: try, catch, and finally:
        - try (The Test Chamber): You wrap the code you want to test inside this block. 
        JavaScript will attempt to execute it line-by-line.
        - catch (The Backup Net): If anything breaks inside the try block, JavaScript 
        immediately stops execution there and jumps straight down into the catch block. 
        This block receives an Error Object containing details about what went wrong, 
        allowing you to handle the error gracefully without crashing the system.
        - finally (The Guarantee): This optional block runs at the very end, no matter what
         happened. Whether the code ran perfectly or completely broke, the finally block 
         always executes its instructions.
*/

/** EXAMPLE 1 - DEFENDING AGAINST A FATAL ACCIDENT **/

// Let's create a simulated environment switch
let isBackupGeneratorOnline = false;

try {
    console.log("Entering System Check...");
    
    // INTENTIONAL ERROR: We are trying to print a variable that was never declared.
    // Normally, this unhandled ReferenceError would immediately crash the whole script!
    console.log(isCargoBayPressurized);
    
    console.log("This line will never run because the line above broke!");

} catch (errorObj) {
    // The engine automatically captures the crash details in the 'errorObj' variable
    console.log("⚠️ CRITICAL FAULT DETECTED: Sensors offline.");
    console.log(`Error Details: ${errorObj.message}`);
    
} finally {
    // This code executes regardless of success or failure
    console.log("System Check Complete. Closing evaluation matrix.");
}

// Because our try/catch caught the error, the program stays alive!
console.log("\n🚀 Success! The script did not crash and is still running.");
