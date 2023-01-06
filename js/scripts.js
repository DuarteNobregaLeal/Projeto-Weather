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
        const { name } = data.name;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".cidade").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = 
            "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            document.querySelector(".descricao").innerHTML = description;
            document.querySelector(".temperatura").innerHTML = temp + "ºC";
        }
        );
    },
};