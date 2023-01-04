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
        .then((data) => console.log(data));
    },
    displayWeather: function (data) {
        
    }
};