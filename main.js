import "./style.css";
import anime from "animejs/lib/anime.es.js";
import riukFocus from "./public/riukFocus.svg";
import riukLogo from "./public/riuklogo.svg";

import youtube from './public/youtube.svg'
import youtubeHover from './public/youtubeHover.svg'

import wattpad from './public/wattpad.svg'
import wattpadHover from './public/wattpadHover.svg'

import tiktok from './public/tiktok.svg'
import tiktokHover from './public/tiktokHover.svg'

import twitch from './public/twitch.svg'
import twitchHover from './public/twitchHover.svg'

import instagram from './public/instagram.svg'
import instagramHover from './public/instagramHover.svg'

const $botonArrow = document.getElementById("arrow");
let leidoSobremi = false;
let leidoSocios = false;
let leidoProgramas = false;
let leidoRiukPensando = true;
$(document).ready(function () {
  anime({
    targets: [".objetivo-container", ".socio-item", ".programa-item"],
    translateX: [-2000, 0],
    delay: anime.stagger(200, { direction: "reverse" }),
  });
  anime({
    targets: ".cabecera-port",
    translateX: [-1000, 0],
    duration: 1000,
  });
  leidoProgramas = true;
  leidoSocios = true;
  leidoSobremi = true;

  $(window).scroll(function () {
    if (
      $(window).scrollTop() < $(".recursos-container").offset().top + 580 &&
      $(window).scrollTop() > $(".segundo").offset().top
    ) {
      if (!leidoRiukPensando) {
        $(".cursos-container").css("opacity", "1");
        leidoRiukPensando = true;
      }
    } else {
      $(".cursos-container").css("opacity", "0");
      leidoRiukPensando = false;
    }

    if (
      $(window).scrollTop() < $(".list-programas").offset().top &&
      $(window).scrollTop() > $(".segundo").offset().top - 50
    ) {
      if (!leidoProgramas) {
        anime({
          targets: [".programa-item"],
          translateX: [-2000, 0],
          delay: anime.stagger(200, { easing: "easeOutQuad" }),
        });
        anime({
          targets: ".info",
          translateY: [-700, 0],
          duration: 1000,
        });
        $(".info").css("opacity", "1");
        $(".programa-item").css("opacity", "1");
        leidoProgramas = true;
      }
    } else {
      $(".programa-item").css("opacity", "0");
      $(".info").css("opacity", "0");
      leidoProgramas = false;
    }

    if ($(window).scrollTop() < $(".segundo").offset().top) {
      if (!leidoSobremi) {
        anime({
          targets: [".objetivo-container"],
          translateX: [-2000, 0],
          delay: anime.stagger(
            500,
            { direction: "reverse" },
            { easing: "easeOutQuad" }
          ),
        });
        leidoSobremi = true;
        $(".objetivo-container").css("opacity", 1);
      }
    } else {
      $(".objetivo-container").css("opacity", 0);
      leidoSobremi = false;
    }
    if ($(window).scrollTop() < $(".socios-container").offset().top) {
      if (!leidoSocios) {
        anime({
          targets: ".socio-item",
          translateX: [-2000, 0],
          delay: anime.stagger(500, { direction: "reverse" }),
        });
        $(".socio-item").css("opacity", 1);
        leidoSocios = true;
      }
    } else {
      $(".socio-item").css("opacity", 0);
      leidoSocios = false;
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelectorAll(".nav-item");

  function activarLink() {
    list.forEach((item) => {
      item.classList.remove("active");
    });
  }

  list.forEach((item) => {
    item.addEventListener("click", () => {
      activarLink();
      item.classList.add("active");
    });
  });
});

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
  const $tituloBoton = document.querySelector(".titulo-boton");
  const $telegramBoton = document.querySelector(".telegram");
  const $imgTelegram = document.querySelector(".imagen-telegram");
  const $footerBtn = document.querySelector(".footer-btn");

  if (estadoAbierto) {
    $cabecera.style.width = "25%";
    $logoContainer.style.height = "20dvh";
    $logoRiuk.setAttribute("src", riukLogo);
    $navTitulos.forEach((item) => (item.style.display = "block"));
    $navItems.forEach((item) => (item.style.width = "130px"));
    $navNavegator.forEach(
      (item) => (item.style.justifyContent = "space-between")
    );
    $navNavegator.forEach((item) => (item.style.width = "120px"));
    $tituloTelegram.style.display = "inline";
    $redesContainer.style.height = "20dvh";
    $botonArrow.style.transform = "rotate(0deg)";
    $tituloBoton.style.display = "block";
    $telegramBoton.style.width = "180px";
    $telegramBoton.style.backgroundColor = "#003D96";
    $footerBtn.style.justifyContent = "flex-end";
    $(".imagen-telegram").css({
      width: "40px",
    });
    $(".main-container").css({
      width: "65%",
    });
    $(".dividor").css({
      width: "25%",
    });
  } else {
    $logoContainer.style.height = "13dvh";
    $logoRiuk.setAttribute("src", riukFocus);
    $navTitulos.forEach((item) => (item.style.display = "none"));
    $navItems.forEach((item) => (item.style.width = "100%"));
    $navNavegator.forEach((item) => (item.style.justifyContent = "center"));
    $navNavegator.forEach((item) => (item.style.width = "100%"));
    $tituloTelegram.style.display = "none";
    $cabecera.style.width = "10%"; /*15% mobile*/
    $redesContainer.style.height = "35dvh";
    $botonArrow.style.transform = "rotate(180deg)";
    $tituloBoton.style.display = "none";
    $telegramBoton.style.width = "100%";
    $telegramBoton.style.backgroundColor = "#012F7A";
    $footerBtn.style.justifyContent = "center";
    $(".link-imagen").css({
      width: "25%" /*25px*/,
    });
    $("#arrow").css("width", "30px");
    $(".redes-imagen").css({
      /*
      width: "25px", /*25px*/
      /*padding: "5px" /*5px*/
    });
    $(".telegram").css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "translateX(-3px)",
    });
    $(".imagen-telegram").css({
      width: "35px",
    });
    $(".main-container").css({
      width: "90%",
    });
    $(".dividor").css({
      width: "10%",
    });
  }
  estadoAbierto = !estadoAbierto;
});

$(document).ready(function () {
  $("#instagram").hover(function () {
      // over
      $("#instagram-imagen").attr("src", instagramHover);
    }, function () {
      // out
      $("#instagram-imagen").attr("src", instagram);
    }
  );
  $("#tiktok").hover(function () {
      // over
      $("#tiktok-imagen").attr("src", tiktokHover);
    }, function () {
      // out
      $("#tiktok-imagen").attr("src", tiktok);
    }
  );
  $("#youtube").hover(function () {
      // over
      $("#youtube-imagen").attr("src", youtubeHover);
    }, function () {
      // out
      $("#youtube-imagen").attr("src", youtube);
    }
  );
  $("#twitch").hover(function () {
      // over
      $("#twitch-imagen").attr("src", twitchHover);
    }, function () {
      // out
      $("#twitch-imagen").attr("src", twitch);
    }
  );
  $("#wattpad").hover(function () {
      // over
      $("#wattpad-imagen").attr("src", wattpadHover);
    }, function () {
      // out
      $("#wattpad-imagen").attr("src", wattpad);
    }
  );
});