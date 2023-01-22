let overskrift = document.createElement("h1"); // Oppretter HTML-tag
overskrift.innerText = "Halvard, hei!"; // Endrer innholdet inne i 'h1'
document.body.appendChild(overskrift); // Plasserer h1 i dokumentet/nettsiden

let bilde = document.createElement("img");
bilde.src = "https://gfx.nrk.no/oRChumeWruhkPhW7TbEf5wgo9Di9zmAMeLdXsNAXUOcg";
bilde.alt = "Bilde av inergionerign";
bilde.id = "bilde";
document.body.appendChild(bilde);