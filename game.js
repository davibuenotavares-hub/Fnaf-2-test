let energy = 100;
let flash = 100;
let music = 100;
let maskOn = false;
let camOn = false;
let animInHall = false;

const energyEl = document.getElementById("energy");
const flashEl = document.getElementById("flash");
const musicEl = document.getElementById("music");
const mask = document.getElementById("mask");
const hallway = document.getElementById("hallway");
const cameraView = document.getElementById("cameraView");
const jumpscare = document.getElementById("jumpscare");
const menu = document.getElementById("menu");
const game = document.getElementById("game");

function startGame() {
  menu.style.display = "none";
  game.style.display = "block";
}

function putMask() {
  maskOn = true;
  mask.style.display = "block";
}

function removeMask() {
  maskOn = false;
  mask.style.display = "none";
}

function toggleCamera() {
  camOn = !camOn;
  cameraView.style.display = camOn ? "flex" : "none";
  hallway.style.display = camOn ? "none" : "flex";
}

function useFlash() {
  if (flash <= 0) return;
  flash -= 4;
  flashEl.textContent = flash;
  animInHall = false;
}

function windMusic() {
  music = Math.min(100, music + 8);
  musicEl.textContent = music;
}

function puppetAI() {
  music -= 2;
  musicEl.textContent = music;
  if (music <= 0) jumpScare();
}

function animAI() {
  if (Math.random() < 0.25) animInHall = true;
  if (animInHall && !maskOn && !camOn) {
    setTimeout(jumpScare, 1200);
  }
}

function jumpScare() {
  jumpscare.style.display = "block";
  setTimeout(() => location.reload(), 2000);
}

setInterval(() => {
  energy -= maskOn ? 0.15 : 0.08; // energia mais lenta
  energyEl.textContent = Math.max(0, Math.floor(energy));
  if (energy <= 0) jumpScare();
}, 1000);

setInterval(animAI, 3000);
setInterval(puppetAI, 4000);
