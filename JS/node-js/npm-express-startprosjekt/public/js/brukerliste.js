let utskrift = document.getElementById("utskrift");

async function skrivUtBrukere() {
    const response = await fetch("/brukerliste");
    const data = await response.json();
    console.log(data);

    let navn = data[0].navn;
    console.log(navn);

    // let overskrift = document.createElement("h1");
    // overskrift.innerText = navn;
    // utskrift.appendChild(overskrift);

    for (let i = 0; i < data.length; i++) {
        let overskrift = document.createElement("h1");
        overskrift.innerText = data[i].navn;
        utskrift.appendChild(overskrift);

        let epost = document.createElement("a");
        epost.href = "mailto:" + data[i].epost;
        epost.innerText = data[i].epost;
        utskrift.appendChild(epost);

        let fodt = document.createElement("p");
        fodt.innerText = data[i].fodt;
        utskrift.appendChild(fodt);
    }
}

skrivUtBrukere();