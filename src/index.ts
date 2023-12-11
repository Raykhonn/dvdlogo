import "./main.css";
import * as yup from "yup";


const dvdLogo = document.getElementById('dvd-logo') as HTMLElement;

let x = 0;
let y = 0;
let xSpeed = 2;
let ySpeed = 2;

function animateDVDLogo() {
  const { clientWidth, clientHeight } = document.documentElement;

  x += xSpeed;
  y += ySpeed;

  if (x + dvdLogo.offsetWidth >= clientWidth || x <= 0) {
    xSpeed *= -1;
  }
  if (y + dvdLogo.offsetHeight >= clientHeight || y <= 0) {
    ySpeed *= -1;
  }

  dvdLogo.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animateDVDLogo);
}

animateDVDLogo();
