const utskrift = document.getElementById("utskrift");

let infoSpråk = navigator.language;

utskrift.innerText = infoSpråk;
console.log(infoSpråk);

if(infoSpråk == "nb-NO" || infoSpråk == "nb") { // || betyr "eller",altså, ett av alternativene må stemme
    utskrift.innerText += " - altså, du er norsk!";
    //utskrift.innerText = utskrift.innerText + "Du er norsk!";
}

let bredde = window.innerWidth;
let breddeScreen = screen.width;
console.log("bredde = " + bredde); // "bodyen", der "du kan lage nettside"
console.log("bredde (screen) = " + breddeScreen); // heile skjermen

let hogde = window.innerHeight;
let hogdeScreen = screen.height;
console.log("høgde = " + hogde);
console.log("høgde (screen) = " + hogdeScreen);

let plattform = navigator.platform;
let nettleser = navigator.userAgent;
let vendor = navigator.vendor;
console.log("plattform: " + plattform + ", userAgent: " + nettleser + ", vendor: " + vendor);

/*
    Geolokasjon:
    Finne ut hvor brukeren er.
    Kilde: https://www.w3schools.com/html/html5_geolocation.asp
*/

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude)
}

getLocation();

// List of latitude and longitude and corresponding city names
var cities = [
    {lat: 40.7128, lng: -74.0060, city: "New York"},
    {lat: 51.5074, lng: -0.1278, city: "London"},
    {lat: 48.8566, lng: 2.3522, city: "Paris"},
    {lat: 52.5200, lng: 13.4050, city: "Berlin"},
    {lat: 41.9028, lng: 12.4964, city: "Rome"},
    {lat: 55.7558, lng: 37.6173, city: "Moscow"},
    {lat: 35.6895, lng: 139.6917, city: "Tokyo"},
    {lat: 37.5665, lng: 126.9780, city: "Seoul"},
    {lat: 22.3964, lng: 114.1095, city: "Hong Kong"},
    {lat: 28.6139, lng: 77.2090, city: "New Delhi"},
    {lat: 30.0444, lng: 31.2357, city: "Cairo"},
    {lat: 23.1291, lng: 113.2644, city: "Guangzhou"},
    {lat: 39.9042, lng: 116.4074, city: "Beijing"},
    {lat: 31.2304, lng: 121.4737, city: "Shanghai"},
    {lat: 6.5244, lng: 3.3792, city: "Lagos"},
    {lat: 6.9271, lng: 79.8612, city: "Colombo"},
    {lat: 3.1390, lng: 101.6869, city: "Kuala Lumpur"},
    {lat: 13.0827, lng: 80.2707, city: "Chennai"},
    {lat: 19.0760, lng: 72.8777, city: "Mumbai"},
    {lat: 23.8103, lng: 90.4125, city: "Dhaka"},
    {lat: 13.7367, lng: 100.5231, city: "Bangkok"},
    {lat: 14.5995, lng: 120.9842, city: "Manila"},
    {lat: 10.8231, lng: 106.6297, city: "Ho Chi Minh City"},
    {lat: 24.8607, lng: 67.0011, city: "Karachi"},
    {lat: 33.6846, lng: 73.0479, city: "Islamabad"},
    {lat: 35.6892, lng: 51.3890, city: "Tehran"}
];
