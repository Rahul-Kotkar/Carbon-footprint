const calculateButton = document.getElementById("calculate");
const resultsDiv = document.getElementById("results");
const nameInput = document.getElementById("name");

calculateButton.addEventListener("click", function() {
    const name = nameInput.value;
    const diet = parseFloat(document.getElementById("diet").value);
    const homeEnergy = parseFloat(document.getElementById("home-energy").value);
    const age = parseFloat(document.getElementById("age").value);
    const occupation = parseFloat(document.getElementById("occupation").value);
    const dieselCar = parseFloat(document.getElementById("diesel-car").value);
    const petrolCar = parseFloat(document.getElementById("petrol-car").value);
    const petrolBike = parseFloat(document.getElementById("petrol-bike").value);
    const evVehicle = parseFloat(document.getElementById("ev-vehicle").value);
    const cycle = parseFloat(document.getElementById("cycle").value);
    const publicVehicle = parseFloat(document.getElementById("public-vehicle").value);
    const microwave = parseFloat(document.getElementById("microwave").value);
    const washingMachine = parseFloat(document.getElementById("washing-machine").value);
    const standardLightBulb = parseFloat(document.getElementById("standard-light-bulb").value);
    
    const totalCarbonEmissions =  + diet + homeEnergy + age + occupation + dieselCar + petrolCar + petrolBike + evVehicle + cycle + publicVehicle + microwave + washingMachine + standardLightBulb;
    const totalCarbonEmissionsRounded = totalCarbonEmissions.toFixed(2);
    const carbonEmissionsDescription = `Your estimated carbon footprint is ${totalCarbonEmissionsRounded} grams of CO2 emissions per day.`;
    const carbonFootprintResults = `
        <h2>Hey! <span> ${name} </span> Your Carbon Footprint</h2>
        <p>${carbonEmissionsDescription}</p>
        <p>This is how your carbon footprint breaks down:</p>
        <ul>
            <li><strong>Diet:</strong> ${diet} grams of CO2 emissions per day</li>
            <li><strong>Home Energy:</strong> ${homeEnergy} grams of CO2 emissions per day</li>
            <li><strong>Age:</strong> ${age} grams of CO2 emissions per day</li>
            <li><strong>Occupation:</strong> ${occupation} grams of CO2 emissions per day</li>
            <li><strong>Diesel Car:</strong> ${dieselCar} grams of CO2 emissions per day</li>
            <li><strong>Petrol Car:</strong> ${petrolCar} grams of CO2 emissions per day</li>
            <li><strong>Petrol Bike:</strong> ${petrolBike} grams of CO2 emissions per day</li>
            <li><strong>EV Vehicle:</strong> ${evVehicle} grams of CO2 emissions per day</li>
            <li><strong>Cycle:</strong> ${cycle} grams of CO2 emissions per day</li>
            <li><strong>Public Vehicle:</strong> ${publicVehicle} grams of CO2 emissions per day</li>
            <li><strong>Microwave:</strong> ${microwave} grams of CO2 emissions per day</li>
            <li><strong>Washing Machine:</strong> ${washingMachine} grams of CO2 emissions per day</li>
            <li><strong>Standard Light Bulb:</strong> ${standardLightBulb} grams of CO2 emissions per day</li>
        </ul>
    `;
    results.innerHTML = carbonFootprintResults;
});
