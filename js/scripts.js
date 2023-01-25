<<<<<<< HEAD
let weather ={
    apiKey: "5199a4352b7280d3eccf5102ee9bfc4d",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.mostrarTempo(data));
    },
    mostrarTempo: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, pressure } = data.main;
        const { lon, lat } = data.coord;
        console.log(name, icon, description, temp, humidity, pressure, lat, lon);
        document.querySelector(".cidade").innerHTML = "Meteorologia em " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            document.querySelector(".descricao").innerHTML = description;
            document.querySelector(".temperatura").innerHTML = temp + " ºC";
            document.querySelector(".humidade").innerHTML = "Humidade: " + humidity + " %";
            document.querySelector(".pressao").innerHTML = "Pressao atmosférica: " + pressure + " hPa";
            document.querySelector(".coordenadas").innerHTML = "Coordenadas: lon " + lon + " lat " + lat;
    },
        

    search: function () {
        this.fetchWeather(document.querySelector(".procurar").value);
    }
};


=======
>>>>>>> fbabb3d33e8465a741d6cb4fdcec76185f628ae9
document
    .querySelector(".botaoP") && document
    .querySelector(".botaoP")
    .addEventListener("click", function(){
        weather.search();
});

document.addEventListener("DOMContentLoaded", () => {
    LoadData();
  });



function LoadData(){
    var favs = JSON.parse(localStorage.getItem('favs')) || []; 
    favs.map(function (fav, index){
        document.getElementById(fav).style.color='red';
    })
}

function addfav(btnid) {
    var favs = JSON.parse(localStorage.getItem('favs')) || [];

    var btnvar1 = document.getElementById(btnid);
    if (btnvar1.style.color == "red") {
        btnvar1.style.color = "grey"
        favs.splice(favs.indexOf(btnid),1)
    }
    else {
        btnvar1.style.color = "red";
        favs.push(btnid)
    }
    localStorage.setItem('favs',JSON.stringify([...new Set(favs)]));
    console.log(JSON.stringify([...new Set(favs)]))
}

