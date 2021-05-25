var countsNeil = document.querySelector("#countNeil");
var counterNeil = 10;
var countsNichole = document.querySelector("#countNichole");
var counterNichole = 13;
var countsJim = document.querySelector("#countJim");
var counterJim = 10;

function likeNeil() {
  countsNeil.innerText = counterNeil++ + " Likes";
}

function likeNichole() {
  countsNichole.innerText = counterNichole++ + " Likes";
}

function likeJim() {
  countsJim.innerText = counterJim++ + " Likes";
}
