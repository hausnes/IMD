function printTotalLength(string1,string2) {
    length = string1.length + string2.length;
    console.log(length);
}

exports.printTotalLength = printTotalLength;

// Egen test for å eksportere en enkelt variabel
let variabel_PI = Math.PI;

exports.PI = variabel_PI;

// Egen test for å eksp. en ny funksjon
function regnUtSummen(tall1,tall2) {
    summen = tall1 + tall2;
    console.log(summen);
}

exports.regnUt = regnUtSummen;