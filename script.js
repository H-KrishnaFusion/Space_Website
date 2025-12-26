const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});



document.querySelector(".hero-cta").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#explore").scrollIntoView({
    behavior: "smooth"
  });
});



const items = document.querySelectorAll('.explore-item');

function handleScroll() {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const triggerThreshold = window.innerHeight * 0.8; // 80% of the screen height

if (rect.top < triggerThreshold && rect.bottom > window.innerHeight * 0.2) {
  item.classList.add('active');
} else {
  item.classList.remove('active');
}
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
let numStars = 150;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2,
    opacity: Math.random(),
    speed: Math.random() * 0.05 + 0.02
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    // Draw star
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();

    // Twinkle
    star.opacity += (Math.random() - 0.5) * 0.02;
    if (star.opacity < 0.1) star.opacity = 0.1;
    if (star.opacity > 1) star.opacity = 1;

    // Move star (slow drifting)
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  });

  requestAnimationFrame(animate);
}
animate();



