const previews = {
  strength: ['Workout logger', 'MyRoutine workout logger with bench press sets'],
  cardio: ['Saved cardio session', 'MyRoutine running summary with distance, elapsed time, average pace, and an offline route trace'],
  overview: ['Home and weekly goals', 'MyRoutine home screen with weekly targets, training volume, and level progress'],
};

const controls = [...document.querySelectorAll('[data-screen]')];
const screen = document.querySelector('#preview-image');
const caption = document.querySelector('#preview-caption');
const motion = matchMedia('(prefers-reduced-motion: reduce)');

for (const control of controls) {
  control.addEventListener('toggle', () => {
    if (!control.open) return;
    for (const other of controls) {
      if (other !== control) other.open = false;
    }
    const key = control.dataset.screen;
    screen.src = 'assets/' + key + '.png';
    [caption.textContent, screen.alt] = previews[key];
    if (!motion.matches) {
      screen.getAnimations().forEach(animation => animation.cancel());
      screen.animate([{opacity: .68}, {opacity: 1}], {duration: 270, easing: 'ease-out'});
    }
  });
}

if (!motion.matches && 'IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.remove('pending');
      reveal.unobserve(entry.target);
    }
  }, {threshold: .12});
  for (const section of document.querySelectorAll('.reveal')) {
    if (section.getBoundingClientRect().top < innerHeight) continue;
    section.classList.add('pending');
    reveal.observe(section);
  }
}
