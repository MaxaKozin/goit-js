const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');


switcherRef.addEventListener('change', event => {
  if (event.target.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    console.log('dark theme applied');
  }
  if (!event.target.checked) {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    console.log('light theme applied');
  }
});

document.addEventListener('DOMContentLoaded', e => {
  if (localStorage.theme) {
    if (localStorage.theme === Theme.LIGHT) {
      bodyRef.classList.remove(Theme.DARK);
      bodyRef.classList.add(Theme.LIGHT);
      switcherRef.checked = false;
    }
    if (localStorage.theme === Theme.DARK) {
      bodyRef.classList.remove(Theme.LIGHT);
      bodyRef.classList.add(Theme.DARK);
      switcherRef.checked = true;
    }
  }
  else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    switcherRef.checked = false;
  }
})
