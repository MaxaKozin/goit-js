const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

const themeApplying = (keyApply, keyRemove) => {
  bodyRef.classList.remove(Theme[keyRemove]);
  bodyRef.classList.add(Theme[keyApply]);
  localStorage.setItem('theme', Theme[keyApply]);
  console.log(`${Theme[keyApply]} applied`);
};

const storageSave = (themeApply, themeRemove) => {
  bodyRef.classList.remove(themeRemove);
  bodyRef.classList.add(themeApply);
  if (themeApply === Theme.LIGHT) {
    switcherRef.checked = false;
  }
  if (themeApply === Theme.DARK) {
    switcherRef.checked = true;
  }
};

switcherRef.addEventListener('change', event => {
  if (event.target.checked) {
    themeApplying('DARK', 'LIGHT');
  }
  if (!event.target.checked) {
    themeApplying('LIGHT', 'DARK');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.theme) {
    if (localStorage.theme === Theme.LIGHT) {
      storageSave(Theme.LIGHT, Theme.DARK);
    }
    if (localStorage.theme === Theme.DARK) {
      storageSave(Theme.DARK, Theme.LIGHT);
    }
  } else {
    storageSave(Theme.LIGHT, Theme.DARK);
  }
});
