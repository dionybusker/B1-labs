// opdracht 4

var linebreak = "<br>"

function calc() {
    var question = prompt("Hoeveel tafels wil je berekenen?"); // maximum aantal tafels
    if (parseInt(question) >= 1 && parseInt(question) <= 10) {
        for (i = 1; i <= question; i++) { // aantal verschillende tafels
            for (var j = 1; j <= 10; j++){ // de hele tafel wordt helemaal uitgeschreven van 1 t/m 10
            document.write(j + " × " + i + " = " + (i*j) + linebreak)
            }
            document.write(linebreak)
        }
    } else {
        alert("Dit is geen correcte invoer, probeer opnieuw.");
        calc();
    }
}

calc();