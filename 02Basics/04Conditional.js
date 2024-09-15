var temperature;

temperature = 27;

if (temperature < 0) {
    console.log("Its Freezing, Stay Inside");
} else if (temperature < 15) {
    console.log("Its Cold, Better to Stay Inside");
} else if (temperature < 30) {
    console.log("Go Outside");
} else if (temperature < 45) {
    console.log("Its Hot, Better to Stay Inside");
} else if (temperature > 45) {
    console.log("Its Very Hot, Stay Inside");
}

