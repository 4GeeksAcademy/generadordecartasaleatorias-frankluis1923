/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const symbolsArray = ["♦", "♥", "♠", "♣"];
const renderBtn = document.getElementById("buttonRender");
window.onload = function() {
  renderOnLoad();
  renderBtn.addEventListener("click", function() {
    renderOnClick();
  });
  setInterval(renderOnLoad(), 10000);
};
function randomNumber(length) {
  let number = Math.floor(Math.random() * length);
  return number;
}
function renderOnLoad() {
  changeSymbols();
  changeNumber();
}
function renderOnClick() {
  changeSymbols();
  changeNumber();
  changeWidthHeight();
}
function changeSymbols() {
  let symbol = symbolsArray[randomNumber(symbolsArray.length)];
  document.getElementById("cardSymbolH").innerHTML = symbol;
  document.getElementById("cardSymbolF").innerHTML = symbol;
  switch (symbol) {
    case "♦":
    case "♥":
      document.querySelector(".card").className = "card p-0 text-danger";
      break;
    case "♠":
    case "♣":
      document.querySelector(".card").className = "card p-0 text-dark";
      break;
  }
}
function changeNumber() {
  let number = randomNumber(13);
  switch (number) {
    case 1:
      number = "A";
      break;
    case 11:
      number = "J";
      break;
    case 12:
      number = "Q";
      break;
    case 13:
      number = "K";
      break;
    default:
      break;
  }
  document.getElementById("cardNumber").innerHTML = number.toString();
}
function changeWidthHeight() {
  let widthCard = document.getElementById("width").value + "px";
  let heightCard = document.getElementById("height").value + "px";
  document.querySelector(".card").style.width = widthCard;
  document.querySelector(".card").style.height = heightCard;
}
