const faders = document.querySelectorAll('.fade');
const skillFills = document.querySelectorAll('.skill-fill');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');

    if (entry.target.classList.contains('skills-card')) {
      skillFills.forEach(skill => {
        skill.style.width = skill.dataset.skill;
      });
    }

    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
