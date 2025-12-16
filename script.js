/* MATRIX EFFECT */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01<>/{}[]HTMLCSSJS";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) drops[x] = 1;

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#38bdf8";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }
}
setInterval(draw, 33);

/* LANGUAGE SWITCH */
function setLang(lang) {
  if (lang === 'fr') {
    document.getElementById("aboutText").innerText =
      "Jeune homme motivé passionné par l’informatique et le développement web.";
  }
  if (lang === 'ar') {
    document.getElementById("aboutText").innerText =
      "طالب إعلامية شغوف بتطوير الويب والتقنيات الحديثة.";
  }
  if (lang === 'en') {
    document.getElementById("aboutText").innerText =
      "Motivated computer science student passionate about web development and modern technologies.";
  }
}
