for (let i = 1; i < 7; i++) {
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
        const { icon } = data.weather[0];
        const { temp} = data.main;
        console.log(name, icon, temp);
    
        document.querySelector(".icon"+i).src = "http://openweathermap.org/img/wn/" + icon + "@4x.png";
        document.querySelector(".temperatura"+i).innerHTML = temp + "ºC";
        
    },

    cidade1: function () {
         this.fetchWeather("Lisboa");
    },

    cidade2: function () {
        this.fetchWeather("Porto");
    },
    cidade3: function () {
        this.fetchWeather("Faro");
   },

   cidade4: function () {
       this.fetchWeather("Leiria");
   },

   cidade5: function () {
        this.fetchWeather("Tomar");
   },  
   cidade6: function () {
        this.fetchWeather("Caldas da Rainha");
   },  
   
    
};
    weather.cidade1();
    weather.cidade2();
    weather.cidade3();
    weather.cidade4();
    weather.cidade5();
    weather.cidade6();
}


