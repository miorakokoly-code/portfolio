// Modern image animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  // Image animation
  const imgs = document.querySelectorAll('img.animate-img');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('img-animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  imgs.forEach(img => observer.observe(img));

  // Progress bar animation
  const bars = document.querySelectorAll('.progress');
  const barObserver = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const value = el.getAttribute('data-value');
        el.style.width = value;
        el.classList.add('progress-animated');
        barObserver.unobserve(el);
      }
    });
  }, { threshold: 0.2 });
  bars.forEach(bar => {
    // Reset width for animation
    bar.style.width = '0%';
    barObserver.observe(bar);
  });
});// Fade-in animation for sections on scroll
document.addEventListener('DOMContentLoaded', function() {
  const animatedEls = document.querySelectorAll('.animate-fadein');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadein-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  animatedEls.forEach(el => observer.observe(el));
});/*particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' }
    }
  }
});

/*etoile*/
/*
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function drawStar(x, y, radius, alpha) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
  ctx.fill();
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    drawStar(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, Math.random());
  }
  requestAnimationFrame(animateStars);
}
animateStars();*/


document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach(bar => {
    const value = bar.getAttribute("data-value");
    setTimeout(() => {
      bar.style.width = value;
    }, 500); // petit délai pour l'effet
  });
});
