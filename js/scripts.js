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
        .then(data => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, pressure } = data.main;
        const { lon, lat } = data.coord;
        console.log(name, icon, description, temp, humidity, pressure, lat, lon);
        document.querySelector(".cidade").innerHTML = "Meteorologia em " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            document.querySelector(".descricao").innerHTML = description;
            document.querySelector(".temperatura").innerHTML = temp + "ºC";
            document.querySelector(".humidade").innerHTML = "Humidade: " + humidity + "%";
            document.querySelector(".pressao").innerHTML = "Pressao atmosférica: " + pressure + "hPa";
            document.querySelector(".coordenadas").innerHTML = "Coordenadas: lon " + lon + " lat " + lat;
        }
        );
    },
    search: function () {
        this.fetchWeather(document.querySelector(".procurar").value);
    }
};

document
    .querySelector(".botaoP")
    .addEventListener("click", function(){
        weather.search();
});