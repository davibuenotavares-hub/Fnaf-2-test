let energy = 100;
let flash = 100;
let maskOn = false;
let animInHall = false;

const energyEl = document.getElementById("energy");
const flashEl = document.getElementById("flash");
const anim = document.getElementById("animatronic");
const mask = document.getElementById("mask");
const jumpscare = document.getElementById("jumpscare");

function toggleMask() {
  maskOn = !maskOn;
  mask.style.display = maskOn ? "block" : "none";
}

function useFlash() {
  if (flash <= 0) return;
  flash -= 5;
  flashEl.textContent = flash;

  if (animInHall) {
    anim.style.display = "none";
    animInHall = false;
  }
}

function animAI() {
  if (Math.random() < 0.35 && !animInHall) {
    animInHall = true;
    anim.style.display = "block";
    anim.style.left = "50%";
    anim.style.top = "50%";
  }

  if (animInHall && !maskOn) {
    setTimeout(jumpScare, 1500);
  }
}

function jumpScare() {
  jumpscare.style.display = "block";
  setTimeout(() => location.reload(), 2000);
}

setInterval(() => {
  energy -= maskOn ? 0.4 : 0.2;
  energyEl.textContent = Math.max(0, Math.floor(energy));
  if (energy <= 0) jumpScare();
}, 1000);

setInterval(animAI, 3000);
