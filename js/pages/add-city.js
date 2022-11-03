function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

//localStorage.removeItem("CITIES");
 
function addNewCityToLocalStorage(newCity) {
    let cartelError = document.getElementById("error");
    let cartelWarning = document.getElementById("warning");
    let cartelSuccess = document.getElementById("success");
    let cities = getCitiesFromLocalStorage();
    let city_repetida = false;

    for(let i = 0; i < cities.length; i++){
        if(newCity == cities[i]){
            city_repetida = true;
        }
    }

    if(newCity.length == 0){
        cartelWarning.style.display = "block";
        setInterval(function(){
            cartelWarning.style.display = "none";
        }, 2000);
    } else if(city_repetida == true){
        cartelError.style.display = "block";
        setInterval(function(){
            cartelError.style.display = "none";
        }, 2000);
    } else {
        cartelSuccess.style.display = "block";
        setInterval(function(){
            cartelSuccess.style.display = "none";
        }, 2000);
        cities.push(newCity);
        localStorage.setItem("CITIES", JSON.stringify(cities));
    }

}

function getCity() {
    let city = document.getElementById("ciudad").value;
    addNewCityToLocalStorage(city);
} 