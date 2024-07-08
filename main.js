import "./style.css";
import riukFocus from "./public/riukFocus.svg";
import riukLogo from "./public/riuklogo.svg";
const $botonArrow = document.getElementById("arrow");

let estadoAbierto = false;

$botonArrow.addEventListener("click", () => {
  console.log("Haciendo click");
  console.log(estadoAbierto);
  const $cabecera = document.querySelector(".cabecera-port");
  const $navTitulos = document.querySelectorAll(".titulo-link");
  const $tituloTelegram = document.querySelector(".titulo-telegram");
  const $logoRiuk = document.querySelector(".logo-riuk");
  const $logoContainer = document.querySelector(".logo-container");
  const $redesContainer = document.querySelector(".redes-container");
  const $navItems = document.querySelectorAll(".nav-item");
  const $navNavegator = document.querySelectorAll(".nav-navegator");
  const $tituloBoton = document.querySelector(".titulo-boton")
  const $telegramBoton = document.querySelector(".telegram")
  const $imgTelegram = document.querySelector(".imagen-telegram")

  if (estadoAbierto) {
    $cabecera.style.width = "35%";
    $logoContainer.style.height = "20dvh";
    $logoRiuk.setAttribute("src", riukLogo);
    $navTitulos.forEach((item) => (item.style.display = "block"));
    $navItems.forEach((item) => (item.style.width = "130px"));
    $navNavegator.forEach((item) => (item.style.justifyContent = "space-between"))
    $navNavegator.forEach((item) => (item.style.width = "120px"))
    $tituloTelegram.style.display = "inline";
    $redesContainer.style.height = "20dvh";
    $botonArrow.style.transform = "rotate(0deg)";
    $tituloBoton.style.display = "block"
    $telegramBoton.style.width = "180px"
    $telegramBoton.style.backgroundColor = "#003D96"
    $(".imagen-telegram").css({
      "width" : "40px",
    });
    $(".main-container").css({
      "width": "65%"
    })
    $(".dividor").css({
      "width": "35%"
    })
  } else {
    $logoContainer.style.height = "17dvh";
    $logoRiuk.setAttribute("src", riukFocus);
    $navTitulos.forEach((item) => (item.style.display = "none"));
    $navItems.forEach((item) => (item.style.width = "100%"));
    $navNavegator.forEach((item) => (item.style.justifyContent = "center"))
    $navNavegator.forEach((item) => (item.style.width = "100%"))
    $tituloTelegram.style.display = "none";
    $cabecera.style.width = "10%"; /*15% mobile*/ 
    $redesContainer.style.height = "35dvh";
    $botonArrow.style.transform = "rotate(180deg)";
    $tituloBoton.style.display = "none"
    $telegramBoton.style.width = "100%"
    $telegramBoton.style.backgroundColor = "#012F7A"
    $(".telegram").css({
      "display": "flex",
      "justifyContent" : "center",
      "alignItems" : "center"
    })
    $(".imagen-telegram").css({
      "width" : "55px",
    });
    $(".main-container").css({
      "width": "90%"
    })
    $(".dividor").css({
      "width": "10%"
    })
  }
  estadoAbierto = !estadoAbierto;
});
