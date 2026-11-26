const previews = {
  strength: {
    caption: 'Workout logger',
    alt: 'MyRoutine workout screen showing exercises and sets',
  },
  cardio: {
    caption: 'Cardio inside Train',
    alt: 'MyRoutine cardio session showing distance, elapsed time, pace, and steps',
  },
  overview: {
    caption: 'Home and weekly progress',
    alt: 'MyRoutine home screen showing a weekly goal and training progress',
  },
  community: {
    caption: 'Community feed',
    alt: 'MyRoutine Community feed showing a shared fitness milestone',
  },
};

const controls = document.querySelectorAll('[data-screen]');
const image = document.querySelector('#preview-image');
const caption = document.querySelector('#preview-caption');

for (const control of controls) {
  control.addEventListener('toggle', () => {
    if (!control.open) return;
    for (const other of controls) {
      if (other !== control) other.open = false;
    }
    const key = control.dataset.screen;
    image.alt = previews[key].alt;
    image.src = `assets/${key}.jpg`;
    caption.textContent = previews[key].caption;
  });
}
