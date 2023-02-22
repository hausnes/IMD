const logg = document.querySelector('#chatLogg');

async function updateData() {
    let response = await fetch('/getMessages');
    let data = await response.json;
    console.log(data);
    let innerHTML = "";
    for (let row of data) {
        innerHTML += "<p>" + row.message + "<p>";
    }
    logg.innerHTML = innerHTML;
    setTimeout(updateData,1000);
}
updateData();