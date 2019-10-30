// // opdracht 3

var linebreak = "<br>"

function nameAge() {
    var naam = prompt("Wat is je naam?" + "\n" + "Ben je klaar, vul dan 'stop' in.");
    if (naam == "stop") {
        return false;
    }
    var leeftijd = prompt("Wat is je leeftijd?" + "\n" + "Ben je klaar, vul dan 'stop' in.");
    if (leeftijd == "stop") {
        return false;
    }
    document.write("Hallo " + naam + ", je leeftijd is " + leeftijd + " jaar." + linebreak);
    nameAge();
}

nameAge();