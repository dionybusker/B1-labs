// opdracht 1

var linebreak = "<br>";

function helloWorld(aantal) {
    for (i = 1; i <= aantal; i++) {
        document.write(i + ". " + 'Hello World!' + linebreak);
    }
}

helloWorld(7);