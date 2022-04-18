// pilot & co-pilot: string
// fuel levell & cargo mass: numbers
// validInput(): 



window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       response.json().then(function(json) {
          let missionTarget = Math.floor(Math.random() * json.length);
          console.log(json[missionTarget].name);
          document.getElementById("missionTarget").innerHTML = `
          <h2>Mission Destination</h2>
          <ol>
             <li>Name: ${json[missionTarget].name}</li>
             <li>Diameter: ${json[missionTarget].diameter}</li>
             <li>Star: ${json[missionTarget].star}</li>
             <li>Distance from Earth: ${json[missionTarget].distance}</li>
             <li>Number of Moons: ${json[missionTarget].moons}</li>
          </ol>
          <img src="${json[missionTarget].image}">
          `;
       });
    });

    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelLevelInput.value;
        let cargoLevelInput = document.querySelector("input[name=cargoLevel]");
        let cargoLevel = cargoLevelInput.value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });

});


// let listedPlanets;
// // Set listedPlanetsResponse equal to the value returned by calling myFetch()
// let listedPlanetsResponse;
// listedPlanetsResponse.then(function (result) {
//     listedPlanets = result;
//     console.log(listedPlanets);
// }).then(function () {
//     console.log(listedPlanets);
//     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
// })


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>""
                     <li>Distance from Earth: </li>done
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    // check for empty string
    if (testInput === '') {
        return "Empty"
    }
    if (isNaN(testInput)) {
        return "Not A Number"
    }
    if (!isNaN(testInput)) {
        return "Is A Number"

    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    // DO the same syntax for pilot, copilot and cargoLevel

    // Add validation for empty values and incorrect values

    if (validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty") {
        alert("Please enter all information");
        // stop the form submission

    }

    else if ((validateInput(pilot)) === "Is A Number" ||
        validateInput(copilot) === "Is A Number") {
        alert("Please enter a valid name for Pilot and Co-Pilot")
        // stop the form submission
    }
    else if ((validateInput(fuelLevel) === "Not A Number" ||
        validateInput(cargoLevel) === "Not A Number")) {
        alert("Please enter a valid number for fuelLevel and cargoMass");
        // stop the form submission

    } else {


        let launchStatus = document.getElementById("launchStatus");
        let faultyItems = document.getElementById("faultyItems")
        //  let faultyItems = document.querySelector("[id='faultyItems']")
              
        pilotStatus.innerHTML = `Pilot ${pilot}, Ready`
        copilotStatus.innerHTML = `Co-Pilot ${copilot}, Ready`

        if (fuelLevel < 10000 && cargoLevel <= 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level too low for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
        }

        else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass too high for launch"
        }

        else if (fuelLevel < 10000 && cargoLevel > 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass too high for launch"
            fuelStatus.innerHTML = "Fuel level too low for launch"
        }
        else {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}