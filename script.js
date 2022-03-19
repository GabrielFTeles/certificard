let modal = document.querySelector(".modal");
let saibaMais = document.querySelector(".saibaMais");

function modalMostrar() {
  modal.style.maxHeight = "500px";
  saibaMais.style.visibility = "hidden";
}

function modalSumir() {
  modal.style.maxHeight = "0px";
  saibaMais.style.visibility = "visible";
}