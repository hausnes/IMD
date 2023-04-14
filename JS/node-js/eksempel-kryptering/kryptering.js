const bcrypt = require('bcrypt');

const saltRounds = 10;
const password1 = "birger123";

// Metode 1:
// const salt = bcrypt.genSaltSync(saltRounds);
// console.log("Salt: " + salt);

// const hash = bcrypt.hashSync(password1, salt);
// console.log("Hash: " + hash);

// Metode 2:
const hash = bcrypt.hashSync(password1, saltRounds);
console.log(hash);

// Sammenligne passord med hash
const password2 = "birger123";
const result = bcrypt.compareSync(password2, hash);
console.log("Resultatet av å sammenligne passord: " + result);