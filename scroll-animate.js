const faders = document.querySelectorAll('.fade');
const skillFills = document.querySelectorAll('.skill-fill');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skills bars
      if (entry.target.classList.contains('skills-card')) {
        skillFills.forEach(skill => {
          skill.style.width = skill.dataset.skill;
        });
      }

      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

// Immediately show first card(s) on page load
faders.forEach((fader, index) => {
  if (index === 0) {
    fader.classList.add('visible');
    if (fader.classList.contains('skills-card')) {
      skillFills.forEach(skill => {
        skill.style.width = skill.dataset.skill;
      });
    }
  } else {
    appearOnScroll.observe(fader);
  }
});
