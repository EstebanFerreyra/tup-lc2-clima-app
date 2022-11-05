var selectCity = document.getElementById("ciudades");
var cities = getCitiesFromLocalStorage();

function getCitiesFromLocalStorage() { 
    let cities = localStorage.getItem("CITIES"); 
    if(cities) { 
        cities = JSON.parse(cities); 
    } else { 
        cities = []; 
    } 
    return cities; 
}

function vacio() {
    if(cities.length == 0){
        confirm("ERROR: No hay ciudades cargadas");
    }
}

for (let city of cities) {
    add(city);
}

function add(city) {
    let newOption = document.createElement("option");
    newOption.value = city;
    newOption.innerHTML = city;
    selectCity.appendChild(newOption);
}

async function callAPI() {
    let nameCity = document.getElementById("ciudades").value;
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=d60f706a0d92ba6f3ae4f0f7e7b0deb8&units=metric&lang=es`;
    try {
        result = await fetch(API);
        jsonObjet = await result.json();
    } catch (error) {
        document.getElementById("card").style.display = "none";
    } finally {
        document.getElementById("card").style.display = "block";
        document.getElementById("city").innerHTML = jsonObjet.name;
        document.getElementById("temperatura").innerHTML = `Temperatura: ${jsonObjet.main.temp}°`;
        document.getElementById("sensacion").innerHTML = `Sensación térmica: ${jsonObjet.main.feels_like}°`;
        document.getElementById("humedad").innerHTML = `Humedad: ${jsonObjet.main.humidity}%`;
        document.getElementById("velocidad").innerHTML = `Velocidad del viento: ${(jsonObjet.wind.speed * 3.6).toFixed(1)}Km/h`;
        document.getElementById("presion").innerHTML = `Presión: ${jsonObjet.main.pressure} P`;
    }
}

