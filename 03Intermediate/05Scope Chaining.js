var name = "Alan"

console.log("Line num 3");

function sayName() {
    var name = "Ace"
    console.log("Line num 7", name);
    sayNameTwo();
    function sayNameTwo() {
        var name = "AF"
        console.log("Line num 11", name);
    }
}

sayName();