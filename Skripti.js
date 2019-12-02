let pelaajanPisteet = 0;
let tietokoneenPisteet = 0;
//liitetään html elementit muuttujiin
let start = document.getElementById("newBtn")
let kiviValinta = document.getElementById("kiviBtn");
let paperiValinta = document.getElementById("paperiBtn");
let saksiValinta = document.getElementById("saksetBtn");

let valintaKuva = document.getElementById("valintakuva")
let voittaja = document.getElementById("voittaja")
let pisteet = document.getElementById("pisteet")
let valinnat = document.getElementById("valinnat")
let otsikko = document.getElementById("otsikko")

let pelialue = document.getElementById("pelialue")

window.onload= function(){
    alustaPeli();
}

//peli alustetaan alusta
function alustaPeli(){
    otsikko.innerHTML = "Aleksin KPS-peli";
    valinnat.innerHTML = "Tulos";
    pelaajanPisteet = 0;
    tietokoneenPisteet = 0;
    pelialue.style.display = "initial";
    voittaja.innerHTML = "Voittaja selviää, kun pelaat peliä";
    pisteet.innerHTML = "Pistetilanne: ";
    start.style.display = "none";
    valintaKuva.style.display = "initial";
}

//pelin toiminnallisuus

start.addEventListener("click", function(){
    alustaPeli();
});
kiviValinta.addEventListener("click", function(){
    pelaajanValinta("Kivi")
});
paperiValinta.addEventListener("click", function(){
    pelaajanValinta("Paperi")
});
saksiValinta.addEventListener("click", function(){
    pelaajanValinta("Sakset")
});

function pelaajanValinta(pelaajaChoice){
    let tietokoneChoice = tietokoneenValinta();
    console.log("Pelaaja valitsi " + pelaajaChoice + " : " + "Tietokone valitsi " + tietokoneChoice);
    valintojenVertaus(pelaajaChoice, tietokoneChoice);
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
function valintojenVertaus(pvalinta, tvalinta){
    if (pvalinta === tvalinta){
        voittaja.innerHTML = "Tasapeli!"
    } else if (pvalinta === "Kivi"){
        if (tvalinta === "Sakset"){
            voittaja.innerHTML = "Kivi voitti. Pelaaja voittaa!<br>Pelaajalle piste."
            getPisteet(1, 0);
        } else {
            voittaja.innerHTML = "Paperi voitti. Tietokone voittaa!<br>Tietokoneelle piste."
            getPisteet(0, 1);
        }
    } else if (pvalinta === "Paperi"){
        if (tvalinta === "Kivi"){
            voittaja.innerHTML = "Paperi voitti. Pelaaja voittaa!<br>Pelaajalle piste."
            getPisteet(1, 0);
        } else {
            voittaja.innerHTML = "Sakset voitti. Tietokone voittaa!<br>Tietokoneelle piste."
            getPisteet(0, 1);
        }
    } else if (pvalinta === "Sakset"){
        if (tvalinta === "Paperi"){
            voittaja.innerHTML = "Sakset voitti. Pelaaja voittaa!<br>Pelaajalle piste."
            getPisteet(1, 0);
        } else {
            voittaja.innerHTML = "Kivi voitti. Tietokone voittaa!<br>Tietokoneelle piste."
            getPisteet(0, 1);
        }
    }
} 
function getPisteet(pPisteet, tPisteet){
    pelaajanPisteet += pPisteet;
    tietokoneenPisteet += tPisteet;
    pisteet.innerHTML = "Pelaajan pisteet: " + pelaajanPisteet + "<br>Tietokoneen pisteet: " + tietokoneenPisteet
    if (pelaajanPisteet > 2 || tietokoneenPisteet > 2){
        if (pelaajanPisteet >= tietokoneenPisteet){
            valinnat.innerHTML = "Pelaaja voitti pelin!"
            voittoNakyma("Pelaaja voitti pelin!");
        } else {
            valinnat.innerHTML = "Tietokone voitti pelin!"
            voittoNakyma("Tietokone voitti pelin!");
        }
    }
}
function voittoNakyma(voittoteksti){
    otsikko.innerHTML = voittoteksti;
    pelialue.style.display = "none";
    voittaja.innerHTML = "Lopulliset pisteeet: <br> Pelaajan pisteet: " + pelaajanPisteet +
    "<br> Tietokoneen pisteet: " + tietokoneenPisteet;
    start.style.display = "initial";
    valintaKuva.style.display = "none";

}