/**
    * Funksjon som regner ut den totale lengden av 2 stk. stringer.
    * @param {string} string1 - Tilfeldig string nr. 1
    * @param {string} string2 - Tilfeldig string nr. 2
    * @example:
    * // returns 2:
    * printTotalLength("a","b");
    * @example:
    * // returns 4:
    * printTotalLength("aa","bb");
    * @returns {Number} Returnerer summen av lengden på dei to stringane.  
*/

function printTotalLength(string1,string2) {
    length = string1.length + string2.length;
    console.log(length);
    return length;
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