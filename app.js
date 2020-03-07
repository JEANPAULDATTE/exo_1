// utilisation du module.js dans le code du fichier calcul

const calcul  = require ("./calcul.js")
const mailService = require ("./mailService.js")
let a = 25, b = 10

console.log(mailService.sendEmail("jeanpauldatte@gmail.com","exo cours","test du 07 MARS 2020"))
console.log("ok")

// console.log(calcul.somme(a,b));
// console.log(calcul.soustraction(a,b));
// console.log(calcul.multiplication(a,b));
// console.log(calcul.division(a,b));
