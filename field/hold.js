const hold = document.getElementById("hold");

let density = 0;

function resist() {
  density += 0.0005;
  hold.style.opacity = Math.min(0.4, density);
  requestAnimationFrame(resist);
}

resist();
