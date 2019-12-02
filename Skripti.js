let tietokoneChoice;
let pelaajaChoice;
//liitetään html elementit muuttujiin
let kiviValinta = document.getElementById("kiviBtn");
let paperiValinta = document.getElementById("paperiBtn");
let saksiValinta = document.getElementById("saksetBtn");
let valintaKuva = document.getElementById("valintakuva")

//peli alustetaan


//pelin toiminnallisuus

kiviValinta.addEventListener("click", function(){
    pelaajanValinta("Kivi")
});
paperiValinta.addEventListener("click", function(){
    pelaajanValinta("Paperi")
});
saksiValinta.addEventListener("click", function(){
    pelaajanValinta("Sakset")
});

function pelaajanValinta(valinta){
    let tietokoneChoice = tietokoneenValinta();
    console.log("Pelaaja valitsi " + valinta + " : " + "Tietokone valitsi " + tietokoneChoice);
}
function tietokoneenValinta(){
    let numero = Math.floor(Math.random() * 3);
    if (numero === 0){
        valintaKuva.src = "kivi.jpg";
        return "Kivi";
    } else if (numero === 1){
        valintaKuva.src = "paperi.jpg";
        return "Paperi"
    } else {
        valintaKuva.src = "sakset.jpg";
        return "Sakset"
    }
}