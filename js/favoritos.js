document.addEventListener("DOMContentLoaded", () => {
    LoadData();
  });



function LoadData(){
    var favs = JSON.parse(localStorage.getItem('favs')) || []; 
    favs.map(function (fav, index){
        console.log(fav)
        weather.fetchWeather(fav);
    })
}


