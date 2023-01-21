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

