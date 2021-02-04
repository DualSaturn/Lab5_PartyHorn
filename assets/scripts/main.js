// main.js

let hb = document.getElementById('honk-btn');
let aud = document.getElementById('horn-sound');

hb.type = "button";
hb.addEventListener("click", playHornSound);

function playHornSound(){
    if (aud.volume > 0){
        aud.play();
    }
}

slider = document.getElementById("volume-slider");
textVol = document.getElementById("volume-number");
slider.addEventListener("change", updateSlider);
textVol.addEventListener("change", updatetextVol);

function updateSlider(){
    let newVol = slider.value;
    textVol.value = newVol;
    aud.volume = newVol/100;
    properIcon();
}
function updatetextVol(){
    let newVol = textVol.value;
    slider.value = newVol;
    aud.volume = newVol/100;
    properIcon();
}
function properIcon(){
    let ico = document.getElementById("volume-image");
    let newVol = slider.value;
    if (newVol>=67 && newVol <=100){
        ico.src = "./assets/media/icons/volume-level-3.svg";
    } else if (newVol>=34 && newVol <=66){
        ico.src = "./assets/media/icons/volume-level-2.svg";
    } else if (newVol>=1 && newVol <=33){
        ico.src = "./assets/media/icons/volume-level-1.svg";
    } else if (newVol==0){
        ico.src = "./assets/media/icons/volume-level-0.svg";
    }
}

let air = document.getElementById("radio-air-horn");
let car = document.getElementById("radio-car-horn");
let party = document.getElementById("radio-party-horn");

air.addEventListener("change", updateRadio);
car.addEventListener("change", updateRadio);
party.addEventListener("change", updateRadio);

function updateRadio(){
    let img = document.getElementById("sound-image");
    if (air.checked){
        img.src ="./assets/media/images/air-horn.svg";
        aud.src = "./assets/media/audio/air-horn.mp3";
    } else if (car.checked){
        img.src ="./assets/media/images/car.svg";
        aud.src = "./assets/media/audio/car-horn.mp3";
    } else if (party.checked){
        img.src ="./assets/media/images/party-horn.svg";
        aud.src = "./assets/media/audio/party-horn.mp3";
    }
}

let frm = document.getElementById("party-horn-form");
frm.addEventListener("submit", stopSubmitting);

function stopSubmitting(e){
    e.preventDefault();
}