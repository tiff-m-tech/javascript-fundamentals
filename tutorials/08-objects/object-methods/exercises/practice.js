/**** OBJECT METHODS & CONTEXT: PRACTICE SOLUTION ****/

/*
    Practice attaching operational behaviors to objects and 
    leveraging 'this' context variables to evaluate metrics.
*/

/** EXERCISE 1: ATTACHING THE CODES **/

function transmitMessage() {
	console.log("Broadcasting data packets to Tycho Station...");
}

const communicationArray = {
	dishAlignmentDeg: 42.1,
	frequencyMhz: 1420,
};

/*
    TODO: Attach the 'transmitMessage' function to the 'communicationArray' 
    object using a new key named 'broadcast'. 
    Then, execute the method from the object.
*/

communicationArray.broadcast = transmitMessage;
// console.log(communicationArray)

communicationArray.broadcast()

/** EXERCISE 2: CORE HEALTH CALCULATOR **/
    // TODO: Complete the method inline.
        /* 
        Calculate the structural margin remaining before meltdown by subtracting 
        this object's current temperature from its maximum safe temperature.
        Return a template literal reading: 
        "The [coreName] has [margin]°C remaining before structural failure."
        */

const engineeringDriveCore = {
<<<<<<< HEAD
    coreName: "Epstein Drive Core Mk4",
    currentTemperature: 2850,
    maxSafeTemperature: 3000,
    checkThermalSafety: function () {
        let margin = this.maxSafeTemperature - this.currentTemperature
        return `The ${this.coreName} has ${margin}°C remaining before structural failure.`
    }
=======
	coreName: "Epstein Drive Core Mk4",
	currentTemperature: 2850,
	maxSafeTemperature: 3000,

	// TODO: Complete the method inline.
	checkThermalSafety: function () {
		/* 
            Calculate the structural margin remaining before meltdown by subtracting 
            this object's current temperature from its maximum safe temperature.
            Return a template literal reading: 
            "The [coreName] has [margin]°C remaining before structural failure."
        */
	},
>>>>>>> 6868a18a3670fc834beef2d1e89b6dd7fe301914
};

// TODO: Test the method by calling it on the object.
console.log(engineeringDriveCore.checkThermalSafety());

/** EXERCISE 3: DYNAMIC REFUEL MODULATOR **/
    // TODO: Complete the refueling method below.
    /*
    Check if adding the 'amount' to 'this.currentReserveTons' exceeds 'this.maxCapacityTons'.
    - If it does: log an alert and do not add the fuel.
    - If it fits: add the amount to 'this.currentReserveTons' and log the success.
    Use template literals for both logs.
    */

const fuelPod = {
<<<<<<< HEAD
    podIdentifier: "Pod Gamma",
    currentReserveTons: 120,
    maxCapacityTons: 500,
    addFuel: function (amount) {
        if (amount + this.currentReserveTons > this.maxCapacityTons) {
            console.log(`ALERT: DO NOT ADD FULE, adding ${amount} would exceed the max capacity of the tank.`)
        } else {
            console.log(`SUCCESS: total amount of fuel in tank is ${amount + this.currentReserveTons}`)
        }

    }
=======
	podIdentifier: "Pod Gamma",
	currentReserveTons: 120,
	maxCapacityTons: 500,

	// TODO: Complete the refueling method below.
	addFuel: function (amount) {
		/*
            Check if adding the 'amount' to 'this.currentReserveTons' exceeds 'this.maxCapacityTons'.
            - If it does: log an alert and do not add the fuel.
            - If it fits: add the amount to 'this.currentReserveTons' and log the success.
            Use template literals for both logs.
        */
	},
>>>>>>> 6868a18a3670fc834beef2d1e89b6dd7fe301914
};

// TODO: Test the method with a value that should fail, then again with one that should succeed.

console.log("Too much fuel test----------------------------")
fuelPod.addFuel(400)
console.log("Can fit fuel test------------------------------")
fuelPod.addFuel(120)