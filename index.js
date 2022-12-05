const userInformations = require('./information');

console.log(userInformations);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Salut je suis ${userInformations.userInformations.myName} de la ${userInformations.userInformations.mySchool}`,
    e : "oO",
    T : "U "
}));

