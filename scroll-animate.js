// FADE IN CARDS & SKILLS ANIMATION
const faders = document.querySelectorAll('.fade');
const skills = document.querySelectorAll('.skill-fill');

const options = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Animate skill bars
const skillObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      if(fill) fill.style.width = fill.dataset.skill;
    }
  });
}, options);

document.querySelectorAll('.skill').forEach(skill => {
  skillObserver.observe(skill);
});
// Percentage counter animation
const countUp = (el, target) => {
  let count = 0;
  const speed = 15;
  const interval = setInterval(() => {
    if (count >= target) {
      el.innerText = target + "%";
      clearInterval(interval);
    } else {
      count++;
      el.innerText = count + "%";
    }
  }, speed);
};

// Extend skill observer to animate percentage
const skillPercentObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      const percent = entry.target.querySelector('.percent');

      if (fill && percent) {
        const value = parseInt(fill.dataset.skill);
        fill.style.width = value + "%";
        countUp(percent, value);
      }

      skillPercentObserver.unobserve(entry.target);
    }
  });
}, options);

document.querySelectorAll('.skill').forEach(skill => {
  skillPercentObserver.observe(skill);
});