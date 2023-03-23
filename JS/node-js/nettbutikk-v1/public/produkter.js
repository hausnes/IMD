const utskrift = document.querySelector("#utskrift");

async function visProdukter() {
    const url = await fetch("/produkter");
    const produkter = await url.json();
    console.log(produkter); // Test for å se om vi får hentet data
}

visProdukter();