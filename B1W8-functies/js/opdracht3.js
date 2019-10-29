// opdracht 3

// var naam = prompt("Wat is je naam?");
// var leeftijd = prompt("Wat is je leeftijd?");

function name(naam) {
    var naam = prompt("Wat is je naam? Ben je klaar, vul dan 'stop' in.");
    // if (naam != "stop") {
    //     return naam;
    // } else {
    //     prompt("Wat is je naam?");
    // }
    return naam;
}

function age(leeftijd) {
    var leeftijd = prompt("Wat is je leeftijd? Ben je klaar, vul dan 'stop' in.");
    // if (leeftijd != "stop") {
    //     return leeftijd;
    // } else {
    //     prompt("Wat is je leeftijd?");
    // }
    return leeftijd;
}

// if (name(naam) != "stop") {
//     name(naam);
//     age(leeftijd);
// } else {
//     document.write("Hallo " + name() + ", je leeftijd is " + age() + " jaar.");
// }

document.write("Hallo " + name() + ", je leeftijd is " + age() + " jaar.");