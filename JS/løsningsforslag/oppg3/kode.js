const utskrift = document.getElementById("utskrift");
utskrift.innerText = "Hei!";

let interesse = prompt("Hva er du interessert i?");
if (interesse.toLowerCase().includes("telemarkski") ) {
    utskrift.innerText = "Å, eg og likar telemarkski.";
} else {
    utskrift.innerText = "Me blir ikkje venner.";
}

// includes, toLowerCase