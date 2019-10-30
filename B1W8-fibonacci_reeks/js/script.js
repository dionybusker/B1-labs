// lab fibonacci reeks

// var linebreak = "<br>"

// function calc(a, b) {
//     var c = a + b; // uitkomst
//     for (var i = 1; i <= 20; i++) {
//         document.write(a + " + " + b + " = " + c + linebreak);
//         a = b;
//         b = c;
//         c = a + b;
//     }
//     return false;
// }

// calc(1, 1);

// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8


var linebreak = "<br>"
var i = 1;

function calc(a, b) {
    var c = a + b; // uitkomst
    if (i <= 20) {
        document.write(a + " + " + b + " = " + c + linebreak);
        a = b;
        b = c;
        c = a + b;
        i++
        calc(a, b);
    } 
}

calc(1, 1);