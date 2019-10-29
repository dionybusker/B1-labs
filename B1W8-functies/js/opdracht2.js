// opdracht 2

var linebreak = "<br>";

function addition(number1, number2) {
    // var number1 = 10;
    // var number2 = 12;
    return number1 + number2;
}

function subtraction(number1, number2) {
    // var number1 = 58;
    // var number2 = 34;
    return number1 - number2;
}

function multiplication(number1, number2) {
    // var number1 = 6;
    // var number2 = 7;
    return number1 * number2;
}

function division(number1, number2) {
    // var number1 = 144;
    // var number2 = 12;
    return number1 / number2;
}

function increment(number) {
    // var number = 12;
    return number = number + 1;
}

function decrement(number) {
    // var number = 34;
    return number = number - 1;
}

document.write(addition(10, 12) + linebreak);
document.write(subtraction(58, 34) + linebreak);
document.write(multiplication(6, 7) + linebreak);
document.write(division(144, 12) + linebreak);
document.write(increment(12) + linebreak);
document.write(decrement(34) + linebreak);

