let overskrift = document.createElement("h1"); // Oppretter HTML-tag
overskrift.innerText = "Halvard, hei!"; // Endrer innholdet inne i 'h1'
document.body.appendChild(overskrift); // Plasserer h1 i dokumentet/nettsiden

let bilde = document.createElement("img");
bilde.src = "https://gfx.nrk.no/oRChumeWruhkPhW7TbEf5wgo9Di9zmAMeLdXsNAXUOcg";
bilde.alt = "Bilde av inergionerign";
bilde.id = "bilde";
document.body.appendChild(bilde);

// https://randomuser.me/api/?results=1&gender=female&nat=no

let antall = 5;
let kjonn = "female";
let nasjonalitet = "no";

fetch('https://randomuser.me/api/?results=' + antall + "&gender=" + kjonn + "&nat=" + nasjonalitet)
	.then(response => response.json())
	// .then(response => console.log(response))
    .then(response => behandleSvar(response))
	.catch(err => console.error(err));

function behandleSvar(data) {
    console.log(data.results[0].gender);
}