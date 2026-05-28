/**** HELPER FUNCTIONS: PRACTICE SOLUTION ****/

/*
    Practice refactoring code and delegating tasks to dedicated 
    helper functions to clean up ship systems.
*/

/** EXERCISE 1: THE CARGO DISTRIBUTOR **/

// TODO: Create a helper function named 'calculateMassInKg'. It should take
// a parameter 'metricTons' and return that value multiplied by 1000.

// TODO: Complete the main function below. Use your 'calculateMassInKg' helper
// inside the loop to calculate each pod's weight in kilograms.

let cargoMass = [5, 12, 3.5];

function calculateMassInKg(metricTons) {
	return metricTons * 1000;
}

// console.log(calculateMassInKg(5))

function processLogisticsManifest(cargoPodsArray) { 

	console.log("--- Processing Logistics Manifest ---"); 
	
	for (let i = 0; i < cargoPodsArray.length; i++) { 
		let massInKg = calculateMassInKg(cargoPodsArray[i])

		console.log(`Pod #${i + 1}: ${massInKg} kg`); 
	} 
}

// TODO: Call your main function and test it with the cargoMass array

processLogisticsManifest(cargoMass)


/** EXERCISE 2: COMMUNICATION SCRUBBER **/

// TODO: Create a helper function named 'sanitizeInput'. It should take a string
// parameter 'text', remove leading/trailing spaces, and convert it to lowercase.

function sanitizeInput(text) {
	let trimmedText = text.trim()
	console.log(trimmedText)

	let toLowerText = trimmedText.toLowerCase()
	console.log(toLowerText)

	return toLowerText
}

sanitizeInput("  Sample Text  ")

// TODO: Complete the main function below. Use your 'sanitizeInput' helper to 
// clean the user's transmission command before checking it.
let command = "  ABORT LAUNCH   ";
let command2 = " Nothing To See Here"

function processIncomingTransmission(rawCommand) {
	let cleanCommand = sanitizeInput(rawCommand);
	console.log(cleanCommand)

	if (cleanCommand === "abort launch") {
		console.log("🚨 EMERGENCY TRANSMISSION VALIDATED: Halting launch sequences.");
	} else {
		console.log("Transmission processed. Command unrecognized.");
	}
}

// TODO: Call the main function and test it with the command above.

processIncomingTransmission(command)
processIncomingTransmission(command2)