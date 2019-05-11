var audio = document.getElementById("audio");
var button = document.getElementById("btn-play");
var img = document.getElementById("picto");

var isOpen = false;

//cette fonction anim permet de faire un changement de fond (apparition du chat)
function anim(){

//lorsque IsOpen est faux (si le bouton est fermé) alors le fond de l'image défini en css est remplacé par ce background-image
  if (isOpen) {
    isOpen = false;
  console.log("Je suis fermé");
  img.setAttribute("src", "../images/picto-son2.svg");
  audio.pause();

}

//sinon IsOpen est vrai (si le bouton est ouvert) alors le fond de l'image défini en css est remplacé par ce background-image
  else {
  isOpen = true;
  console.log("Je suis ouvert");
  img.setAttribute("src", "../images/picto-son.svg");
  audio.play();
}

};

if (isOpen === true) {
  console.log("Je suis ouvert");
} else {
  console.log("Je suis fermé");
};

//le bouton à l'évènement "click" déclenche la fonction anim ci-dessus
button.addEventListener("click", anim);
