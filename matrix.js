const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
const fontSize = 18;
let columns = Math.floor(width / fontSize);
let drops = Array(columns).fill(1);

// Update canvas size on window resize
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  columns = Math.floor(width / fontSize);
  drops = Array(columns).fill(1);
});

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // fading effect
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#00f5ff'; // blue color
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    drops[i]++;
    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
}

setInterval(draw, 50);
